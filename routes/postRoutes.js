var express = require('express');
var router = express.Router();
var {homepageroute
 , Timeline,
 Profile,
 Createpost,
 Likepost,
 DisLikepost

} = require('../controller/postController');
var {isLoggedin} = require("../routes/utility/verify");

/**
 * @route Post /users/post/
 * @desc Testing Home only
 * @access Private
 */


router.post('/',isLoggedin,homepageroute);

/**
 * @route Post /users/post/profile
 * @desc let th user see profile
 * @access Private
 */


router.get('/profile',isLoggedin,Profile);


/**
 * @route Post /users/post/timelime
 * @desc let th user see all post
 * @access Public
 */


router.get('/timeline',isLoggedin,Timeline);


/**
 * @route Post /users/post/createpost
 * @desc let th user create post
 * @access Public
 */


router.post('/createpost',isLoggedin,Createpost);

/**
 * @route Post /users/post/likepost
 * @desc let the user likepost 
 * @access Public
 */


router.get('/likepost/:id',isLoggedin,Likepost);

/**
 * @route Post /users/post/dislikepost
 * @desc let the user likepost 
 * @access Public
 */


router.get('/dislikepost/:id',isLoggedin,DisLikepost);


























module.exports = router;