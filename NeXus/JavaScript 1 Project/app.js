const restaurants = [
  {
    "image": "sixth",
    "name": "Blue Olive Kitchen",
    "rating": "3.2",
    "food_type": "Mexican",
    "price_for_low": 1276,
    "location": "Kurji",
    "distance_from_customer_house": "3.6",
    "offers": 17,
    "alcholal": false,
    "restaurant_open_time": 17,
    "restaurant_close_time": 5
  },
  {
    "image": "fifth",
    "name": "Blue Olive Kitchen",
    "rating": "1.3",
    "food_type": "Korean",
    "price_for_low": 1626,
    "location": "Kankarbagh",
    "distance_from_customer_house": "5.2",
    "offers": 2,
    "alcholal": false,
    "restaurant_open_time": 17,
    "restaurant_close_time": 5
  },
  {
    "image": "forth",
    "name": "The Hungry Panda",
    "rating": "1.7",
    "food_type": "American",
    "price_for_low": 396,
    "location": "Bailey Road",
    "distance_from_customer_house": "5.1",
    "offers": 16,
    "alcholal": false,
    "restaurant_open_time": 22,
    "restaurant_close_time": 10
  },
  {
    "image": "seventh",
    "name": "The Flavor Hub",
    "rating": "4.6",
    "food_type": "Mediterranean",
    "price_for_low": 1437,
    "location": "Ashok Rajpath",
    "distance_from_customer_house": "7.3",
    "offers": 9,
    "alcholal": true,
    "restaurant_open_time": 12,
    "restaurant_close_time": 0
  },
  {
    "image": "ninth",
    "name": "Urban Bites",
    "rating": "4.6",
    "food_type": "Italian",
    "price_for_low": 418,
    "location": "Rajendra Nagar",
    "distance_from_customer_house": "4.8",
    "offers": 25,
    "alcholal": false,
    "restaurant_open_time": 4,
    "restaurant_close_time": 16
  },
  {
    "image": "eight",
    "name": "The Gourmet Spot",
    "rating": "4.2",
    "food_type": "American",
    "price_for_low": 216,
    "location": "Boring Road",
    "distance_from_customer_house": "10.7",
    "offers": 26,
    "alcholal": false,
    "restaurant_open_time": 0,
    "restaurant_close_time": 12
  },
  {
    "image": "fifth",
    "name": "The Hungry Panda",
    "rating": "2.0",
    "food_type": "American",
    "price_for_low": 562,
    "location": "Kurji",
    "distance_from_customer_house": "6.2",
    "offers": 26,
    "alcholal": false,
    "restaurant_open_time": 14,
    "restaurant_close_time": 2
  },
  {
    "image": "ninth",
    "name": "The Cozy Nook",
    "rating": "1.1",
    "food_type": "American",
    "price_for_low": 319,
    "location": "Ashok Rajpath",
    "distance_from_customer_house": "5.7",
    "offers": 18,
    "alcholal": false,
    "restaurant_open_time": 6,
    "restaurant_close_time": 18
  },
  {
    "image": "eight",
    "name": "Urban Bites",
    "rating": "2.7",
    "food_type": "Japanese",
    "price_for_low": 697,
    "location": "Boring Road",
    "distance_from_customer_house": "6.1",
    "offers": 29,
    "alcholal": false,
    "restaurant_open_time": 16,
    "restaurant_close_time": 4
  },
  {
    "image": "ninth",
    "name": "Spice Symphony",
    "rating": "5.3",
    "food_type": "Korean",
    "price_for_low": 1118,
    "location": "Patliputra Colony",
    "distance_from_customer_house": "1.8",
    "offers": 30,
    "alcholal": false,
    "restaurant_open_time": 11,
    "restaurant_close_time": 23
  },
  {
    "image": "seventh",
    "name": "Spice Symphony",
    "rating": "5.9",
    "food_type": "Thai",
    "price_for_low": 676,
    "location": "Boring Road",
    "distance_from_customer_house": "4.3",
    "offers": 10,
    "alcholal": false,
    "restaurant_open_time": 18,
    "restaurant_close_time": 6
  },
  {
    "image": "second",
    "name": "Sunset Dinehouse",
    "rating": "3.1",
    "food_type": "Thai",
    "price_for_low": 843,
    "location": "Kurji",
    "distance_from_customer_house": "8.6",
    "offers": 22,
    "alcholal": true,
    "restaurant_open_time": 5,
    "restaurant_close_time": 17
  },
  {
    "image": "seventh",
    "name": "The Food Haven",
    "rating": "5.0",
    "food_type": "French",
    "price_for_low": 244,
    "location": "Ashok Rajpath",
    "distance_from_customer_house": "9.4",
    "offers": 13,
    "alcholal": true,
    "restaurant_open_time": 15,
    "restaurant_close_time": 3
  },
  {
    "image": "ninth",
    "name": "Rustic Roots",
    "rating": "2.9",
    "food_type": "Korean",
    "price_for_low": 1433,
    "location": "Fraser Road",
    "distance_from_customer_house": "6.5",
    "offers": 1,
    "alcholal": true,
    "restaurant_open_time": 7,
    "restaurant_close_time": 19
  },
  {
    "image": "fifth",
    "name": "Olive & Oak",
    "rating": "5.1",
    "food_type": "Indian",
    "price_for_low": 1341,
    "location": "Bailey Road",
    "distance_from_customer_house": "4.1",
    "offers": 27,
    "alcholal": true,
    "restaurant_open_time": 16,
    "restaurant_close_time": 4
  },
  {
    "image": "second",
    "name": "The Hungry Panda",
    "rating": "4.3",
    "food_type": "Indian",
    "price_for_low": 1329,
    "location": "Boring Road",
    "distance_from_customer_house": "3.4",
    "offers": 23,
    "alcholal": true,
    "restaurant_open_time": 2,
    "restaurant_close_time": 14
  },
  {
    "image": "second",
    "name": "Olive & Oak",
    "rating": "2.8",
    "food_type": "Mexican",
    "price_for_low": 1459,
    "location": "Boring Road",
    "distance_from_customer_house": "5.7",
    "offers": 15,
    "alcholal": false,
    "restaurant_open_time": 23,
    "restaurant_close_time": 11
  },
  {
    "image": "third",
    "name": "The Food Haven",
    "rating": "4.1",
    "food_type": "Indian",
    "price_for_low": 1481,
    "location": "Bailey Road",
    "distance_from_customer_house": "2.5",
    "offers": 19,
    "alcholal": true,
    "restaurant_open_time": 21,
    "restaurant_close_time": 9
  },
  {
    "image": "third",
    "name": "Velvet Spoon",
    "rating": "1.9",
    "food_type": "American",
    "price_for_low": 1052,
    "location": "Kurji",
    "distance_from_customer_house": "5.2",
    "offers": 15,
    "alcholal": false,
    "restaurant_open_time": 20,
    "restaurant_close_time": 8
  },
  {
    "image": "sixth",
    "name": "The Hungry Panda",
    "rating": "4.0",
    "food_type": "American",
    "price_for_low": 1626,
    "location": "Kankarbagh",
    "distance_from_customer_house": "1.8",
    "offers": 13,
    "alcholal": false,
    "restaurant_open_time": 15,
    "restaurant_close_time": 3
  },
  {
    "image": "forth",
    "name": "Sunset Dinehouse",
    "rating": "2.9",
    "food_type": "Japanese",
    "price_for_low": 1852,
    "location": "Dak Bungalow Chauraha",
    "distance_from_customer_house": "10.7",
    "offers": 22,
    "alcholal": false,
    "restaurant_open_time": 22,
    "restaurant_close_time": 10
  },
  {
    "image": "first",
    "name": "Velvet Spoon",
    "rating": "4.6",
    "food_type": "Korean",
    "price_for_low": 1601,
    "location": "Patliputra Colony",
    "distance_from_customer_house": "3.2",
    "offers": 11,
    "alcholal": false,
    "restaurant_open_time": 20,
    "restaurant_close_time": 8
  },
  {
    "image": "sixth",
    "name": "The Food Haven",
    "rating": "4.5",
    "food_type": "American",
    "price_for_low": 1032,
    "location": "Bailey Road",
    "distance_from_customer_house": "7.0",
    "offers": 10,
    "alcholal": false,
    "restaurant_open_time": 7,
    "restaurant_close_time": 19
  },
  {
    "image": "third",
    "name": "Velvet Spoon",
    "rating": "2.6",
    "food_type": "French",
    "price_for_low": 2211,
    "location": "Rajendra Nagar",
    "distance_from_customer_house": "6.6",
    "offers": 7,
    "alcholal": false,
    "restaurant_open_time": 12,
    "restaurant_close_time": 0
  },
  {
    "image": "third",
    "name": "Savory Tales",
    "rating": "3.2",
    "food_type": "Japanese",
    "price_for_low": 1712,
    "location": "Fraser Road",
    "distance_from_customer_house": "4.6",
    "offers": 6,
    "alcholal": false,
    "restaurant_open_time": 20,
    "restaurant_close_time": 8
  },
  {
    "image": "fifth",
    "name": "Aroma's Delight",
    "rating": "2.4",
    "food_type": "Thai",
    "price_for_low": 1108,
    "location": "Fraser Road",
    "distance_from_customer_house": "10.9",
    "offers": 26,
    "alcholal": false,
    "restaurant_open_time": 4,
    "restaurant_close_time": 16
  },
  {
    "image": "sixth",
    "name": "Rustic Roots",
    "rating": "5.0",
    "food_type": "Mexican",
    "price_for_low": 2041,
    "location": "Kankarbagh",
    "distance_from_customer_house": "7.4",
    "offers": 9,
    "alcholal": true,
    "restaurant_open_time": 4,
    "restaurant_close_time": 16
  },
  {
    "image": "ninth",
    "name": "Urban Bites",
    "rating": "3.8",
    "food_type": "Mediterranean",
    "price_for_low": 205,
    "location": "Gandhi Maidan",
    "distance_from_customer_house": "7.0",
    "offers": 9,
    "alcholal": false,
    "restaurant_open_time": 10,
    "restaurant_close_time": 22
  },
  {
    "image": "eight",
    "name": "The Hungry Panda",
    "rating": "5.9",
    "food_type": "Japanese",
    "price_for_low": 2376,
    "location": "Kurji",
    "distance_from_customer_house": "1.8",
    "offers": 6,
    "alcholal": false,
    "restaurant_open_time": 11,
    "restaurant_close_time": 23
  },
  {
    "image": "ninth",
    "name": "Golden Fork",
    "rating": "2.5",
    "food_type": "French",
    "price_for_low": 2222,
    "location": "Boring Road",
    "distance_from_customer_house": "7.0",
    "offers": 10,
    "alcholal": false,
    "restaurant_open_time": 6,
    "restaurant_close_time": 18
  },
  {
    "image": "tenth",
    "name": "Basil & Barrel",
    "rating": "3.2",
    "food_type": "Japanese",
    "price_for_low": 1643,
    "location": "Boring Road",
    "distance_from_customer_house": "3.8",
    "offers": 27,
    "alcholal": true,
    "restaurant_open_time": 22,
    "restaurant_close_time": 10
  },
  {
    "image": "forth",
    "name": "The Flavor Hub",
    "rating": "3.9",
    "food_type": "Thai",
    "price_for_low": 229,
    "location": "Kurji",
    "distance_from_customer_house": "3.0",
    "offers": 3,
    "alcholal": false,
    "restaurant_open_time": 13,
    "restaurant_close_time": 1
  },
  {
    "image": "sixth",
    "name": "Savory Tales",
    "rating": "4.1",
    "food_type": "Korean",
    "price_for_low": 212,
    "location": "Kankarbagh",
    "distance_from_customer_house": "5.1",
    "offers": 16,
    "alcholal": true,
    "restaurant_open_time": 0,
    "restaurant_close_time": 12
  },
  {
    "image": "third",
    "name": "The Food Haven",
    "rating": "5.6",
    "food_type": "Chinese",
    "price_for_low": 1420,
    "location": "Dak Bungalow Chauraha",
    "distance_from_customer_house": "5.7",
    "offers": 10,
    "alcholal": false,
    "restaurant_open_time": 11,
    "restaurant_close_time": 23
  },
  {
    "image": "fifth",
    "name": "Fresh Thyme Table",
    "rating": "2.8",
    "food_type": "Korean",
    "price_for_low": 2213,
    "location": "Gandhi Maidan",
    "distance_from_customer_house": "6.1",
    "offers": 8,
    "alcholal": false,
    "restaurant_open_time": 7,
    "restaurant_close_time": 19
  },
  {
    "image": "eight",
    "name": "Blue Olive Kitchen",
    "rating": "1.1",
    "food_type": "Mediterranean",
    "price_for_low": 449,
    "location": "Gandhi Maidan",
    "distance_from_customer_house": "6.8",
    "offers": 23,
    "alcholal": false,
    "restaurant_open_time": 23,
    "restaurant_close_time": 11
  },
  {
    "image": "tenth",
    "name": "The Food Haven",
    "rating": "4.5",
    "food_type": "Korean",
    "price_for_low": 2101,
    "location": "Dak Bungalow Chauraha",
    "distance_from_customer_house": "7.8",
    "offers": 16,
    "alcholal": false,
    "restaurant_open_time": 13,
    "restaurant_close_time": 1
  },
  {
    "image": "first",
    "name": "Fresh Thyme Table",
    "rating": "1.9",
    "food_type": "Thai",
    "price_for_low": 2125,
    "location": "Kankarbagh",
    "distance_from_customer_house": "4.9",
    "offers": 7,
    "alcholal": true,
    "restaurant_open_time": 16,
    "restaurant_close_time": 4
  },
  {
    "image": "third",
    "name": "The Sizzling Plate",
    "rating": "3.4",
    "food_type": "Mediterranean",
    "price_for_low": 558,
    "location": "Kankarbagh",
    "distance_from_customer_house": "1.3",
    "offers": 19,
    "alcholal": false,
    "restaurant_open_time": 21,
    "restaurant_close_time": 9
  },
  {
    "image": "seventh",
    "name": "The Cozy Nook",
    "rating": "3.1",
    "food_type": "Japanese",
    "price_for_low": 2383,
    "location": "Dak Bungalow Chauraha",
    "distance_from_customer_house": "3.5",
    "offers": 27,
    "alcholal": false,
    "restaurant_open_time": 2,
    "restaurant_close_time": 14
  },
  {
    "image": "fifth",
    "name": "Citrus Grove Bistro",
    "rating": "2.7",
    "food_type": "American",
    "price_for_low": 1556,
    "location": "Patliputra Colony",
    "distance_from_customer_house": "7.3",
    "offers": 6,
    "alcholal": true,
    "restaurant_open_time": 19,
    "restaurant_close_time": 7
  },
  {
    "image": "sixth",
    "name": "Sunset Dinehouse",
    "rating": "4.1",
    "food_type": "Mexican",
    "price_for_low": 1139,
    "location": "Dak Bungalow Chauraha",
    "distance_from_customer_house": "6.3",
    "offers": 24,
    "alcholal": false,
    "restaurant_open_time": 16,
    "restaurant_close_time": 4
  },
  {
    "image": "tenth",
    "name": "Urban Bites",
    "rating": "5.5",
    "food_type": "Korean",
    "price_for_low": 546,
    "location": "Kurji",
    "distance_from_customer_house": "2.6",
    "offers": 11,
    "alcholal": false,
    "restaurant_open_time": 20,
    "restaurant_close_time": 8
  },
  {
    "image": "forth",
    "name": "The Cozy Nook",
    "rating": "3.0",
    "food_type": "Mexican",
    "price_for_low": 939,
    "location": "Fraser Road",
    "distance_from_customer_house": "9.1",
    "offers": 21,
    "alcholal": false,
    "restaurant_open_time": 9,
    "restaurant_close_time": 21
  },
  {
    "image": "sixth",
    "name": "The Food Haven",
    "rating": "5.0",
    "food_type": "Indian",
    "price_for_low": 446,
    "location": "Bailey Road",
    "distance_from_customer_house": "2.9",
    "offers": 28,
    "alcholal": false,
    "restaurant_open_time": 13,
    "restaurant_close_time": 1
  },
  {
    "image": "eight",
    "name": "Spice Symphony",
    "rating": "1.7",
    "food_type": "Indian",
    "price_for_low": 2179,
    "location": "Kurji",
    "distance_from_customer_house": "10.2",
    "offers": 22,
    "alcholal": false,
    "restaurant_open_time": 7,
    "restaurant_close_time": 19
  },
  {
    "image": "eight",
    "name": "Golden Fork",
    "rating": "2.0",
    "food_type": "Indian",
    "price_for_low": 196,
    "location": "Boring Road",
    "distance_from_customer_house": "9.3",
    "offers": 24,
    "alcholal": false,
    "restaurant_open_time": 18,
    "restaurant_close_time": 6
  },
  {
    "image": "forth",
    "name": "Rustic Roots",
    "rating": "5.6",
    "food_type": "Italian",
    "price_for_low": 2446,
    "location": "Boring Road",
    "distance_from_customer_house": "1.0",
    "offers": 19,
    "alcholal": false,
    "restaurant_open_time": 22,
    "restaurant_close_time": 10
  },
  {
    "image": "second",
    "name": "Golden Fork",
    "rating": "5.1",
    "food_type": "American",
    "price_for_low": 1618,
    "location": "Ashok Rajpath",
    "distance_from_customer_house": "3.2",
    "offers": 24,
    "alcholal": false,
    "restaurant_open_time": 9,
    "restaurant_close_time": 21
  },
  {
    "image": "sixth",
    "name": "Rustic Roots",
    "rating": "3.6",
    "food_type": "Mexican",
    "price_for_low": 1989,
    "location": "Boring Road",
    "distance_from_customer_house": "8.0",
    "offers": 17,
    "alcholal": false,
    "restaurant_open_time": 8,
    "restaurant_close_time": 20
  },
  {
    "image": "tenth",
    "name": "The Gourmet Spot",
    "rating": "2.3",
    "food_type": "Thai",
    "price_for_low": 2000,
    "location": "Kankarbagh",
    "distance_from_customer_house": "2.1",
    "offers": 9,
    "alcholal": false,
    "restaurant_open_time": 5,
    "restaurant_close_time": 17
  },
  {
    "image": "seventh",
    "name": "Aroma's Delight",
    "rating": "3.5",
    "food_type": "Thai",
    "price_for_low": 283,
    "location": "Patliputra Colony",
    "distance_from_customer_house": "2.4",
    "offers": 23,
    "alcholal": false,
    "restaurant_open_time": 7,
    "restaurant_close_time": 19
  },
  {
    "image": "eight",
    "name": "Aroma's Delight",
    "rating": "4.8",
    "food_type": "Japanese",
    "price_for_low": 696,
    "location": "Kurji",
    "distance_from_customer_house": "4.9",
    "offers": 3,
    "alcholal": false,
    "restaurant_open_time": 13,
    "restaurant_close_time": 1
  },
  {
    "image": "sixth",
    "name": "Fresh Thyme Table",
    "rating": "1.1",
    "food_type": "Japanese",
    "price_for_low": 244,
    "location": "Ashok Rajpath",
    "distance_from_customer_house": "10.2",
    "offers": 25,
    "alcholal": false,
    "restaurant_open_time": 19,
    "restaurant_close_time": 7
  },
  {
    "image": "forth",
    "name": "Basil & Barrel",
    "rating": "2.1",
    "food_type": "Japanese",
    "price_for_low": 2325,
    "location": "Gandhi Maidan",
    "distance_from_customer_house": "1.9",
    "offers": 9,
    "alcholal": false,
    "restaurant_open_time": 10,
    "restaurant_close_time": 22
  },
  {
    "image": "first",
    "name": "Blue Olive Kitchen",
    "rating": "5.3",
    "food_type": "Mediterranean",
    "price_for_low": 1771,
    "location": "Fraser Road",
    "distance_from_customer_house": "5.1",
    "offers": 24,
    "alcholal": true,
    "restaurant_open_time": 10,
    "restaurant_close_time": 22
  },
  {
    "image": "second",
    "name": "Sunset Dinehouse",
    "rating": "4.9",
    "food_type": "Italian",
    "price_for_low": 387,
    "location": "Fraser Road",
    "distance_from_customer_house": "6.7",
    "offers": 9,
    "alcholal": true,
    "restaurant_open_time": 9,
    "restaurant_close_time": 21
  },
  {
    "image": "forth",
    "name": "The Chefs' Retreat",
    "rating": "3.6",
    "food_type": "Indian",
    "price_for_low": 760,
    "location": "Dak Bungalow Chauraha",
    "distance_from_customer_house": "8.7",
    "offers": 14,
    "alcholal": false,
    "restaurant_open_time": 3,
    "restaurant_close_time": 15
  },
  {
    "image": "sixth",
    "name": "Velvet Spoon",
    "rating": "2.4",
    "food_type": "Thai",
    "price_for_low": 153,
    "location": "Kurji",
    "distance_from_customer_house": "8.1",
    "offers": 8,
    "alcholal": false,
    "restaurant_open_time": 23,
    "restaurant_close_time": 11
  },
  {
    "image": "first",
    "name": "Urban Bites",
    "rating": "4.4",
    "food_type": "Thai",
    "price_for_low": 780,
    "location": "Boring Road",
    "distance_from_customer_house": "10.2",
    "offers": 28,
    "alcholal": true,
    "restaurant_open_time": 14,
    "restaurant_close_time": 2
  },
  {
    "image": "third",
    "name": "Urban Bites",
    "rating": "5.3",
    "food_type": "Indian",
    "price_for_low": 854,
    "location": "Rajendra Nagar",
    "distance_from_customer_house": "10.4",
    "offers": 28,
    "alcholal": false,
    "restaurant_open_time": 1,
    "restaurant_close_time": 13
  },
  {
    "image": "tenth",
    "name": "Golden Fork",
    "rating": "2.2",
    "food_type": "Mediterranean",
    "price_for_low": 566,
    "location": "Gandhi Maidan",
    "distance_from_customer_house": "7.9",
    "offers": 4,
    "alcholal": true,
    "restaurant_open_time": 6,
    "restaurant_close_time": 18
  },
  {
    "image": "forth",
    "name": "Fresh Thyme Table",
    "rating": "4.4",
    "food_type": "Mexican",
    "price_for_low": 582,
    "location": "Gandhi Maidan",
    "distance_from_customer_house": "1.6",
    "offers": 22,
    "alcholal": false,
    "restaurant_open_time": 3,
    "restaurant_close_time": 15
  },
  {
    "image": "fifth",
    "name": "Velvet Spoon",
    "rating": "5.6",
    "food_type": "French",
    "price_for_low": 718,
    "location": "Kankarbagh",
    "distance_from_customer_house": "1.2",
    "offers": 16,
    "alcholal": false,
    "restaurant_open_time": 13,
    "restaurant_close_time": 1
  },
  {
    "image": "fifth",
    "name": "Fresh Thyme Table",
    "rating": "2.8",
    "food_type": "American",
    "price_for_low": 1080,
    "location": "Dak Bungalow Chauraha",
    "distance_from_customer_house": "7.3",
    "offers": 11,
    "alcholal": false,
    "restaurant_open_time": 21,
    "restaurant_close_time": 9
  },
  {
    "image": "first",
    "name": "Rustic Roots",
    "rating": "4.2",
    "food_type": "Thai",
    "price_for_low": 1604,
    "location": "Patliputra Colony",
    "distance_from_customer_house": "3.8",
    "offers": 17,
    "alcholal": true,
    "restaurant_open_time": 0,
    "restaurant_close_time": 12
  },
  {
    "image": "tenth",
    "name": "Aroma's Delight",
    "rating": "1.1",
    "food_type": "Mediterranean",
    "price_for_low": 1012,
    "location": "Fraser Road",
    "distance_from_customer_house": "7.7",
    "offers": 25,
    "alcholal": false,
    "restaurant_open_time": 2,
    "restaurant_close_time": 14
  },
  {
    "image": "tenth",
    "name": "Spice Symphony",
    "rating": "5.7",
    "food_type": "Chinese",
    "price_for_low": 2448,
    "location": "Rajendra Nagar",
    "distance_from_customer_house": "3.9",
    "offers": 27,
    "alcholal": false,
    "restaurant_open_time": 8,
    "restaurant_close_time": 20
  },
  {
    "image": "sixth",
    "name": "The Chefs' Retreat",
    "rating": "2.7",
    "food_type": "French",
    "price_for_low": 1833,
    "location": "Dak Bungalow Chauraha",
    "distance_from_customer_house": "6.2",
    "offers": 30,
    "alcholal": true,
    "restaurant_open_time": 15,
    "restaurant_close_time": 3
  },
  {
    "image": "forth",
    "name": "Spice Symphony",
    "rating": "5.5",
    "food_type": "Japanese",
    "price_for_low": 2387,
    "location": "Patliputra Colony",
    "distance_from_customer_house": "3.4",
    "offers": 14,
    "alcholal": false,
    "restaurant_open_time": 10,
    "restaurant_close_time": 22
  },
  {
    "image": "forth",
    "name": "Fresh Thyme Table",
    "rating": "3.4",
    "food_type": "Italian",
    "price_for_low": 2079,
    "location": "Bailey Road",
    "distance_from_customer_house": "3.9",
    "offers": 24,
    "alcholal": false,
    "restaurant_open_time": 14,
    "restaurant_close_time": 2
  },
  {
    "image": "tenth",
    "name": "The Hungry Panda",
    "rating": "1.8",
    "food_type": "Indian",
    "price_for_low": 1986,
    "location": "Patliputra Colony",
    "distance_from_customer_house": "6.5",
    "offers": 3,
    "alcholal": false,
    "restaurant_open_time": 14,
    "restaurant_close_time": 2
  },
  {
    "image": "sixth",
    "name": "Velvet Spoon",
    "rating": "3.3",
    "food_type": "Japanese",
    "price_for_low": 280,
    "location": "Gandhi Maidan",
    "distance_from_customer_house": "3.4",
    "offers": 20,
    "alcholal": false,
    "restaurant_open_time": 19,
    "restaurant_close_time": 7
  },
  {
    "image": "third",
    "name": "The Cozy Nook",
    "rating": "3.4",
    "food_type": "Mexican",
    "price_for_low": 317,
    "location": "Bailey Road",
    "distance_from_customer_house": "8.5",
    "offers": 26,
    "alcholal": true,
    "restaurant_open_time": 7,
    "restaurant_close_time": 19
  },
  {
    "image": "tenth",
    "name": "Fresh Thyme Table",
    "rating": "4.9",
    "food_type": "Japanese",
    "price_for_low": 2456,
    "location": "Rajendra Nagar",
    "distance_from_customer_house": "3.2",
    "offers": 13,
    "alcholal": false,
    "restaurant_open_time": 7,
    "restaurant_close_time": 19
  },
  {
    "image": "ninth",
    "name": "Urban Bites",
    "rating": "1.0",
    "food_type": "Korean",
    "price_for_low": 388,
    "location": "Kurji",
    "distance_from_customer_house": "8.3",
    "offers": 23,
    "alcholal": false,
    "restaurant_open_time": 6,
    "restaurant_close_time": 18
  },
  {
    "image": "eight",
    "name": "The Chefs' Retreat",
    "rating": "4.8",
    "food_type": "Korean",
    "price_for_low": 1290,
    "location": "Boring Road",
    "distance_from_customer_house": "1.3",
    "offers": 27,
    "alcholal": true,
    "restaurant_open_time": 18,
    "restaurant_close_time": 6
  },
  {
    "image": "fifth",
    "name": "Savory Tales",
    "rating": "3.1",
    "food_type": "Indian",
    "price_for_low": 2183,
    "location": "Ashok Rajpath",
    "distance_from_customer_house": "5.5",
    "offers": 26,
    "alcholal": false,
    "restaurant_open_time": 21,
    "restaurant_close_time": 9
  },
  {
    "image": "third",
    "name": "The Food Haven",
    "rating": "2.9",
    "food_type": "Mexican",
    "price_for_low": 1817,
    "location": "Kurji",
    "distance_from_customer_house": "3.7",
    "offers": 16,
    "alcholal": true,
    "restaurant_open_time": 23,
    "restaurant_close_time": 11
  },
  {
    "image": "tenth",
    "name": "Basil & Barrel",
    "rating": "4.5",
    "food_type": "Korean",
    "price_for_low": 1528,
    "location": "Ashok Rajpath",
    "distance_from_customer_house": "7.8",
    "offers": 26,
    "alcholal": false,
    "restaurant_open_time": 21,
    "restaurant_close_time": 9
  },
  {
    "image": "eight",
    "name": "The Hungry Panda",
    "rating": "2.8",
    "food_type": "Mexican",
    "price_for_low": 2146,
    "location": "Fraser Road",
    "distance_from_customer_house": "8.3",
    "offers": 14,
    "alcholal": false,
    "restaurant_open_time": 2,
    "restaurant_close_time": 14
  },
  {
    "image": "eight",
    "name": "Spice Symphony",
    "rating": "1.6",
    "food_type": "Korean",
    "price_for_low": 1344,
    "location": "Kankarbagh",
    "distance_from_customer_house": "7.4",
    "offers": 1,
    "alcholal": false,
    "restaurant_open_time": 23,
    "restaurant_close_time": 11
  },
  {
    "image": "sixth",
    "name": "The Gourmet Spot",
    "rating": "4.8",
    "food_type": "Italian",
    "price_for_low": 617,
    "location": "Kurji",
    "distance_from_customer_house": "3.2",
    "offers": 22,
    "alcholal": false,
    "restaurant_open_time": 18,
    "restaurant_close_time": 6
  },
  {
    "image": "second",
    "name": "Olive & Oak",
    "rating": "3.1",
    "food_type": "Italian",
    "price_for_low": 1350,
    "location": "Ashok Rajpath",
    "distance_from_customer_house": "1.3",
    "offers": 12,
    "alcholal": false,
    "restaurant_open_time": 1,
    "restaurant_close_time": 13
  },
  {
    "image": "second",
    "name": "Fresh Thyme Table",
    "rating": "2.9",
    "food_type": "Mediterranean",
    "price_for_low": 284,
    "location": "Fraser Road",
    "distance_from_customer_house": "2.5",
    "offers": 3,
    "alcholal": false,
    "restaurant_open_time": 11,
    "restaurant_close_time": 23
  },
  {
    "image": "tenth",
    "name": "Fresh Thyme Table",
    "rating": "2.1",
    "food_type": "Chinese",
    "price_for_low": 238,
    "location": "Ashok Rajpath",
    "distance_from_customer_house": "10.3",
    "offers": 29,
    "alcholal": false,
    "restaurant_open_time": 3,
    "restaurant_close_time": 15
  },
  {
    "image": "eight",
    "name": "Aroma's Delight",
    "rating": "5.9",
    "food_type": "American",
    "price_for_low": 958,
    "location": "Fraser Road",
    "distance_from_customer_house": "5.4",
    "offers": 22,
    "alcholal": false,
    "restaurant_open_time": 5,
    "restaurant_close_time": 17
  },
  {
    "image": "sixth",
    "name": "The Sizzling Plate",
    "rating": "4.8",
    "food_type": "American",
    "price_for_low": 165,
    "location": "Ashok Rajpath",
    "distance_from_customer_house": "8.5",
    "offers": 1,
    "alcholal": false,
    "restaurant_open_time": 4,
    "restaurant_close_time": 16
  },
  {
    "image": "sixth",
    "name": "Savory Tales",
    "rating": "3.1",
    "food_type": "Mediterranean",
    "price_for_low": 2351,
    "location": "Kankarbagh",
    "distance_from_customer_house": "8.1",
    "offers": 11,
    "alcholal": false,
    "restaurant_open_time": 2,
    "restaurant_close_time": 14
  },
  {
    "image": "ninth",
    "name": "Basil & Barrel",
    "rating": "5.0",
    "food_type": "French",
    "price_for_low": 2159,
    "location": "Dak Bungalow Chauraha",
    "distance_from_customer_house": "2.2",
    "offers": 27,
    "alcholal": true,
    "restaurant_open_time": 19,
    "restaurant_close_time": 7
  },
  {
    "image": "seventh",
    "name": "Aroma's Delight",
    "rating": "1.0",
    "food_type": "Mexican",
    "price_for_low": 912,
    "location": "Bailey Road",
    "distance_from_customer_house": "1.5",
    "offers": 26,
    "alcholal": false,
    "restaurant_open_time": 5,
    "restaurant_close_time": 17
  },
  {
    "image": "sixth",
    "name": "Rustic Roots",
    "rating": "4.1",
    "food_type": "Thai",
    "price_for_low": 1573,
    "location": "Boring Road",
    "distance_from_customer_house": "3.9",
    "offers": 28,
    "alcholal": true,
    "restaurant_open_time": 5,
    "restaurant_close_time": 17
  },
  {
    "image": "third",
    "name": "The Flavor Hub",
    "rating": "2.3",
    "food_type": "Chinese",
    "price_for_low": 467,
    "location": "Fraser Road",
    "distance_from_customer_house": "6.2",
    "offers": 22,
    "alcholal": true,
    "restaurant_open_time": 10,
    "restaurant_close_time": 22
  },
  {
    "image": "ninth",
    "name": "The Cozy Nook",
    "rating": "2.7",
    "food_type": "Chinese",
    "price_for_low": 1251,
    "location": "Gandhi Maidan",
    "distance_from_customer_house": "7.4",
    "offers": 14,
    "alcholal": true,
    "restaurant_open_time": 22,
    "restaurant_close_time": 10
  },
  {
    "image": "sixth",
    "name": "Velvet Spoon",
    "rating": "5.7",
    "food_type": "Japanese",
    "price_for_low": 1629,
    "location": "Fraser Road",
    "distance_from_customer_house": "9.5",
    "offers": 13,
    "alcholal": false,
    "restaurant_open_time": 4,
    "restaurant_close_time": 16
  },
  {
    "image": "ninth",
    "name": "The Gourmet Spot",
    "rating": "5.4",
    "food_type": "Thai",
    "price_for_low": 502,
    "location": "Dak Bungalow Chauraha",
    "distance_from_customer_house": "7.2",
    "offers": 21,
    "alcholal": false,
    "restaurant_open_time": 20,
    "restaurant_close_time": 8
  },
  {
    "image": "first",
    "name": "Rustic Roots",
    "rating": "4.6",
    "food_type": "Indian",
    "price_for_low": 2496,
    "location": "Patliputra Colony",
    "distance_from_customer_house": "9.3",
    "offers": 22,
    "alcholal": false,
    "restaurant_open_time": 5,
    "restaurant_close_time": 17
  },
  {
    "image": "tenth",
    "name": "The Sizzling Plate",
    "rating": "3.4",
    "food_type": "Indian",
    "price_for_low": 1641,
    "location": "Gandhi Maidan",
    "distance_from_customer_house": "1.1",
    "offers": 4,
    "alcholal": false,
    "restaurant_open_time": 17,
    "restaurant_close_time": 5
  },
  {
    "image": "tenth",
    "name": "Savory Tales",
    "rating": "4.3",
    "food_type": "American",
    "price_for_low": 2149,
    "location": "Fraser Road",
    "distance_from_customer_house": "8.8",
    "offers": 12,
    "alcholal": false,
    "restaurant_open_time": 9,
    "restaurant_close_time": 21
  },
  {
    "image": "eight",
    "name": "Citrus Grove Bistro",
    "rating": "2.9",
    "food_type": "Chinese",
    "price_for_low": 1877,
    "location": "Kurji",
    "distance_from_customer_house": "2.6",
    "offers": 12,
    "alcholal": false,
    "restaurant_open_time": 6,
    "restaurant_close_time": 18
  }
]


