const express = require("express");
const exphbs = require("express-handlebars");


// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3005;
// Create an instance of the express app.

const app = express();
// Set Handlebars as the default templating engine.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");