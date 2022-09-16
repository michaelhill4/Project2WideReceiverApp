const { Food } = require('../models');
// Mcdonalds,taco bell, subway,Chick-fil-A
const foodData = [
    {
        name: "Double Cheeseburger",
        restaurant:"McDonalds",
        calories:450,
    },
    {
        name: "Sausage McGriddle",
        restaurant:"McDonalds",
        calories:430,
    },
    {
        name:"Egg McMuffin",
        restaurant:"McDonalds",
        calories:310,
    },
    {
        name:"Large Fries",
        restaurant:"McDonalds",
        calories:480,
    },
    {
        name:"Big Mac",
        restaurant:"McDonalds",
        calories:550,
    },
    {
        name:"Quesarito",
        restaurant:"Taco Bell",
        calories:640,
    },
    {
        name:"Cheesy Gordita Crunch",
        restaurant:"Taco Bell",
        calories:500,
    },
    {
        name:"Beefy 5-Layer Burrito",
        restaurant:"Taco Bell",
        calories:490,
    },
    {
        name:"Nacho Cheese Doritos Locos Taco",
        restaurant:"Taco Bell",
        calories:490
    },
    {
        name:"Crunchy Taco",
        restaurant:"Taco Bell",
        calories:170
    },
    {
        name:"Chicken Sandwich",
        restaurant:"Chick-fil-A",
        calories:440,
    },
    {
        name:"8-piece Chicken Nuggets",
        restaurant:"Chick-Fil-A",
        calories:380,
    },
    {
        name:"Waffle Fries",
        restaurant:"Chick-Fil-A",
        calories:420,
    },
    {
        name:"Spicy Chicken Biscuit",
        restaurant:"Chick-Fil-A",
        calories:430,
    },
    {
        name:"Spicy Deluxe Sandwich",
        restaurant:"Chick-Fil-A",
        calories:550
    },
    {
        name:"6-inch Philly",
        restaurant:"Subway",
        calories:480
    },
    {
        name:'6-inch Meatball Sub',
        restaurant:"Subway",
        calories:410
    },
    {
        name:'6-inch Roast Beef',
        restaurant:"Subway",
        calories:300
    }, 
    {
        name:'6-inch Tuna',
        restaurant:"Subway",
        calories:430
    },
    {
        name:"6-inch Black Forest Ham",
        restaurant:"Subway",
        calories: 270
    },
]


const seedFood = () => Food.bulkCreate(foodData);

module.exports = seedFood;