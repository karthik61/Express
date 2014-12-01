// simple Express server
//
// Henry Chu, Fall 2014

var express = require("express"),
    http = require("http"),
    app;

// create an express http server and listen on port 3000
app = express();
http.createServer(app).listen(3000);

// set up routes
app.get("/hello", function(request, response) {
	response.send("Hello CSCE 598-02!");
}); // done get hello

app.get("/goodbye", function(request, response) {
	response.send("Goodbye CSCE 598-02!");
}); // done get goodbye

app.get("/", function(request, response) {
	response.send("Root of  CSCE 598-02");
}); // done get root

