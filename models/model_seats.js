
import mongoose from "mongoose";
const SeatSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    seatNumbers: [
      { number: Number,
        seatName: String,
        unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);

export default mongoose.model("Seat", SeatSchema);