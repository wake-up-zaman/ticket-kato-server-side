import mongoose from 'mongoose';

const PaymentSchema=new mongoose.Schema({
    // travel_date:{
    //     type:String, 
    // },
    // return_date:{
    //     type:String,
    // },
    // operator_name:{
    //     type:String,

    // },
    // operator_names:{
    //     type:[String],
    // },
    // bus_classes:{
    //     type:[String]
    // },
    // bus_type:{
    //     type:String,

    // },
    // bus_class:{
    //     type:String,

    // },
    // coach_number:{
    //     type: Number,

    // },
    // route:{
    //     type:String,

    // },
    // departure_city:{
    //     type:String,
   
    // },
    // arrival_city:{
    //     type:String,
     
    // },
    // departure_time:{
    //     type:String,
      
    // },
    // arrival_time:{
    //     type:String,
      
    // },
    // photos:{
    //     type:[String],
    // },
    // available_seats:{
    //     type: [String],
    // },
    // boarding_point:{
    //     type:String,

    // },
    // dropping_point:{
    //     type:String,

    // },
    price:{
        type: Number,

    }
});

export default mongoose.model("Payment",PaymentSchema)