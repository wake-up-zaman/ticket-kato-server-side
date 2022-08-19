import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import busesRoute from "./routes/buses.js"
import usersRoute from './routes/users.js'
import reviewsRoute from "./routes/reviews.js"
dotenv.config()
const app=express()
const port = process.env.PORT || 8800;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoose ticket kato pro");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected",()=>{
  console.log("mongoDB disconnected !")
})

mongoose.connection.on("connected",()=>{
  console.log("mongoDB connected !")
})

//middleWires
app.use(express.json())

app.use("/buses",busesRoute);
app.use("/users",usersRoute);
app.use("/reviews",reviewsRoute);


app.use((err,req,res,next)=>{
  const errorStatus=err.status || 500
  const errorMessage=err.message || "Something went wrong"
  return res.status(errorStatus).json({
    success:false,
    status: errorStatus,
    message:errorMessage,
    stack:err.stack,
  })
})


app.get("users",(req,res)=>{
  res.send("hello from ticket kato pro")
})


app.listen(8800, () => {
  connect();
  console.log("Connected to backend 8800.");
});