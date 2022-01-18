const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hadnleErrors = (err) => {
  let error = { email: "", password: "" };

  //login errora

  if (err.message === "User does not exist") {
    error.email = "Email not  Registered";
  }

  if (err.message === "Incorrect password") {
    error.password = "Incorrect Password";
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

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
    const Reqemail = req.body.email;
    const Reqpassword = req.body.password;
    //call static functuion from userShema model
    const user = await User.login(Reqemail, Reqpassword);

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
    const userDetails = { ...others, accessToken };

    //set cookies
    res.cookie("jwtToken", accessToken);
    //send response with user object and jwt token
    res.status(201).json({ userDetails });
  } catch (err) {
    const errors = hadnleErrors(err);
    res.status(500).json({ errors });
  }
});

router.get("/logout", async (req, res) => {
  res.cookie("jwtToken", "", { maxAge: 1 });
});
module.exports = router;
