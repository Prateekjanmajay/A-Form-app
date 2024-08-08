const express = require("express");
const educationController = require("../Controllers/educationController");
const router = express.Router();

// CIVIL SERVICES
router
  .route("/civilservices")
  .get(educationController.getAllCourse1)
  .post(educationController.createCourse1)
  .delete(educationController.deleteAllCourse1);

router
  .route("/civilservices/:id")
  .get(educationController.getOneCourse1)
  .patch(educationController.updateCourse1)
  .delete(educationController.deleteOneCourse1);

// CA/CS
router
  .route("/ca-cs")
  .get(educationController.getAllCourse2)
  .post(educationController.createCourse2)
  .delete(educationController.deleteAllCourse2);

router
  .route("/ca-cs/:id")
  .get(educationController.getOneCourse2)
  .patch(educationController.updateCourse2)
  .delete(educationController.deleteOneCourse2);

// MED/ENG
router
  .route("/med-eng")
  .get(educationController.getAllCourse3)
  .post(educationController.createCourse3)
  .delete(educationController.deleteAllCourse3);

router
  .route("/med-eng/:id")
  .get(educationController.getOneCourse3)
  .patch(educationController.updateCourse3)
  .delete(educationController.deleteOneCourse3);

module.exports = router;
