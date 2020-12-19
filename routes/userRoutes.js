var express = require('express');
var router = express.Router();
var {homepageroute,
  Signup,
  Signin,
otpcheck

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
  check('email','Invalid email').isEmail(),
  check('password','password must have 6 character and no space').isLength({min:6}).matches(/^[\S]+$/)
], Signup);


router.get('/signup',(req,res)=>{
  res.render('index')
});


router.post('/otpsend',
 [ check('email','Invalid email').isEmail()
], otpcheck )

/**
 * @route Post /users/signin
 * @desc let the user signin
 * @access Public
 */

 router.post('/signin',[
  check('email','Enter valid email').isEmail(),
  check('password','password must have 6 character and no space').isLength({min:4})
],Signin)





module.exports = router;
