var friends = require('../data/friends.js')
    // console.log(friends);
module.exports = function(app) {
    console.log(friends);
    app.get('/friends', function(req, res) {
        console.log(friends)
        res.json(friends);
    });
    app.get("/api/tables", function(req, res) {
        res.json(friends);
    });
}