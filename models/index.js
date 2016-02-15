index.js

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/potluck");
var Food = require('./food');

module.exports.Food = Food;