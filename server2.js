// Express server with a static file directory
//
// Henry Chu, Fall 2014

var express = require("express"),
    http = require("http"),
    app;

// set up a static file directory for default routing
app = express();
app.use(express.static(__dirname + "/client"));

// create an express http server and listen on port 3000
http.createServer(app).listen(3000);

// set up routes
app.get("/hello", function(request, response) {
	response.send("Helloo CSCE 598-02!");
}); // done get hello

app.get("/goodbye", function(request, response) {
	response.send("Goodbyee CSCE 598-02!");
}); // done get goodbye