function getRestaurants(restaurants) {
    restaurants.forEach ((restaurant) => {

        // console.log(restaurant);
        const rootElem = document.getElementById('root');
        
        //! Create a card
        const divElem = document.createElement('div');
        divElem.setAttribute('id', 'card');
        divElem.setAttribute('class', 'flex');
        rootElem.appendChild(divElem);


        // 1: image
        const image = document.createElement('img');
        image.setAttribute('id', 'card-image');
        // image.setAttribute('src', restaurant['image']);
        image.src = `images/${restaurant["image"]}.avif`;


        divElem.appendChild(image);    
      

        // 2: card-content
        const cardContent = document.createElement('div');
        cardContent.setAttribute('class', 'card-content');

            //todo  i: name-rating (restaurant name & rating)
        const restaurantNameRating = document.createElement('div');
        restaurantNameRating.setAttribute('class', 'name-rating flex');
        const restName = document.createElement('p');
        restName.setAttribute('id', 'rest-name')
        const ratingDiv = document.createElement('div');
        ratingDiv.setAttribute('class','rating flex');
        const rateByNum = document.createElement('p');
        rateByNum.setAttribute('class', 'rateByNum');
        const ratingIcon = document.createElement('class', 'rating-icon');

        // add content into all element
        restName.innerHTML = restaurant['name'];
        rateByNum.innerHTML = restaurant["rating"];
        ratingIcon.innerHTML = '*'
        
        // append all element of restaurant name and rating
        ratingDiv.appendChild(rateByNum);
        ratingDiv.appendChild(ratingIcon);
        restaurantNameRating.appendChild(restName);
        restaurantNameRating.appendChild(ratingDiv);
        cardContent.appendChild(restaurantNameRating);
        divElem.appendChild(cardContent);

            //todo ii: foodType-rate (food type name & rate of food)
        const foodTypeAndRate = document.createElement('div');
        foodTypeAndRate.setAttribute('class', 'foodType-rate flex');
        const foodName = document.createElement('p');
        foodName.setAttribute('id', 'foodName');
        const foodRate = document.createElement('p');
        foodRate.setAttribute('id', 'rate');

        //add content into all element
        foodName.innerHTML = restaurant["food_type"];
        foodRate.innerHTML = `₹${restaurant["price_for_low"]}`;

        // append all element of foodType and it's rate

        foodTypeAndRate.appendChild(foodName);
        foodTypeAndRate.appendChild(foodRate);
        cardContent.appendChild(foodTypeAndRate);



            //todo iii: location-distance (location name & distance)
        const locationAndDistance = document.createElement('div');
        locationAndDistance.setAttribute('class', 'location-distance flex');
        const locationName = document.createElement('p');
        locationName.setAttribute('id', 'locationName')
        const distance = document.createElement('p');
        distance.setAttribute('id', 'distance');

        // Add content into all element
        locationName.innerHTML = restaurant["location"]
        distance.innerHTML = `${restaurant["distance_from_customer_house"]}km`;

        //append all element of location and distance
        locationAndDistance.appendChild(locationName);
        locationAndDistance.appendChild(distance)
        cardContent.appendChild(locationAndDistance);

    })
}


