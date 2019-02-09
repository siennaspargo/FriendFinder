 // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// LOAD DATA
// linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all friends
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

var friends = require("../data/friends");

// routing //

module.exports = function(app) {
    // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

    var userMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    var userData = req.body;
    var userScores = userData.scores;

    // calculate user's scores and scores of others
    var totalDifference;

    // loop through list of friends
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      // loop through scores of each friend
      for (var x = 0; x < currentFriend.scores.length; x++) {
        var currentFriendScore = currentFriend.scores[x];
        var currentUserScore = userScores [x];

        // calculate differende between scores and add for total difference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      // if differences is less then the differences of current best match
      if (totalDifference <= bestMatch.friendDifference) {
        // reset the bestMatch to be the new friend.
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
      // save user's data to the database
      friends.push(userData);
      // return json best match
      res.json(bestMatch);
    });
  };
