const express = require('express');
const {
  createSeats,
  deleteSeats,
  getSeats,
  getAllSeats,
  updateSeats,
  updateSeatsAvailability,
  getSingleSeat,
}=require("../controllers/controller_seats.js");


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

module.exports=router;