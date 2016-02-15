// This file allows us to seed our application with suggested stations data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var foodList =[];
foodList.push({
             item: 'Chicken Katsu',
             description: 'Hawaiian Treat',
             image: 'http://www.foodland.com/files/imagecache/530x600/chicken_katsu.sm_.img_3410.jpg'
           });
foodList.push({
             item: 'Poké',
             descrition: 'Yummy Fish',
             image: 'http://www.hawaiiancafe.com/images/AhiPoke-2-1.png'             
           });
foodList.push({
             item: 'Loco Moco',
             description: 'Yummy Goodness',
             image: 'http://images.huffingtonpost.com/2012-09-26-322780_10152122273705244_866115423_o.jpeg'             
           });

db.Food.remove({}, function(err, food){

  db.Food.create(foodList, function(err, food){
    if (err) { return console.log('ERROR', err); }
    // console.log("all suggestions:", suggest);
    // console.log("created", suggest.length, "suggest");
    process.exit();
  });
});
