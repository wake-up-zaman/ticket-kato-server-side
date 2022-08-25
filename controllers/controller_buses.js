import Buses from "../models/model_buses.js";
import Seat from "../models/model_seats.js";

export const createBuses=async (req,res,next)=>{
    const newBuses=new Buses(req.body)

    try{
        const savedBuses=await newBuses.save()
        res.status(200).json(savedBuses)
    }catch(err){
       next(err);
    }
}


export const updateBuses=async (req,res,next)=>{
    try {
        const updatedBuses = await Buses.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedBuses);
      } catch (err) {
        next(err);
      }
}


export const deleteBuses=async (req,res,next)=>{
    try {
        await Buses.findByIdAndDelete(req.params.id);
        res.status(200).json("Buses has been deleted.");
      } catch (err) {
        next(err);
      }
}


export const getBuses=async (req,res,next)=>{
    try{
        const buses=await Buses.findById(
            req.params.id
        );
        res.status(200).json(buses);
    }
    catch(err){
        next(err);
    }
}


export const getAllBuses=async (req,res,next)=>{
    const bus=req.query;
    try{
        const buses=await Buses.find(bus);
        res.status(200).json(buses);
    }
    catch(err){
        next(err);
    }
}

export const getBusesSeats = async (req, res, next) => {
    try {
      const bus = await Buses.findById(req.params.id);
      const list = await Promise.all(
       bus.available_seats.map((seat) => {
          return Seat.findById(seat);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };