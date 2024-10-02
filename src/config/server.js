const express = require('express');
const app = express();

const consign = require('consign');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

require('dotenv').config();


app.set("views", "./app/views/");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("./app/public/"));
app.use(expressSession({
    secret: '0s0fsaiojfsafsaa',
    resave: false,
    savaUnitialized: false
}));

consign()
    .include("./app/routes")
    .then("./app/controllers")
    .then("./app/models")
    .into(app);

module.exports = app;