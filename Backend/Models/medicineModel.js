const mongoose = require("mongoose");

const form = {
  name: String,
  id: Number,
  hospitalName: String,
  patientName: String,
  patientId: Number,
  state: String,
  country: String,
};

const medicine1Schema = new mongoose.Schema(form);

const medicine2Schema = new mongoose.Schema(form);

const medicine3Schema = new mongoose.Schema(form);

module.exports = {
  BloodBank: mongoose.model("BloodBank", medicine1Schema),
  Instrument: mongoose.model("Instrument", medicine2Schema),
  TestReport: mongoose.model("TestReport", medicine3Schema),
};
