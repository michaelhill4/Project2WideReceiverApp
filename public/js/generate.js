
// const generateFormHandler = async (event ) => {
//     event.preventDefault();
const generateFormHandler = async(event)=>{
    event.preventDefault();
    const foodPreference = document.querySelector('#userPreference').value.trim();
    console.log(foodPreference);
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