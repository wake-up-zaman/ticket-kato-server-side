import mongoose from 'mongoose';

const BusesSchema=new mongoose.Schema({
    travel_date:{
        type:String, 
    },
    return_date:{
        type:String,
    },
    operator_name:{
        type:String,
        required:true
    },
    operator_names:{
        type:[String],
    },
    bus_classes:{
        type:[String]
    },
    bus_type:{
        type:String,
        required:true
    },
    bus_class:{
        type:String,
        required:true
    },
    coach_number:{
        type: Number,
        required:true
    },
    route:{
        type:String,
        required:true
    },
    departure_city:{
        type:String,
        required:true        
    },
    arrival_city:{
        type:String,
        required:true        
    },
    departure_time:{
        type:String,
        required:true        
    },
    arrival_time:{
        type:String,
        required:true        
    },
    photos:{
        type:[String],
    },
    available_seats:{
        type: [String],
    },
    boarding_point:{
        type:String,
        required:true
    },
    dropping_point:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5,
    },
    featured:{
        type: Boolean,
        default:false
    }
    
});

export default mongoose.model("Buses",BusesSchema)