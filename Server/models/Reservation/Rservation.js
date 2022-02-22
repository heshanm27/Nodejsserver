const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fname: { type: String, required: true },
  mobileNo: { type: String, required: true },
  serviceType: { type: String, required: true },
  dateTime: { type: String, required: true },
  vehicleRegistationNo: { type: String, required: true },
  mileage: { type: Number, required: true },
  mileageUnit: { type: String, required: true },
  comment: { type: String },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
