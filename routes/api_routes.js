var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/customers", function(req, res) {
    db.Customer.findAll({}).then(function(dbCustomer) {
      res.json(dbCustomer)
    });
  });

  app.get("/api/customers/:id", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Customer.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.post("/api/customers", function(req, res) {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.Customer.create(req.body).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.delete("/api/customers/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Customer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

// GET route for getting all of the posts


app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
      res.json(dbBurger)
    });
  });
// app.get("/api/burgers", function(req, res) {
//     var query = {};
//     if (req.query.customer_id) {
//       query.CustomerId = req.query.customer_id;
//     }
//     db.Post.findAll({
//       where: query
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

  // Get route for retrieving a single post
  app.get("/api/burgers/:id", function(req, res) {
    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/burgers", function(req, res) {
      console.log(req.body.burger_name);
        db.Burger.create({
        name:req.body.burger_name,
        devoured: false}).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // PUT route for updating posts
  app.put("/api/burgers/:id", function(req, res) {
      console.log("ID: " +req.body.id)
      console.log("DEVOURED" + req.body.devoured)
    db.Burger.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });





};
