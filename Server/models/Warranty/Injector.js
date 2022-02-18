const mongoose = require("mongoose");

const InjectorSchema = new mongoose.Schema(
  {
    injetortNo: { type: String, required: true, unique: true },
    customerName: { type: String, required: true },
    dateOfRepair: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Warrenty", WarrentySchema);
