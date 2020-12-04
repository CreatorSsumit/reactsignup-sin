var express = require('express');
var router = express.Router();
var {homepageroute,
  Signup,
  Signin,
  Editprofile,
  Resetpassword,
  Forgetpassword,
  Deleteprofile,
  Uploadimage,
} = require('../controller/userController');


var {check} = require('express-validator')
var {isLoggedin} = require("../routes/utility/verify")

/**
 * @route Post /users
 * @desc Testing Home only
 * @access Private
 */



router.post('/',  homepageroute);

/**
 * @route Post /users/signup
 * @desc let the user signup
 * @access Public
 */

router.post('/signup',[
  check('username','username must have 4 character and no space').isLength({min:4}).matches(/^[\S]+$/),
  check('email','Invalid email').isEmail(),
  check('password','password must have 6 character and no space').isLength({min:6}).matches(/^[\S]+$/)
], Signup);
router.get('/signup',(req,res)=>{
  res.render('index')
});


/**
 * @route Post /users/signin
 * @desc let the user signin
 * @access Public
 */

 router.post('/signin',[
  check('username','username must have 4 character and no space').isLength({min:4}),
  check('password','password must have 6 character and no space').isLength({min:4})
],Signin)


/**
 * @route Post /users/editprofile
 * @desc let the user editprofile
 * @access Private
 */

router.post('/editprofile',isLoggedin,Editprofile)

/**
 * @route Post /users/resetpassword
 * @desc let the user reset password
 * @access Private
 */

router.post('/resetpassword',isLoggedin,Resetpassword)

/**
 * @route Post /users/forgetpassword
 * @desc let the user forget password
 * @access Public
 */

router.post('/forgetpassword',[check("email","Invalid Email").isEmail()],Forgetpassword)

/**
 * @route Post /users/deleteprofile
 * @desc let the user delete profile
 * @access Private
 */

router.post('/deleteprofile',isLoggedin,Deleteprofile)

/**
 * @route Post /users/uploadimage
 * @desc let the user upload image
 * @access Private
 */

router.post('/uploadimage',isLoggedin,Uploadimage)




module.exports = router;
