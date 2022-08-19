import express from "express"
import { createBusesInfo, getAllBusesInfo } from "../controllers/controllers_busesInfo.js";
const router=express.Router();



router.post("/", createBusesInfo);
//GET ALL
router.get("/", getAllBusesInfo)


export default router;