import mongoose from 'mongoose';

const reviewsSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true 
    },
    photos:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    review:{
        type:String,
        required:true
    }
    
});

export default mongoose.model("Reviews",reviewsSchema)