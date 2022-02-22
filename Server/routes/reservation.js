const router = require("express").Router();
const mongoose = require("mongoose");
const {
  verifyToken,
  verifyTokenAndAuthorized,
} = require("../middleware/verifyToken");
const Reservation = require("../models/Reservation/Rservation");
const objId = mongoose.Types.ObjectId;

router.get("/usertest", (req, res) => {
  res.send("user data recived");
});

router.post("/add", async (req, res) => {
  try {
    const newReservation = await Reservation.create({
      title: req.body.title,
      fname: req.body.fname,
      lname: req.body.lname,
      mobileNo: req.body.mobileNo,
      serviceType: req.body.serviceType,
      dateTime: req.body.dateTime,
      vehicleRegistationNo: req.body.vehicleRegistationNo,
      mileage: req.body.mileage,
      mileageUnit: req.body.mileageUnit,
      comment: req.body.comment,
    });
    await newReservation.save();
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
    res.status(200).send({ message: "Bid Sucessfully Added" });
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/all", async (req, res) => {
  try {
    const vehicle = await Vehicle.find({}).populate("Bid.uid");
    res.status(200).json(vehicle);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "Server Error" });
  }
});

router.delete("userdelete");
module.exports = router;
