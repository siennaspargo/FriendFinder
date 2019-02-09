// load data source with array information
var dateTypes = require("../data/friends");

// routing 

module.exports = function(app) {
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    res.json(dateTypes);
  });



  // A POST routes /api/friends. This will be used to handle incoming survey results.
  // This route will also be used to handle the compatibility logic
  app.post("/api/friends", function(req, res) {
    // the code here will  let the server respond to requests by sending out the value 

    // req.body is available since we're using the body parsing middleware

    // put friend matching data in here 

    // handle when a user submits a survey/data to the server

    var scoreArray = [];

    for (var i = 0; i < dateTypes.length; i++) {
      var userScore = dateTypes[i].allScores;
      scoreArray.push(userScore);
    }

    var totals = [];
    var lastInArray = scoreArray[scoreArray.length - 1];
    for (var i = 0; i < scoreArray.length -1; i++) {
      var total = 0;
      for (var h = 0; h < lastInArray.length; h++) {
        total += Math.abs(scoreArray[i][h] - lastInArray[h]); 
      }
      totals.push(total);
    }

    var minimum = 2000;
    var minimumIndex = -1; // set to -1 to know if error
    for (var i = 0; i < totals.length; i++) {
      if (totals[i] < minimum) {
        minimum = totals [i];
        minimumIndex = i;
      }
    }

    dateTypes.push(req.body);
    res.json(dateArray[minimumIndex]);
  });



  };
