//Food Model

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SuggestSchema = new Schema({
  item: String,
  description: String
});

var Food = mongoose.model('Food', FoodSchema);

module.exports = Food;