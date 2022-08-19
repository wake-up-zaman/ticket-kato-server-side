import BusesInfo from "../models/models_busesInfo.js";

// app.get('/', async (req, res) => {
//     const query = {}
//     const cursor = models_busesInfo.find(query);
//     const buses = await cursor.toArray()
//     res.send(buses);

// })

export const createBusesInfo=async (req,res,next)=>{
    const newBuses=new BusesInfo(req.body)

    try{
        const savedBuses=await newBuses.save()
        res.status(200).json(savedBuses)
    }catch(err){
       next(err);
    }
}



export const getAllBusesInfo=async (req,res,next)=>{
    const bus=req.query;
    try{
        const buses=await BusesInfo.find(bus);
        console.log(buses)
        res.status(200).json(buses);
    }
    catch(err){
        next(err);
    }
}