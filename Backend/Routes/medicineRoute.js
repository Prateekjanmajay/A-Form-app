const express = require("express");
const medicineController = require("../Controllers/medicineController");
const router = express.Router();

// BLOODBANK
router
  .route("/bloodbank")
  .get(medicineController.getAllMedicine1)
  .post(medicineController.createMedicine1)
  .delete(medicineController.deleteAllMedicine1);

router
  .route("/bloodbank/:id")
  .get(medicineController.getOneMedicine1)
  .patch(medicineController.updateMedicine1)
  .delete(medicineController.deleteOneMedicine1);

// INSTRUMENT
router
  .route("/instrument")
  .get(medicineController.getAllMedicine2)
  .post(medicineController.createMedicine2)
  .delete(medicineController.deleteAllMedicine2);

router
  .route("/instrument/:id")
  .get(medicineController.getOneMedicine2)
  .patch(medicineController.updateMedicine2)
  .delete(medicineController.deleteOneMedicine2);

// TEST REPORT
router
  .route("/testreport")
  .get(medicineController.getAllMedicine3)
  .post(medicineController.createMedicine3)
  .delete(medicineController.deleteAllMedicine3);

router
  .route("/testreport/:id")
  .get(medicineController.getOneMedicine3)
  .patch(medicineController.updateMedicine3)
  .delete(medicineController.deleteOneMedicine3);

module.exports = router;
