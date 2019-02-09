// generate app quickly, http helper in redirection, caching, high performance
var express = require("express");
// provides utilities for working with file and directory paths
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// a how to respond when users visit or request data from different URLs.

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// start server
app.listen(PORT, function() {
  console.log("*** App listening on PORT: " + PORT);
});

