const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("../models/User");
const VehicleSchema = new mongoose.Schema(
  {
    VehicleNo: { type: String, required: true, unique: true },
    Price: { type: Number, required: true },
    Model: { type: String, required: true },
    YearofManufacture: { type: String, required: true },
    Mileage: { type: Number, required: true },
    Bid: [
      {
        value: { type: Number },
        uid: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", VehicleSchema);
