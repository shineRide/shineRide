const client = require("../model/clientModel");

module.exports = {
  addClient: (req, res) => {
    client.add(
      (error, results) => {
        if (error) res.status(500).send(error);
        else res.status(200).json(results);
      },

      req.body.name,
      req.body.email
    );
  },
  getAll: (req, res) => {
    client.get((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    });
  },

  getOne: (req, res) => {
    client.getOne((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    }, req.params.email);
  },
  deleteClient: (req, res) => {
    client.delete((error, results) => {
      if (error) res.status(500).send(error);
      else res.status(200).json(results);
    }, req.params.id);
  },

  updateClient: (req, res) => {
    const { client_id, name, email } = req.body;
    client.update(
      (error, results) => {
        if (error) res.status(500).send(error);
        else res.status(200).json(results);
      },
      client_id,
      name,
      email
    );
  },
};
