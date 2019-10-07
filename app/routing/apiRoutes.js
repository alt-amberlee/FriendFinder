var friends = require('../data/friends.js')
    // console.log(friends);
module.exports = function(app) {
    console.log(friends);
    app.get('/api/friends', function(req, res) {
        console.log(friends)
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        console.log(req.body)
        res.json(req.body);
    });
}