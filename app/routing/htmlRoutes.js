// makes connnecting html seamless
var path = require("path");


// Routes
// export paramater app(express) and redirect to survey or home html

module.exports = function (app) {

  // get route to /survey which displays the survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });


// A default, catch-all route that leads to home.html which displays the home page.
  app.use("", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
