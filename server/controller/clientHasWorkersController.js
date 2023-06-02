const clientHasWorker = require("../model/clientsHasWorkersModel");

module.exports = {
  addClientHasWorker: (req, res) => {
    const { client_id, worker_id, service_id, date } = req.body;
    clientHasWorker.add(
      (error, results) => {
        if (error) res.status(500).send(error);
        else res.status(200).json(results);
      },
      client_id,
      worker_id,
      service_id,
      date
    );
  },
  getAllClientHasWorkers: (req, res) => {
    clientHasWorker.get((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    });
  },
  getClientHasWorker: (req, res) => {
    clientHasWorker.getOne(
      (error, results) => {
        if (error) res.status(500).send(error);
        else res.status(200).json(results);
      },
      req.params.client_id,
      req.params.worker_id,
      req.params.service_id
    );
  },
  deleteClientHasWorker: (req, res) => {
    clientHasWorker.delete(
      (error, results) => {
        if (error) res.status(500).send(error);
        else res.status(200).json(results);
      },
      req.params.client_id,
      req.params.worker_id,
      req.params.service_id
    );
  },
  updateClientHasWorker: (req, res) => {
    const { client_id, worker_id, service_id, date } = req.body;
    clientHasWorker.update(
      (error, results) => {
        if (error) res.status(500).send(error);
        else res.status(200).json(results);
      },
      client_id,
      worker_id,
      service_id,
      date
    );
  },
};
