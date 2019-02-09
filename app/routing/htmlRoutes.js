// makes connnecting html seamless
var path = require("path");


// Routes
// export paramater app(express) and redirect to survey or home html

module.exports = function (app) {

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });



  app.use("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};



// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
