const express = require("express");
const path = require("path");
const cors = require("cors");
const homeServicesRouter = require("./Routes/homeServicesRoute");
const educationRouter = require("./Routes/educationRoute");
const medicineRouter = require("./Routes/medicineRoute");
const contactUsRouter = require("./Routes/contactUsRoute");
const AppError = require("./utils/appError");

const app = express();

app.use(cors());

app.options("*", cors());

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use("/api/v1/homeservices", homeServicesRouter);
app.use("/api/v1/education", educationRouter);
app.use("/api/v1/medicine", medicineRouter);
app.use("/api/v1/contactus", contactUsRouter);

app.use("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

console.log("App Started successfully");

module.exports = app;
