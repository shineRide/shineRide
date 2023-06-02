const express = require("express");
const router = express.Router();
const {
  addWorker,
  getAllWorkers,
  getWorker,
  deleteWorker,
  updateWorker,
} = require("../controller/workerController");

router.post("/addWorker", addWorker);
router.get("/getAll", getAllWorkers);
router.get("/getOne/:id", getWorker);
router.delete("/delete/:id", deleteWorker);
router.put("/updateWorker/:id", updateWorker);

module.exports = router;
