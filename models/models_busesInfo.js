import mongoose from 'mongoose';

const BusesInfoSchema=new mongoose.Schema({
    operator_name:{
        type:String, 
    },
    bus_class
:{
        type:String,
    },
    bus_type
:{
        type:String,

    },
    coach_number:{
        type:String,

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
    departure_city:{
        type:String,
     
    },
    arrival_city:{
        type:String,
    
    },
    available_seats:{
        type: Number,

    },
    price:{
        type: Number,

    },
    boarding_point:{
        type:String,

    },
    dropping_point:{
        type:String,

    },

    
});

export default mongoose.model("BusesInfo",BusesInfoSchema)