var newFriend = {
    name: "Amberlee",
    photo: "",
    scores: ["5", "2", "5", "2", "5", "4", "5", "1", "1", "5"]
};

var friends = {
    "name": "Al",
    "photo": "2",
    "scores": [5, 2, 5, 2, 5, 4, 5, 1, 1, 5]
};

var friendMatch = [];

function newArray() {
    for (var i = 0; i < newFriend.scores.length; i++) {
        var friendCalc = math.abs(newFriend).scores[i] - friends.scores[i];
        friendMatch.push(friendCalc);
    }
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
}

newArray();