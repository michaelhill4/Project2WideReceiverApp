// const { Food } = require("../../models");

// const { response } = require("express");

// const generateFormHandler = async (event ) => {
//     event.preventDefault();
const generateFormHandler = async(event)=>{
    event.preventDefault();
    const foodPreference = document.querySelect('#userPreference').value.trim();
    if(foodPreference){
        const response = await fetch('/api/users/create',{
            method:"POST",
            body:JSON.stringify({foodPreference}),
            headers:{'Content-Type':'application/json'},
        });
    }

};


document.querySelector('.generator-form')
.addEventListener('submit',generateFormHandler)