const express = require("express");
const places = require("./models/places");

const routes = express.Router();

routes.get("/places", (req, res) => {
  res.send(places);
});

module.exports = routes;
