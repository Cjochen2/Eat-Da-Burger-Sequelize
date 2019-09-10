// Dependencies
// =============================================================
var db = require("../models")
// Routes
// =============================================================
module.exports = function (app) {
    // Each of the below routes just handles the HTML page that the user gets sent to.
    // index route loads view.html
    app.get("/", function (req, res) {
        console.log("burgers started here");
        db.burgers.findAll({}).then(function (burgers) {
            console.log({burgers: burgers})
            var hbsObject = {
                burgers: burgers
            }

            res.render("index", hbsObject);
        })
    });

};