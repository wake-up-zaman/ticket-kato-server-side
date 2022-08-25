import express from "express";
import {
  createSeats,
  deleteSeats,
  getSeats,
  getAllSeats,
  updateSeats,
  updateSeatsAvailability,
  getSingleSeat,
} from "../controllers/controller_Seats.js";


const router = express.Router();
//CREATE
router.post("/:busID", createSeats);

//UPDATE
router.put("/availability/:id", updateSeatsAvailability);

router.put("/:id", updateSeats);

//DELETE
router.delete("/:id/:busId", deleteSeats);

//GET
router.get("/:id", getSeats);

//GET ALL
router.get("/", getAllSeats);

//GET SINGLE SEAT

router.get("/singleSeat/:id",getSingleSeat)

export default router;