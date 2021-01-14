const db = require("../models");
const Attribution = db.Attribution;
const Op = db.Sequelize.Op;


exports.test = (req, res) => {
  res.send({ message: "test" })
}



// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ordinateur_id && !req.body.client_id && !req.body.horraire && !req.body.date) { //date
    res.status(400).send({
      message: "One or more field are empty"
    });
    return;
  }


  // Create

  var client;
  
  db.Client.findOne({
    attributes: ['id', 'nom', 'prenom'],
    where: {
      id: req.body.client_id
    }
  })
  .then(data => {
    client = data
  })

  const r = {

    idOrdinateur: req.body.ordinateur_id,
    idClient: req.body.client_id,
    horraire: req.body.horraire,
    date: req.body.date
  };

  // Save in the database

  Attribution.create({

    idOrdinateur: req.body.ordinateur_id,
    idClient: req.body.client_id,
    horraire: req.body.horraire,
    date: req.body.date
  })
    .then(data => {
      res.send({
        id: data.id,
        idOrdinateur: data.idOrdinateur,
        idClient: data.idClient,
        horraire: data.horraire,
        date : data.date,

        client: client
      });

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ordinateur."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Attribution.findAll().then(data => {
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
  const id = req.params.id;

  Attribution.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Attribution was deleted successfully!",
          id: id
        });
      } else {
        res.send({
          message: `Cannot delete with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Ordinateur with id=" + id
      });
    });
};