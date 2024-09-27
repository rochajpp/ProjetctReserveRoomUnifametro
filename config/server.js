const express = require('express');
const app = express();

const consign = require('consign');
const bodyParser = require('body-parser');

require('dotenv').config();


app.set("views", "./app/views/");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("./app/public/"));

consign()
    .include("./app/routes")
    .then("./app/controllers")
    .then("./app/models")
    .then("./config/dbConfig.js")
    .into(app);

module.exports = app;