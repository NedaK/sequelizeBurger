// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  

  app.get("/", function(req, res) {

    
    db.Burger.findAll({}).then(function(data) {
      var hbsObject = {
        burgers: data
      };
     console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });


};
