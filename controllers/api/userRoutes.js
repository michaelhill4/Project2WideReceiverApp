const router = require('express').Router();
const { User, Food } = require('../../models');
const withAuth = require('../../utils/auth');


// POST creates user account and stores data
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// /api/users/create
router.post('/create', async(req,res)=>{
  try{
    const userinput = req.body;
    let maxCalories=0;
    let foodArray=[];
    console.log(userinput);
    if(userinput=="Small"){
      maxCalories=850;
    }
    else if(userinput=="Medium"){
      maxCalories=1250;
    }
    else{
      maxCalories = 1500;
    }
    let randRestaurant = Math.floor(Math.random()*4);
    let pickedRestaurant="";
    if(randRestaurant ===0){
              pickedRestaurant="McDonalds";
          }
          else if (randRestaurant ===1){
              pickedRestaurant ="Taco Bell";
          }
          else if (randRestaurant===2){
              pickedRestaurant="Chick-Fil-A";
          }
          else {
              pickedRestaurant = "Subway";
          }
          const foodItems =await Food.findAll({
            where:{
              restaurant:pickedRestaurant
            }
          });

          let calorieCounter=0;
                for (let i =0;calorieCounter<maxCalories;i++){
                  let j = Math.floor(Math.random()*foodItems.length);
                  foodArray.push(foodItems[j].name);
                  calorieCounter=calorieCounter+foodItems[j].calories
                  console.log(foodArray);
                }
                foodArray.pop();
               res.render('display',{
                pickedRestaurant,foodArray,calorieCounter,logged_in:req.session.logged_in,
               })


  }

  catch(err){
    console.log(err);
  }
})

router.post('/login', async (req, res) => {
    try {
      // Find the user who matches the posted e-mail address
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // Verify the posted password with the password store in the database
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // Create session variables based on the logged in user
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      // Remove the session variables
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  router.get('/generator', (req, res) => {
    res.render("generator")
  });
 
module.exports = router;