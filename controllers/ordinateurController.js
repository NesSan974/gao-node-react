const db = require("../models");
const Ordinateur = db.Ordinateur;
const Op = db.Sequelize.Op;




// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.newOrd) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a ord
  const ord = {
    nom: req.body.newOrd
  };

  // Save in the database
  Ordinateur.create(ord)
    .then(data => {
      res.send({
        id : data.id,
        nom : data.nom,

        Attributions :
        
        db.Attribution.findAll({
          where : {
            idOrdinateur : data.id
          }
        }),
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

  Ordinateur.findAll()
    .then(data => {
      res.send(data);
    })
  // .catch(err => {
  //   res.status(500).send({
  //     message:
  //       err.message || "Some error occurred while retrieving data."
  //   });
  // });

};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {

  const id = req.params.id;

  Ordinateur.findByPk(id)
    .then(data => {
      res.send(data);
    })
};

// Update  by the id in the request
exports.show = (req, res) => {
  // Validate request
  if (!req.body.date) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  date = req.body.date;

  Ordinateur.findAll({
    where : {
      createdAt:{ [Op.eq]:date }
    }
  })
    .then(data => {
      res.send(data);
    })

};

// Delete  with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Ordinateur.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Ordinateur was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete with id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete with id=" + id
      });
    });
};


exports.withAttribution = (req, res) => {


  // Validate request


  // if (!req.body.date) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }


  const date = req.body.date



  Ordinateur.findAll({
    attributes: ['id', 'nom'],
    include: [
      {
        model: db.Attribution,
        attributes: ['id', 'date', 'hours'],
        attributes: ['id', 'horraire'],
        required: false,
        where: {
          date: date
        },
        include: [{
          model: db.Client,
          attributes: ['id', 'nom', 'prenom'],
          required: false
        }]
      }
    ]
  })
  .then(data => {
    res.send(data);
  })
}