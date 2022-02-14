const mongoose = require("mongoose");
const Bill = require("./Bill");

const WarrentySchema = new mongoose.Schema(
  {
    warrentyNo: { type: String, required: true, unique: true },
    customerName: { type: String, required: true },
    adddress: { type: String },
    contactNo: { type: String },
    dateOfRepair: { type: String },
    warrantyTill: { type: String },
    technician: { type: String },
    technicianContatNo: { type: String },
    vehicalBrand: { type: String },
    vehicalRegistrationNo: { type: String },
    engineCode: { type: String },
    injectorMake: { type: String },
    injectorNo: { type: String },
    injectorCode: { type: String },
    extraDetails: { type: String },
    img: { type: String },
    billNo: { type: String },
    billID: { type: mongoose.SchemaTypes.ObjectId, ref: "Bill" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Warrenty", WarrentySchema);
