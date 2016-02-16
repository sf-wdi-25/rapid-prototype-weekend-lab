//Food Model

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  item: String,
  description: String,
  image: String
});

var Food = mongoose.model('Food', FoodSchema);

module.exports = Food;