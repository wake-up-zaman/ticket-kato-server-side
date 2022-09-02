import jwt from "jsonwebtoken"
import User from "../models/model_users.js"


export const createUsers=async (req,res,next)=>{
    const newUsers=new User(req.body)

    try{
        const savedUsers=await newUsers.save()
        res.status(200).json(savedUsers)
    }catch(err){
       next(err);
    }
}

export const updateUser=async (req,res,next)=>{
    try {
        const email = req.params.email
        const user = req.body
        const filter = { email: email }
        const options = { upsert: true };
        const updateDoc = {
            $set: user
        }
        const result = await User.updateOne(filter, updateDoc, options);
        res.send(result)

      } catch (err) {
        next(err);
      }
}


export const deleteUser=async (req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
      } catch (err) {
        next(err);
      }
}


export const getUser=async (req,res,next)=>{
    const email = req.params.email
    const query = { email: email }
    try{
        const result=await User.findOne(query);

        res.status(200).json(result);
    }
    catch(err){
        next(err)
    }
}


export const getAllUser=async (req,res,next)=>{
    try{
        const Users=await User.find();
        res.status(200).json(Users);
    }
    catch(err){
        next(err)
    }
}


export const SetAdmin=async (req,res,next)=>{

    try{
        const email = req.params.email
        const filter = { email: email }
        const updateDoc = {
          $set: { role: 'admin' }
        }
        const result = await User.updateOne(filter, updateDoc);
        res.send(result)
    }catch(err){
       next(err);
    }
}


export const RemoveAdmin=async (req,res,next)=>{

    try{
        const email = req.params.email
        const filter = { email: email }
        const updateDoc = {
          $set: { role: '' }
        }
        const result = await User.updateOne(filter, updateDoc);
        res.send(result)
    }catch(err){
       next(err);
    }
}


export const getAdmin=async (req,res,next)=>{

    try{
        const email = req.params.email;
        const user = await User.findOne({ email: email });
        const isAdmin = user.role === "admin";
        res.send({ admin: isAdmin });

    }catch(err){
       next(err);
    }
}