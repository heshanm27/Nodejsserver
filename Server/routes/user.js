const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorized,
} = require("../middleware/verifyToken");
const User = require("../models/User");

router.get("/usertest", (req, res) => {
  res.send("user data recived");
});

router.post("/userpost", (req, res) => {
  const username = req.body.username;
  console.log(username);
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

router.delete("userdelete");
module.exports = router;
