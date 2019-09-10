require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
var app = express();
var exphbs = require("express-handlebars");
var db = require("./models");

//var path = require("path")

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);



db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Listening on port:%s", PORT);
  });
});