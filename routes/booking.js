import express from "express"
import { createBooking, deleteBooking, getAllBooking, getBooking, updateBooking } from "../controllers/controller_booking.js";

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


export default router;