// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
    db.burgers.findAll({}).then(function(result) {
      // We have access to the todos as an argument inside of the callback function
      res.render("index");
    });

  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/burger", function(req, res) {
    console.log(req.body.burger_name);
    db.burgers.create({
      burger_name: req.body.burger_name
    }).then(function(results) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(results);
    });

  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/burger/:id", function(req, res) {
    db.burgers.update({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurgers){
      res.json(dbBurgers);
    }) 

  });
};