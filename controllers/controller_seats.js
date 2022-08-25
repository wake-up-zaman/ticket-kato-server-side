import Seat from "../models/model_seats.js";
import Buses from "../models/model_buses.js";
import { createError } from "../utils/error.js";

export const createSeats = async (req, res, next) => {
  const busId = req.params.busID;
  const newSeat = new Seat(req.body);

  try {
    const savedSeat = await newSeat.save();
    try {
      await Buses.findByIdAndUpdate(busId, {
        $push: { available_seats: savedSeat._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedSeat);
  } catch (err) {
    next(err);
  }
};

export const updateSeats = async (req, res, next) => {
  try {
    const updatedSeat = await Seat.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSeat);
  } catch (err) {
    next(err);
  }
};
export const updateSeatsAvailability = async (req, res, next) => {
  try {
    await Seat.updateOne(
      { "seatNumbers._id": req.params.id },
      {
        $push: {
          "seatNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Seat status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteSeats = async (req, res, next) => {
  const busId = req.params.busId;
  try {
    await Seat.findByIdAndDelete(req.params.id);
    try {
      await Buses.findByIdAndUpdate(busId, {
        $pull: { Seats: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Seat has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getSeats = async (req, res, next) => {
  try {
    const seat = await Seat.findById(req.params.id);
    res.status(200).json(seat);
  } catch (err) {
    next(err);
  }
};
export const getAllSeats = async (req, res, next) => {
  try {
    const seats = await Seat.find();
    res.status(200).json(seats);
  } catch (err) {
    next(err);
  }
};


export const getSingleSeat = async (req, res, next) => {
  try {
    const seat = await Seat.findById(req.params.id);
    res.status(200).json(seat);
  } catch (err) {
    next(err);
  }
};