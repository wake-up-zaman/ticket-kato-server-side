const express = require('express');
const { createBuses, deleteBuses, getAllBuses, getBuses, getBusesSeats, updateBuses }=require("../controllers/controller_buses.js");

const router=express.Router();

//CREATE of buses
router.post("/", createBuses);

//UPDATE
router.put("/:id", updateBuses);

//DELETE
router.delete("/:id", deleteBuses);

//GET
router.get("/:id",getBuses);

//GET ALL
router.get("/", getAllBuses);

router.get("/seats/:id", getBusesSeats);

module.exports=router;