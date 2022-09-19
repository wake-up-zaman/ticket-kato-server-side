const express = require('express');
const { createPayment} =require("../controllers/controller_payment.js");
// import { verifyToken } from "../utils/verifyToken.js";
const router=express.Router();

//CREATE of payment
router.post("/", createPayment);


module.exports=router;