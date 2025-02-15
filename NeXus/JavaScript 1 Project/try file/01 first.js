// ? Here we will just get to know that how randomly data is being created by us. The same data can also be created with chatgpt prompt.

// Create restaurant data

// !code to convert to json 
const fs = require('fs');
const restaurant = []; //! it'll store all restaurant data into object form

const images = ['first', 'second', 'third','forth','fifth', 'sixth', 'seventh', 'eight', 'ninth', 'tenth'];
const rest_name = ["The Gourmet Spot",
  "Urban Bites",
  "Blue Olive Kitchen",
  "Savory Tales",
  "Aroma's Delight",
  "Spice Symphony",
  "Golden Fork",
  "Fresh Thyme Table",
  "The Sizzling Plate",
  "Rustic Roots",
  "Velvet Spoon",
  "Sunset Dinehouse",
  "The Food Haven",
  "Basil & Barrel",
  "The Hungry Panda",
  "Olive & Oak",
  "The Cozy Nook",
  "The Flavor Hub",
  "Citrus Grove Bistro",
  "The Chefs' Retreat"];
const foodTypes = [
    "Italian",
    "Chinese",
    "Indian",
    "Mexican",
    "Japanese",
    "Mediterranean",
    "Thai",
    "American",
    "French",
    "Korean"
  ];
const patnaLocation = ["Boring Road",
  "Fraser Road",
  "Kankarbagh",
  "Rajendra Nagar",
  "Patliputra Colony",
  "Ashok Rajpath",
  "Bailey Road",
  "Dak Bungalow Chauraha",
  "Gandhi Maidan",
  "Kurji"];


for(let i = 0; i<100; i++) {

    const obj = {};
    obj['image'] = images[Math.floor(Math.random()*10)];
    obj['name'] = rest_name[Math.floor(Math.random()*20)];
    obj['rating'] = (Math.random()*5+1).toFixed(1);
    obj['food_type'] = foodTypes[Math.floor(Math.random()*10)];
    obj['price_for_low'] = Math.floor(Math.random()*2401+100);
    obj['location'] = patnaLocation[Math.floor(Math.random()*10)];
    obj['distance_from_customer_house'] = (Math.random()*10+1).toFixed(1);
    obj['offers'] = Math.floor(Math.random()*30+1);
    obj['alcholal'] = Math.random() > 0.7;
    obj['restaurant_open_time'] = Math.floor(Math.random()*24);
    obj['restaurant_close_time'] = (obj['restaurant_open_time']+12)%24;
    
    restaurant.push(obj);


}


// todo convert array into JSON ? 
// const JSON_of_array = JSON.stringify(restaurant);
// console.log(JSON_of_array);

const jsonData = JSON.stringify(restaurant, null, 4);
fs.writeFileSync('arrayData.json', jsonData, 'utf-8')