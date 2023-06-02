const express = require("express");
const router = express.Router();
const {
  addService,
  getAllServices,
  getService,
  deleteService,
  updateService,
} = require("../controller/serviceController");

router.post("/addService", addService);
router.get("/getAll", getAllServices);
router.get("/getOne/:id", getService);
router.delete("/delete/:id", deleteService);
router.put("/updateService/:id", updateService);

module.exports = router;
