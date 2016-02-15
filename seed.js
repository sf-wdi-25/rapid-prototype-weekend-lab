// This file allows us to seed our application with suggested stations data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var foodList =[];
foodList.push({
             item: 'Spam Musubi',
             description: 'Hawaiian Treat',
             image: ''
           });
foodList.push({
             item: 'Poké',
             descrition: 'Yummy Fish',
             image: ''             
           });
foodList.push({
             item: 'Loco Moco',
             description: 'Yummy Goodness',
             image: ''             
           });

db.Food.remove({}, function(err, food){

  db.Food.create(foodList, function(err, food){
    if (err) { return console.log('ERROR', err); }
    // console.log("all suggestions:", suggest);
    // console.log("created", suggest.length, "suggest");
    process.exit();
  });
});
