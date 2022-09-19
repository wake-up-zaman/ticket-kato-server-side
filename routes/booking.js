const express = require('express');
const { createBooking, deleteBooking, getAllBooking, getBooking, updateBooking } =require("../controllers/controller_booking.js");

const router=express.Router();

//CREATE of Booking
router.post("/", createBooking);

//UPDATE
router.put("/:id", updateBooking);

//DELETE
router.delete("/:id", deleteBooking);

//GET
router.get("/:email",getBooking);

//GET ALL
router.get("/", getAllBooking);


module.exports=router;