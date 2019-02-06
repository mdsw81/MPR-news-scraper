var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();

var router = express.Router();

require("./routes/routes")(router); 


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
   
app.use(express.static("public"));

// Connecting Handelbars
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(router);

// Deployed database or local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connecting Mongoose to database
mongoose.connect(MONGODB_URI, function(error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("mongoose connection successful")
    }
});

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
