module.exports = app => {

  var router = require("express").Router();

  require("./ordinateur")(app);

  require("./client")(app);
  require("./attribution")(app);

  app.use('/api', router);
};