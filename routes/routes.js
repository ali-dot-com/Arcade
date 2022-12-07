const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const Auth =  require('../controllers/auth');
const addGame =  require('../controllers/addGame');
const viewgames =  require('../controllers/viewGames');
const viewGamesUser =  require('../controllers/viewGamesUser');
const deletegame =  require('../controllers/deletegame');
const updategame =  require('../controllers/updateGame');
const buygame =  require('../controllers/buyNow');

//signup form
router.get('/signup',user.signup);

//validate the new user
router.post('/pinvalidatin',user.pinValidation);

//add new user
router.post('/adduser',user.addUser);

//signin as a user or admin
router.get('/signin',user.signin);
router.get('/adminPanel', Auth.auth, user.adminHome);

//authenticate when user sign in
router.post('/adminPanel',user.authenticateSignin)

////////// LANDING PAGE //////////
router.get("/home",Auth.auth, user.dashboard);

//**************** ADD GAME *********************
router.get('/addgameform',Auth.auth,addGame.addGameForm);
router.post('/addgame',Auth.auth,addGame.addGame)


//***************** VIEW GAME ********************
router.get('/viewgames',Auth.auth, viewgames.homePage);
router.post('/viewgames',Auth.auth, viewgames.searchGame);
router.get('/viewgames/:page',Auth.auth, viewgames.viewGames_pager);
router.get('/viewgames/:catagory/:page',Auth.auth, viewgames.viewGviewGames_catagory_page);
//  USER VIEW GAMES
router.get('/viewgamesuser',Auth.auth, viewGamesUser.homePage);
router.post('/viewgamesuser',Auth.auth, viewGamesUser.searchGame);
router.get('/viewgamesuser/:page',Auth.auth, viewGamesUser.viewGames_pager);
router.get('/viewgamesuser/:catagory/:page',Auth.auth, viewGamesUser.viewGviewGames_catagory_page);

// router.get('/gameDetails/:id',Auth.auth, viewGamesUser.details);
router.get('/gameDetails/:id',Auth.auth, viewgames.details);
router.get('/usergamedetails/:id',Auth.auth, viewGamesUser.details);
router.post('/gameDetails/:id',Auth.auth, viewGamesUser.comment);

//***************** DELETE GAME ********************

router.get('/deletegame',Auth.auth,deletegame.homePage);
router.post('/deletegame',Auth.auth,deletegame.searchGame);
router.get('/deletegame/:page',Auth.auth,deletegame.delete_pager);
router.get('/deletegame/:catagory/:page',Auth.auth,deletegame.deleteGames_catagory_page);
router.get('/delete/:id',Auth.auth,deletegame.deleteGame);

//***************** UPDATE GAME ********************
router.get('/updategame',Auth.auth,updategame.homePage);
router.post('/updategame',Auth.auth,updategame.searchGame);
router.get('/updategame/:page',Auth.auth,updategame.update_pager);
router.get('/updategame/:catagory/:page',Auth.auth,updategame.update_pager_catagory_page);
router.get('/updategameform/:id',Auth.auth,updategame.updateGameForm);
router.post('/update/:id',Auth.auth,updategame.updateGame);

//***************** BUY GAME ********************
// router.get('/gamedetail/:id',buygame.gameDetail) // detail of the game

router.get('/addtowishlist/:id',Auth.auth, buygame.addToWishlist)//add item to the wishlist
router.get('/addtocart/:id',Auth.auth, buygame.addToCart)//add item to the cart

router.get('/wishlist',buygame.wishlist)//see the wishlist
router.get('/cart',buygame.cart)//see the wishlist

router.get('/removecart/:id',buygame.removeCart); // remove the item from the cart
router.get('/removewishlist/:id',buygame.removeWishlist); // remove the item from the cart


router.get('/buycart/:id',buygame.buyCart); // buy item from the cart

router.post('/proceedbill/:id',buygame.proceedBill); // proceed towards the bill

module.exports = router;