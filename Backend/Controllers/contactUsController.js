const factory = require("./handlerFactory");
const Contact = require("../Models/contactUsModel");

exports.createContact = factory.createOne(Contact);
exports.getAllContact = factory.getAll(Contact);
