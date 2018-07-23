var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var nodemailer = require("nodemailer");

// var path = require("path");
// var handlebars = require("handlebars");
// var exphbs = require("express-handlebars");
// var passport = require("./config/passport");
// var env = require('dotenv').load();


var PORT = process.env.PORT || 5000;
// var db = require("./models");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.use(require('serve-static')(__dirname + '/../../public'));
// app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session()); 

app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

app.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT)
});