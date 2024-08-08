const express = require("express");
const homeServicesController = require("../Controllers/homeServicesController");
const router = express.Router();

// ELECTRICITY BILL
router
  .route("/ebill")
  .get(homeServicesController.getAllEBill)
  .post(homeServicesController.createEBill)
  .delete(homeServicesController.deleteAllEBill);

router
  .route("/ebill/:id")
  .get(homeServicesController.getOneEBill)
  .patch(homeServicesController.updateEBill)
  .delete(homeServicesController.deleteOneEBill);

// GAS BILL
router
  .route("/gasbill")
  .get(homeServicesController.getAllGasBill)
  .post(homeServicesController.createGasBill)
  .delete(homeServicesController.deleteAllGasBill);

router
  .route("/gasbill/:id")
  .get(homeServicesController.getOneGasBill)
  .patch(homeServicesController.updateGasBill)
  .delete(homeServicesController.deleteOneGasBill);

// TELEPHONE BILL
router
  .route("/telbill")
  .get(homeServicesController.getAllTelBill)
  .post(homeServicesController.createTelBill)
  .delete(homeServicesController.deleteAllTelBill);

router
  .route("/telbill/:id")
  .get(homeServicesController.getOneTelBill)
  .patch(homeServicesController.updateTelBill)
  .delete(homeServicesController.deleteOneTelBill);

module.exports = router;
