// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Configurate 
var app = express();
var PORT = process.env.PORT || 8000;

// Sets Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});