const express = require("express");
const router = express.Router();
const {
  addClientHasWorker,
  getAllClientHasWorkers,
  getClientHasWorker,
  deleteClientHasWorker,
  updateClientHasWorker,
} = require("../controller/clientHasWorkersController");

router.post("/addClientHasWorker", addClientHasWorker);
router.get("/getAll", getAllClientHasWorkers);
router.get("/getOne/:client_id/:worker_id/:service_id", getClientHasWorker);
router.delete(
  "/delete/:client_id/:worker_id/:service_id",
  deleteClientHasWorker
);
router.put(
  "/updateClientHasWorker/:client_id/:worker_id/:service_id",
  updateClientHasWorker
);

module.exports = router;
