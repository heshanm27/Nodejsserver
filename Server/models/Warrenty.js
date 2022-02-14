const mongoose = require("mongoose");
const Bill = require("./Bill");

const WarrentySchema = new mongoose.Schema(
  {
    warrentyNo: { type: String, required: true, unique: true },
    customerName: { type: String, required: true },
    adddress: { type: String, required: true },
    contactNo: { type: String, required: true },
    dateOfRepair: { type: String, required: true },
    warrantyTill: { type: String, required: true },
    technician: { type: String, required: true },
    technicianContatNo: { type: String, required: true },
    vehicalBrand: { type: String, required: true },
    vehicalRegistrationNo: { type: String, required: true },
    engineCode: { type: String, required: true },
    injectorMake: { type: String, required: true },
    injectorNo: { type: String, required: true },
    injectorCode: { type: String, required: true },
    extraDetails: { type: String, required: true },
    img: { type: String, required: true },
    billNo: { type: String, required: true },
    billID: { type: mongoose.SchemaTypes.ObjectId, ref: "Bill" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Warrenty", WarrentySchema);
