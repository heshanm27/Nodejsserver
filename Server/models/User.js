const mongoose = require("mongoose");
const { isEmail } = require("validator");
const CryptoJS = require("crypto-js");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please Enter Email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Minimum password length is 6 characters"],
    },
    isAdmin: { type: Boolean, default: false },
    profileImg: { type: String, default: "img" },
  },
  { timestamps: true }
);

//middle ware to hash password
userSchema.pre("save", async function (next) {
  this.password = await CryptoJS.AES.encrypt(
    this.password,
    process.env.CRYPTO_SEC
  ).toString();
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
