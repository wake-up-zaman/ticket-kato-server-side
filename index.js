import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import busesRoute from "./routes/buses.js"
import usersRoute from './routes/users.js'
import reviewsRoute from "./routes/reviews.js"
import seatsRoute from './routes/seats.js'
import paymentRoute from './routes/payment.js'
import cors from "cors"

dotenv.config()
const app=express()
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
app.use("/users",usersRoute);
app.use("/reviews",reviewsRoute);
app.use("/seats", seatsRoute);
app.use("/create-payment-intent",paymentRoute);

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