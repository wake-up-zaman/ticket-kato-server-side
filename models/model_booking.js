const mongoose=require('mongoose');

const BookingSchema=new mongoose.Schema({
    travel_date:{
        type:String, 
    },
    operator_name:{
        type:String,

    },
    bus_class:{
        type:String,
    },
    coach_number:{
        type: Number,
    },
    route:{
        type:String,

    },
    departure_time:{
        type:String,
      
    },
    arrival_time:{
        type:String,
      
    },
    boarding_point:{
        type:String,

    },
    dropping_point:{
        type:String,

    },
    price:{
        type: Number,

    },
    seats:{
        type:[String],
    },
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    gender:{
        type:String,
    },
    phone:{
        type:String,
    }
});

module.exports=mongoose.model("Booking",BookingSchema)