import Payment from "../models/model_payment.js";
import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPayment=async (req,res,next)=>{
    const service=new Payment(req.body);
    const price=service.price;
    // const service=new Payment(req.body);
    const amount=price*100;
    try{
        const paymentIntent=await stripe.paymentIntents.create({
            amount:amount,
            currency:usd,
            payment_method_types:['card']
        })
        res.status(200).json({clientSecret: paymentIntent.client_secret})
    }catch(err){
       next(err);
    }
    
    // stripe.charges.create(

    //     {
    //         source: req.body.tokenId,
    //         amount:req.body.amount,
    //         currency: "bdt",
    //     },
    //     (stripeErr,stripeRes)=>{
    //         console.log("payment")
    //         if(stripeErr){
    //             res.status(500).json(stripeErr);
    //         }
    //         else{
    //             res.status(200).json(stripeRes);
    //         }
    //     }
    // )
}