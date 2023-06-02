const worker = require("../model/workerModel");

module.exports = {
  addWorker: (req, res) => {
    worker.add(
      (error, results) => {
        if (error) res.status(500).send(error);
        else res.status(200).json(results);
      },
      req.body.name,
      req.body.email
    );
  },
  getAllWorkers: (req, res) => {
    worker.get((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    });
  },
  getWorker: (req, res) => {
    worker.getOne((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    }, req.params.id);
  },
  deleteWorker: (req, res) => {
    worker.delete((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    }, req.params.id);
  },
  updateWorker: (req, res) => {
    const { worker_id, name, email } = req.body;
    worker.update(
      (error, results) => {
        if (error) res.status(500).send(error);
        else res.status(200).json(results);
      },
      worker_id,
      name,
      email
    );
  },
};
