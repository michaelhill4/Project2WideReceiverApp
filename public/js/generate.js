// const { Food } = require("../../models");

const { response } = require("express");

// const generateFormHandler = async (event ) => {
//     event.preventDefault();
const generateFormHandler = async(event)=>{
    event.preventDefault();
    const foodPreference = document.querySelect('#userPreference').value.trim();
    if(foodPreference){
        const response = await fetch('/api/users',{
            method:"POST",
            body:JSON.stringify({foodPreference}),
            headers:{'Content-Type':'application/json'},
        });
    }

    if(response.ok){
        document.location.replace('/');
    } else {
        console.log('unlucky');
    }
};

//     const foodPreference = document.querySelector('#userPreference').value.trim();
//     const maxCalories = 0;
//     const foodArray=[];

//     if (foodPreference ==="Small"){
//         maxCalories =850;
//     }
//     else if (foodPreference="medium  "){
//         maxCalories =1250;
//     }
//     else {
//         maxCalories = 1500;
//     }

//     const randRestaurant = Math.floor(Math.random()*4)
//     const pickedRestaurant = "";
   
//     if(randRestaurant ===0){
//         pickedRestaurant="McDonalds";
//     }
//     else if (randRestaurant ===1){
//         pickedRestaurant ="Taco Bell";
//     }
//     else if (randRestaurant===2){
//         pickedRestaurant="Chick-Fil-A";
//     }
//     else {
//         pickedRestaurant = "Subway";
//     }
//     const foodItems = await Food.findAll({
//         where:{
//             restaurant:pickedRestaurant
//         }
//     });


//     // if(calorieCounter<maxCalories){
//     //     let i = math.floor(Math.random()*foodItems.length);
//     //     foodArray.push(foodItems[i].name);
//     //     calorieCounter =calorieCounter +foodItems[i].calories;
//     // }
//     // else{
//     //     foodArray.pop();
//     // }

//     for(let calorieCounter = 0;calorieCounter<maxCalories; calorieCounter =calorieCounter +foodItems[i].calories){
//         let i = math.floor(Math.random()*foodItems.length);
//         foodArray.push(foodItems[i].name);
//     }
//     foodArray.pop();
// if(foodPreference){

// const response = await fetch('/api/users/food',{
//     method:'POST',
//     body:JSON.stringify({foodArray}),
//     headers: {'Content-Type':'application/json'},
// });
// if(response.ok){
//     document.location.replace('/food');

// }
// else {
//     alert('Failed to create');
// }
// }
// }

document.querySelector('.generator-form')
.addEventListener('submit',generateFormHandler)