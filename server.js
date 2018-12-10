// Dependencies
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
var express = require("express");
// Body-parser allows us to receive our information back in JSON form so it is easy to manipulate **
var bodyParser = require("body-parser");

var path = require("path");



// Sets up the Express App
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// a how to respond when users visit or request data from different URLs.
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// LISTENER
// Server to start listening

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

