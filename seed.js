// This file allows us to seed our application with suggested stations data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var foodList =[];
foodList.push({
             item: 'Chicken Katsu',
             description: 'Chicken katsu (chicken cutlet (Japanese: チキンカツ Hepburn: chikinkatsu?)) or tori katsu (torikatsu (鶏カツ?)) is a Japanese dish which is also popular in Hawaii.[1] It consists of a breaded, deep-fried chicken cutlet one to two centimeters thick that is sliced into bite-sized pieces or strips.',
             image: 'http://www.foodland.com/files/imagecache/530x600/chicken_katsu.sm_.img_3410.jpg'
           });
foodList.push({
             item: 'Poké',
             description: 'Poke /poʊˈkeɪ/ is a raw fish salad served as an appetizer in Hawaiian cuisine. Pokē is the Hawaiian verb for "section" or "to slice or cut". Traditional forms are aku (an oily tuna) and tako (octopus). Increasingly popular ahi poke is generally made with yellowfin tuna. Adaptations may feature raw salmon or various shellfish as a main ingredient served raw with the common "poke" seasonings.',
             image: 'http://www.hawaiiancafe.com/images/AhiPoke-2-1.png'             
           });
foodList.push({
             item: 'Loco Moco',
             description: 'Loco moco is a meal in the contemporary cuisine of Hawaii. There are many variations, but the traditional loco moco consists of white rice, topped with a hamburger patty, a fried egg, and brown gravy.',
             image: 'http://images.huffingtonpost.com/2012-09-26-322780_10152122273705244_866115423_o.jpeg'      });
foodList.push({
             item: 'Laulau',
             description: 'Laulau is a Native Hawaiian cuisine dish. The traditional preparation consisted of pork in wrapped taro leaf. In old Hawaii laulau was assembled by taking a few luau leaves and placing a few pieces of fish and pork in the center. In modern times, the dish uses taro leaves, salted butterfish, and either pork, beef, or chicken and is usually steamed on the stove. Laulau is a typical plate lunch dish and is usually served with a side of rice and macaroni salad.',
             image: 'http://farm6.static.flickr.com/5132/5455543110_66e1dc32b8_b.jpg'             
           });
foodList.push({
             item: 'Poi',
             description: 'Poi is a Hawaiian word for the primary Polynesian staple food made from the underground plant stem or corm of the taro plant (known in Hawaiian as kalo). It is a traditional part of Native Hawaiian cuisine.',
             image: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2003/10/20/1/emsp20_poi.jpg.rend.sni18col.jpeg'             
           });
foodList.push({
             item: 'Lomi Salmon',
             description: 'Lomi salmon (more commonly known as lomi-lomi salmon) is a side dish in Hawaiian cuisine. It is a fresh tomato and salmon salad, and was introduced to Hawaiians by early western sailors.[1] It is typically prepared by mixing raw salted, diced salmon with tomatoes, sweet gentle Maui onions (or sometimes green onion), and occasionally flakes of hot red chili pepper, or crushed ice. It is always served cold. Other variations include salmon, diced tomato, diced cucumber, and chopped sweet onion.',
             image: 'http://www.taniokas.com/POKElomisalmon.jpg'             
           });
foodList.push({
             item: 'Saimin',
             description: 'Saimin is a noodle soup dish developed in China and developed by different immigrant groups in Hawaii. Inspired by Japanese ramen, Chinese mein, and Filipino pancit, saimin was developed during Hawaii\'s plantation era. It is a soup dish of soft wheat egg noodles served in hot dashi garnished with green onions. Kamaboko, char siu, sliced Spam, linguiça, and nori may be added, among other additions.',
             image: 'http://flavorboulevard.com/wp-content/uploads/2010/09/wikiwiki-saimin.jpg'             
           });
foodList.push({
             item: 'Spam Musubi',
             description: 'Spam musubi is a popular snack and lunch food in Hawaii composed of a slice of grilled Spam on top of a block of rice, wrapped together with nori dried seaweed in the tradition of Japanese omusubi.',
             image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Homemade_Spam_Musubi.jpg'             
           });

db.Food.remove({}, function(err, food){

  db.Food.create(foodList, function(err, food){
    if (err) { return console.log('ERROR', err); }
    // console.log("all suggestions:", suggest);
    // console.log("created", suggest.length, "suggest");
    process.exit();
  });
});
