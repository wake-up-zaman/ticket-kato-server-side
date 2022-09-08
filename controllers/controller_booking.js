import Booking from "../models/model_booking.js";


export const createBooking=async (req,res,next)=>{
    const newBooking=new Booking(req.body)

    try{
        const savedBooking=await newBooking.save()
        res.status(200).json(savedBooking)
    }catch(err){
       next(err);
    }
} 


export const updateBooking=async (req,res,next)=>{
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedBooking);
      } catch (err) {
        next(err);
      }
}


export const deleteBooking=async (req,res,next)=>{
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.status(200).json("Booking has been deleted.");
      } catch (err) {
        next(err);
      }
}


export const getBooking=async (req,res,next)=>{
    const booking=req.query;
    try{
        const booked=await Booking.find(
            booking
        );
        res.status(200).json(booked);
    }
    catch(err){
        next(err);
    }
}


export const getAllBooking=async (req,res,next)=>{
    const booking=req.query;
    try{
        const newBooking=await Booking.find(booking);
        res.status(200).json(newBooking);
    }
    catch(err){
        next(err);
    }
}