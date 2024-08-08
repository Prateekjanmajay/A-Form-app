const mongoose = require("mongoose");

const form = {
  name: String,
  email: String,
  phone: Number,
  address: String,
  city: String,
  state: String,
  country: String,
};

const contactSchema = new mongoose.Schema(form);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
