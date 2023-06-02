const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const clientRoute = require("./routes/clientRoute");
const workerRoute = require("./routes/workerRoute");
const serviceRoute = require("./routes/serviceRoute");
const clientHasWorker = require("./routes/clientHasWorkerRoute");
app.use("/client", clientRoute);
app.use("/worker", workerRoute);
app.use("/service", serviceRoute);
app.use("/clientHasWorker", clientHasWorker);

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
