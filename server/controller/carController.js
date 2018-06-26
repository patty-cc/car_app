var carQuery = require('../db/carQuery.js');
var express = require('express');
var carRouter = express.Router();

carRouter.get('/cars', function(req, res) {
  carQuery(function(data) {
    res.json(data)
  })
})

module.exports = carRouter;
