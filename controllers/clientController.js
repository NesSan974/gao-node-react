const db = require("../models");
const Client = db.Client;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {

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