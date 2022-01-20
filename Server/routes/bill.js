const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorized,
} = require("../middleware/verifyToken");
const Bill = require("../models/Bill");

router.get("/getbill", (req, res) => {
  res.send("user data recived");
});

router.post("/addbill", async (req, res) => {
  const newbill = new Bill({
    billNo: req.body.billNo,
    amount: req.body.amount,
    address: req.body.address,
  });

  try {
    const saveduser = await newbill.save();
    res.status(200).json(saveduser);
  } catch (e) {
    return res.status(501).json(e.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatebill = await bill.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    return res.status(200).json(updatebill);
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.get("/income", verifyTokenAndAuthorized, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  console.log(lastMonth);
  const previousMonth = new Date(lastMonth.setMonth(lastMonth.getMonth() - 1));
  console.log(previousMonth);
  try {
    const income = await Bill.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
          billcount: "$billNo",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
          count: { $sum: 1 },
        },
      },
    ]);
    console.log(income);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