getRestaurants(restaurants);



// Add event on alcohol of navbar
document.getElementById('alcohol').addEventListener ('click', (event) => {
    const result = restaurants.filter((obj) => {
      return obj['alcholal']
    })

    // document.getElementById('root').innerHTML = "";
    document.getElementById('root').replaceChildren();
    getRestaurants(result);
})

// add event on rating of navbar
document.getElementById('rating').addEventListener ('click', (event) => {
  const result = restaurants.filter((obj) => {
    return obj['rating'] > 4.5;
  })

  // document.getElementById('root').innerHTML = "";
  document.getElementById('root').replaceChildren();
  getRestaurants(result);

})


// filter event 
document.getElementById('filters').addEventListener('click', () => {

  document.getElementById('filterPopup').style.display = "block";

})

document.getElementById('applyFilter').addEventListener ('click', () => {
  const element = document.querySelector(`input[name="filter"]:checked`);
  const answer = element.value;

  if(answer === "ratingBtn") {
    restaurants.sort((a,b) => b.rating - a.rating);
  }
  else if (answer === "highToLow") {
    restaurants.sort((a,b) => b.price_for_low - a.price_for_low);
  }
  else if (answer === "lowToHigh") {
    restaurants.sort((a,b) => a.price_for_low - b.price_for_low);
  }
  else if (answer === "distance") {
    restaurants.sort((a,b) => a.distance_from_customer_house - b.distance_from_customer_house);
  }

  document.getElementById('filterPopup').style.display = "none";
  document.getElementById('root').replaceChildren();
  getRestaurants(restaurants);

})


// apply event on close button
document.getElementById('closePopup').addEventListener ('click', () => {
  document.getElementById('filterPopup').style.display = "none";
})