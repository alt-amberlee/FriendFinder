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
            difference: 20
        };
        var newFriend = req.body;
        var newPhoto = req.body.newPhoto;
        var newName = req.body.newName;
        var newScores = req.body.scores;

        var friendCalc = 0;

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            friendCalc = 0;

            for (var j = 0; j < friends[i].scores.length; j++) {
                friendCalc += Math.abs(friends[i].scores[j] - newScores[j]);

                if (friendCalc < bestMatch.difference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.difference = friendCalc;
                }
            }
        }
        friends.push(newFriend);

        res.json(bestMatch);
    });
}