module.exports = app => {
  const attribution = require("../controllers/attributionController");

  var router = require("express").Router();

  //--- ATTRIBUTIONS

  // Create a new Attribution
  router.post("/add", attribution.create);

  // Retrieve all Attribution
  // router.get("/", ordinateur.findAll);

  router.get("/", attribution.findAll);


  router.get("/test", attribution.test);

  // Retrieve a single Attribution with id
  router.get("/:id", attribution.findOne);




  // Delete an Attribution with id
  router.delete("/:id", attribution.delete);







  app.use('/api/attributions', router);
};