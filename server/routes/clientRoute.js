const express = require("express");
const router = express.Router();
const {
  addClient,
  getAll,
  deleteClient,
  getOne,
  updateClient,
} = require("../controller/clientController");

router.post("/addClient", addClient);
router.get("/getAll", getAll);
router.get("/getOne/:email", getOne);
router.delete("/deleteClient/:id", deleteClient);
router.put("/updateClients/:id", updateClient);

module.exports = router;
