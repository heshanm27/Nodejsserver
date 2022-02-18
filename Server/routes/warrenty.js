const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorized,
} = require("../middleware/verifyToken");
const Warrenty = require("../models/Warranty/Warrenty");
const Bill = require("../models/Bill");

router.get("/getbill", (req, res) => {
  res.send("user data recived");
});

router.post("/addwarrenty", async (req, res) => {
  try {
    //find crospond bill
    const BillNo = await Bill.findOne({ billNo: req.body.billNo });
    const { _id, billNo, ...others } = BillNo._doc;

    //add new bill
    const newWarrenty = new Warrenty({
      billID: _id,
      billNo: billNo,
      price: req.body.price,
      warrentyNo: req.body.warrentyNo,
    });
    //add warrentyID to bill
    const updatedBill = await Bill.findByIdAndUpdate(_id, {
      $set: { warrentyID: newWarrenty._id },
    });

    //save
    const saveduser = await newWarrenty.save();

    res.status(200).json(saveduser);
  } catch (e) {
    return res.status(501).json(e.message);
  }
});

router.post("/addwarrenty", async (req, res) => {
  try {
    //find crospond bill
    const BillNo = await Bill.findOne({ billNo: req.body.billNo });
    const { _id, billNo, ...others } = BillNo._doc;

    //add new bill
    const newWarrenty = new Warrenty({
      billID: _id,
      billNo: billNo,
      price: req.body.price,
      warrentyNo: req.body.warrentyNo,
    });
    //add warrentyID to bill
    const updatedBill = await Bill.findByIdAndUpdate(_id, {
      $set: { warrentyID: newWarrenty._id },
    });

    //save
    const saveduser = await newWarrenty.save();

    res.status(200).json(saveduser);
  } catch (e) {
    return res.status(501).json(e.message);
  }
});

router.post("/new", (req, res) => {
  const newWarrenty = new Warrenty({
    warrentyNo: req.body.warrentyNo,
    customerName: req.body.customerName,
  });

  newWarrenty
    .save()
    .then(() => {
      return res.status(201).json({ msg: "SuccesssFuly Entered" });
    })
    .catch((err) => {
      return res.status(500).json({ error: err.message });
    });
});

router.post("/findCustomer", async (req, res) => {
  try {
    const customerName = req.body.customerName;

    const existCustomer = await Warrenty.find({ customerName });

    if (existCustomer) {
      return res.status(200).json({ CustomerName: existCustomer });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.get("/all", (req, res) => {
  Warrenty.find({}, { customerName: 1 })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(501).json({ error: err.message });
    });
});
module.exports = router;
