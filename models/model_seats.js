const mongoose=require('mongoose');
const SeatSchema = new mongoose.Schema(
  {
    title: {
      type: String,

    },
    price: {
      type: Number,

    },
    maxPeople: {
      type: Number,

    },
    desc: {
      type: String,

    },
    seatNumbers: [
      { number: Number,
        seatName: String,
        unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);

module.exports=mongoose.model("Seat", SeatSchema);