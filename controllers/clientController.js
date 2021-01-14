const db = require("../models");
const Client = db.Client;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
   // Validate request
   if (!req.body.nom && !req.body.prenom) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a ord
  const r = {
    nom: req.body.nom,
    prenom: req.body.prenom,
  };

  // Save in the database
  Client.create(r)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the data."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  db.Client.findAll()
    .then(data => {
      res.send(data);
    })

};







// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {


};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};