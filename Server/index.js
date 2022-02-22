// import
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

//cors oprions
const corsOptions = {
  origin: "http://localhost:3000",
  method: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

//custome routes
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const billRoute = require("./routes/bill");
const warrentyRoute = require("./routes/warrenty");
const vehicleRoute = require("./routes/vehicle");
const employeeRoute = require("./routes/employee");
const reservationRoute = require("./routes/reservation");
//database connetion
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Databse connection Sucessfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welome to RosaCrd Api</h1>");
});
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

//user api end point

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/bill", billRoute);
app.use("/api/warrenty", warrentyRoute);
app.use("/api/vehicle/", vehicleRoute);
app.use("/api/employee/", employeeRoute);
app.use("/api/reservation/", reservationRoute);
//app running port
app.listen(process.env.PORT || 5000, () => {
  console.log("BackEnd server online");
});
