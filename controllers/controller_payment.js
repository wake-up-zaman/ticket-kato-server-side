// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
//  const createPayment=async (req,res,next)=>{
//     const service=new Payment(req.body);
//     const price=service.price;
//     // const service=new Payment(req.body);
//     const amount=price;
//     try{
//         const paymentIntent=await stripe.paymentIntents.create({
//             amount:amount,
//             currency:usd,
//             payment_method_types:['card']
//         })
//         res.status(200).json({clientSecret: paymentIntent.client_secret})
//     }catch(err){
//        next(err);
//     }
// }

// module.exports =  {
//     createPayment
// };
const express = require('express');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
require('dotenv').config();



const createPayment=async (req, res) => {
  // stripe.charges.create( 
  //   {
  //     source: req.body.tokenId,
  //     amount: req.body.amount,
  //     currency: "usd",
  //   },
  //   (stripeErr, stripeRes) => {
  //     if (stripeErr) {
  //       res.status(500).json(stripeErr);
  //     } else {
  //       res.status(200).json(stripeRes);
  //     }
  //   }
  // );


  app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
  
    res.redirect(303, session.url);
  });
  
  app.listen(4242, () => console.log('Running on port 4242'));
};

module.exports =  {
    createPayment
};