import express from "express"
import { createPayment} from "../controllers/controller_payment.js";
import { verifyToken } from "../utils/verifyToken.js";
const router=express.Router();

//CREATE of payment
router.post("/", createPayment);


export default router;