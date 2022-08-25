import mongoose from 'mongoose';

const reviewsSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true
    },
    img:{
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