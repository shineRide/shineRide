const service = require("../model/serviceModel");

module.exports = {
  addService: (req, res) => {
    const { name, price, duration } = req.body;
    service.add(
      (error, results) => {
        if (error) res.status(500).send(error);
        else res.status(200).json(results);
      },
      name,
      price,
      duration
    );
  },
  getAllServices: (req, res) => {
    service.getAll((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    });
  },
  getService: (req, res) => {
    service.getOne((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    }, req.params.id);
  },
  deleteService: (req, res) => {
    service.delete((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    }, req.params.id);
  },
  updateService: (req, res) => {
    const { name, price, duration } = req.body;
    service.update(
      (error, results) => {
        if (error) res.status(500).send(error);
        else res.status(200).json(results);
      },
      req.params.id,
      name,
      price,
      duration
    );
  },
};
