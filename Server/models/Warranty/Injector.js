const mongoose = require("mongoose");

const InjectorSchema = new mongoose.Schema(
  {
    injectoNo: { type: String, required: true, unique: true },
    injectorCode: { type: String, required: true },
    injectorMaker: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Injector", InjectorSchema);
