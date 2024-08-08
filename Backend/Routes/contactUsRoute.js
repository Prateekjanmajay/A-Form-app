const express = require("express");
const contactUsController = require("../Controllers/contactUsController");
const router = express.Router();

// CONTACT
router
  .route("/contact")
  .get(contactUsController.getAllContact)
  .post(contactUsController.createContact);

module.exports = router;
