const mongoose = require("mongoose");

const form = {
  id: Number,
  name: String,
  course: String,
  courseId: Number,
  city: String,
  state: String,
  country: String,
};

const course1Schema = new mongoose.Schema(form);

const course2Schema = new mongoose.Schema(form);

const course3Schema = new mongoose.Schema(form);

module.exports = {
  CivilServices: mongoose.model("CivilServices", course1Schema),
  CaCs: mongoose.model("CACS", course2Schema),
  MedEng: mongoose.model("MEDENG", course3Schema),
};
