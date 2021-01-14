module.exports = app => {
  const attribution = require("../controllers/attributionController");

  var router = require("express").Router();

  //--- ATTRIBUTIONS

  // Create a new Ordinateur
  router.post("/add", attribution.create);

  // Retrieve all Ordinateurs
  // router.get("/", ordinateur.findAll);

  router.get("/", attribution.findAll);


  router.get("/test", attribution.test);

  // Retrieve a single Ordinateur with id
  router.get("/:id", attribution.findOne);




  // Delete an Ordinateur with id
  router.delete("/:id", attribution.delete);







  app.use('/api/attributions', router);
};