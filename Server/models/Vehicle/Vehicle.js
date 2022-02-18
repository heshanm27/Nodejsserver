const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("../User");
const VehicleSchema = new mongoose.Schema(
  {
    VehicleNo: { type: String, required: true, unique: true },
    Price: { type: Number, required: true },
    Model: { type: String, required: true },
    YearofManufacture: { type: String, required: true },
    Brand: { type: String, required: true },
    Mileage: { type: Number, required: true },
    FuelType: { type: String, required: true },
    Color: { type: String, required: true },
    Transmission: { type: String, required: true },
    EngineCapacity: { type: String, required: true },
    Edition: { type: String, required: true },
    imgUrl: {
      type: Array,
      default:
        "https://firebasestorage.googleapis.com/v0/b/socialtest-cef88.appspot.com/o/Defaultimg%2Fundraw_Images_re_0kll.png?alt=media&token=ee57b9d5-fa04-4d85-8ac0-bd2cb8d04fb0",
    },
    Features: [String],
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
