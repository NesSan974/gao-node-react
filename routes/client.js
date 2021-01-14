module.exports = app => {
  const client = require("../controllers/clientController");

  var router = require("express").Router();

  //--- Clients


  // Create a new Clients
  router.post("/create", client.create);

  // Retrieve all Clients
  router.get("/", client.findAll);

  // Retrieve a single Clients with id
  router.get("/:id", client.findOne);


  // router.post("/show", client.show);


  // Delete a Clients with id
  router.delete("/:id", client.delete);









  app.use('/api/clients', router);
};