
var dateType = require("../data/friends");


module.exports = function (app)
{
  // display dateType at /api/friends
  app.get("/api/friends", function (req, res)
  {
    res.json(dateType);
  });

  // api post method for posting new users to dateType
  app.post('/api/friends', function (req, res)
  {
    // Capture the user input object
    var userData = req.body;
    //users scores
    var userResponses = userData.scores;

    var matchName = '';
    var matchImage = '';
    var totalDifference = 100;

    for (var i = 0; i < dateType.length; i++)
    {
      // find the difference between dateType scores and user scores
      var diff = 0;
      for (var j = 0; j < userResponses.length; j++)
      {
        // get the difference between friends characters scores and the user response; j refering to the same question and i refering to the length of questions
        diff += Math.abs(dateType[ i ].scores[ j ] - userResponses[ j ]);
      }
      if (diff < totalDifference)
      {
        totalDifference = diff;
        matchName = dateType[ i ].name;
        matchImage = dateType[ i ].photo;
      }
    }
    // add new userData to friends data displayed at api/friends
    dateType.push(userData);

    res.json({
      status: 'OK',
      matchName: matchName,
      matchImage: matchImage
    });
  });
}