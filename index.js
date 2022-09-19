const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const app = express()
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const busesRoute=require("./routes/buses.js")
const bookingRoute=require("./routes/booking.js")
const usersRoute=require('./routes/users.js')
const reviewsRoute=require("./routes/reviews.js")
const seatsRoute=require('./routes/seats.js')
const paymentRoute=require('./routes/payment.js')
const port = process.env.PORT || 8800;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoose ticket kato pro");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected",()=>{
  console.log("mongoDB connected !")
})

mongoose.connection.on("disconnected",()=>{
  console.log("mongoDB disconnected !")
})

//middleWires
app.use(cors())
app.use(express.json())
const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use("/buses",busesRoute);
app.use("/booking",bookingRoute);
app.use("/users",usersRoute);
app.use("/reviews",reviewsRoute);
app.use("/seats", seatsRoute);
// app.use("/payment",paymentRoute)

app.post('/create-checkout-session', async (req, res) => {
  const customer=await stripe.customers.create({
    metadata:{
      userId:req.body.userId,
      // cart: JSON.stringify(req.body.busPro),
      seats:JSON.stringify(req.body.seats)
    }
  })
  const line_item=req.body;
  console.log(line_item);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data:{
          currency:"bdt",
          product_data:{
            name:"Tickets Price",
          },
          unit_amount:line_item.ticketPriceNow*100,
        },
        quantity: 1,
      },
    ],
    customer:customer.id,
    mode: 'payment',
    success_url: 'http://localhost:3000/checkout-success',
    cancel_url: 'http://localhost:3000/CompletePayment',
  });

  res.send({url: session.url});
});

let endpointSecret;
// const endpointSecret = "whsec_b0a8779033833831d057ecb3a2900f9e15a9dc726169a88146ba83aa6a36c6f7";

// app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  app.post(
    "/webhook",
    express.json({ type: "application/json" }),
    async (req, res) => {
      let data;
      let eventType;
  
      // Check if webhook signing is configured.
      let webhookSecret;
      //webhookSecret = process.env.STRIPE_WEB_HOOK;
  
      if (webhookSecret) {
        // Retrieve the event by verifying the signature using the raw body and secret.
        let event;
        let signature = req.headers["stripe-signature"];
  
        try {
          event = stripe.webhooks.constructEvent(
            req.body,
            signature,
            webhookSecret
          );
        } catch (err) {
          console.log(`⚠️  Webhook signature verification failed:  ${err}`);
          return res.sendStatus(400);
        }
        // Extract the object from the event.
        data = event.data.object;
        eventType = event.type;
      } else {
        // Webhook signing is recommended, but if the secret is not configured in `config.js`,
        // retrieve the event data directly from the request body.
        data = req.body.data.object;
        eventType = req.body.type;
      }
  
      // Handle the checkout.session.completed event
      if (eventType === "checkout.session.completed") {
        stripe.customers
          .retrieve(data.customer)
          .then(async (customer) => {
            try {
              // CREATE ORDER
              createOrder(customer, data);
            } catch (err) {
              console.log(typeof createOrder);
              console.log(err);
            }
          })
          .catch((err) => console.log(err.message));
      }
  
      res.status(200).end();
    }
  );


app.use((err,req,res,next)=>{
  const errorStatus=err.status || 500
  const errorMessage=err.message || "Something went wrong"
  return res.status(errorStatus).json({
    success:false,
    status: errorStatus,
    message:errorMessage,
    stack:err.stack,
  })
})


app.get("/",(req,res)=>{
  res.send("Hello From Ticket-Kato Pro")
})


app.listen(port, () => {
  connect();
  console.log("Connected to backend 8800.");
});