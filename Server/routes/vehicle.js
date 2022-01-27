const router = require("express").Router();
const mongoose = require("mongoose");
const {
  verifyToken,
  verifyTokenAndAuthorized,
} = require("../middleware/verifyToken");
const Vehicle = require("../models/Vehicle");
const User = require("../models/User");
const objId = mongoose.Types.ObjectId;

router.get("/usertest", (req, res) => {
  res.send("user data recived");
});

router.post("/add", async (req, res) => {
  try {
    const newVehicle = await Vehicle.create({
      VehicleNo: req.body.VehicleNo,
      Price: req.body.Price,
      Model: req.body.Model,
      YearofManufacture: req.body.YearofManufacture,
      Mileage: req.body.Mileage,
      Brand: req.body.Brand,
      Bid: req.body.Bid,
    });
    res.status(200).send({ message: "Sucessfully new vehicle added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//update user profile
router.put("/:id", verifyTokenAndAuthorized, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log(updatedUser);
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

//update user profile
router.put("/bid/:id", async (req, res) => {
  const vehicleid = req.params.id;
  const id = objId(req.body.uid);
  try {
    const user = await User.findById(id);
    const newVehicle = await Vehicle.findOneAndUpdate(
      { _id: vehicleid },
      { $push: { Bid: { uid: req.body.uid, value: req.body.value } } }
    );
    console.log(newVehicle);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/bid/:id", async (req, res) => {
  const vehicleid = objId(req.params.id);
  const id = objId(req.body.uid);
  try {
    const user = await Vehicle.findOne({ _id: req.params.id }).populate(
      "Bid.uid",
      "email"
    );
    res.status(200).json(user);
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
});

router.delete("userdelete");
module.exports = router;
