var friends = require('../data/friends.js')
    // console.log(friends);
module.exports = function(app) {
    console.log(friends);
    app.get('/api/friends', function(req, res) {
        // console.log(friends)
        res.json(friends);
    });
    app.post('/api/friends', function(req, res) {
        // console.log(req.body)
        // res.json(req.body);
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userInput = req.body;
        var userScores = userInput.scores;

        var userName = userInput.name;
        var userPhoto = userInput.photo;

        var totalDifference = 0;

        for (var i = 0; i < friends.length - 1; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            for (var j = 0; j < 10; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }
        friends.push(userInput);

        res.json(bestMatch);
    });
}