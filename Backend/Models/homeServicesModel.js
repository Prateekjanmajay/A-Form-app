const mongoose = require("mongoose");

const form = {
  accountId: {
    type: Number,
    required: [true, "There must be an account Id"],
    unique: true,
  },
  accountName: {
    type: String,
    required: [true, "There must be a account name"],
  },
  address: {
    type: String,
    required: [true, "There must be a address"],
  },
  phone: {
    type: Number,
  },
  state: String,
  country: {
    type: String,
  },
  totalBill: Number,
};

const bill1Schema = new mongoose.Schema(form);

const bill2Schema = new mongoose.Schema(form);

const bill3Schema = new mongoose.Schema(form);

module.exports = {
  EBill: mongoose.model("EBill", bill1Schema),
  GasBill: mongoose.model("GasBill", bill2Schema),
  TelBill: mongoose.model("TelBill", bill3Schema),
};

// exports.home = dbs.then((dbs) => {
//   return dbs.homeServices;
// });
// exports.edu = dbs.then((dbs) => {
//   return dbs.education;
// });
// exports.medi = dbs.then((dbs) => {
//   return dbs.medicine;
// });
// exports.conUs = dbs.then((dbs) => {
//   return dbs.contactUs;
// });
