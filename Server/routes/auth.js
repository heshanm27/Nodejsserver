const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const hadnleErrors = (err) => {
  let error = { email: "", password: "" };

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      console.log(properties);
      error[properties.path] = properties.message;
    });
  }
  return error;
};

//Register
router.post("/register", async (req, res) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    res.status(201).json(newUser);
  } catch (err) {
    const errors = hadnleErrors(err);
    res.status(500).json({ errors });
  }
});

//user login
router.post("/login", async (req, res) => {
  try {
    //search if any user has email in database

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json("User Does Not Exist");
      return;
    }

    //decrypt found user password
    const hashPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.CRYPTO_SEC
    );
    const Originalpassword = hashPassword.toString(CryptoJS.enc.Utf8);

    //check password validty
    if (Originalpassword !== req.body.password) {
      res.status(401).json("Wrong Credentials");
      return;
    }

    //create jwt token
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    //set cookies
    res.cookie("jwtToken", accessToken);
    //send response with user object and jwt token
    res.status(201).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
