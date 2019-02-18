
var dateTypes = require("../data/dateTypes");


module.exports = function (app)
{
  // display dateTypes at /api/dateTypess
  app.get("/api/dateTypes", function (req, res)
  {
    res.json(dateTypes);
  });

  // api post method for posting new users to dateTypes
  app.post('/api/dateTypes', function (req, res)
  {
    // Capture the user input object
    var userScore = req.body.scores;
    // users scores
    var dateTypesScores = [];
    var diff = 0;
    var totalDifference = [];


    for (i = 0; i < dateTypes.length; i++) {
      var dateScores = dateTypes[i],scores
      dateTypesScores.push(dateScores)
    }

    for (var i = 0; i < dateTypesScores.length; i++)
    { var match = dateTypesScores[i]
      diff = 0
      // find the difference between dateTypes scores and user scores
      for (var j = 0; j < userScore.length; j++)
      {
        // get the difference between dateTypes characters scores and the user response; j refering to the same question and i refering to the length of questions
      var  dif = Math.abs(parseInt(userScore[j])-parseInt(match[j]))
      diff = diff + dif
      if ((j + 1) === userScore.length) {
        totalDifference.push(diff)
      }
    }
  }

  var match = function indexOf(array) {
    var lil = array[0];
    var lilIndex = 0;

    for (var i = 1; i < array.length; i++) {
      if (array[i] < lil) {
        lilIndex = i;
        lil = array[i];
      }
    }
    return lilIndex;
  }


  dateTypes.push(req.body);
  res.json(dateTypes[match(totalDifference)])
    });
  }