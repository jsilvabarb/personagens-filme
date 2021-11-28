/* eslint-disable linebreak-style */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();

require("./database");

app.use(cors());

app.use(bodyParser.urlencoded( { extended:true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(3001);