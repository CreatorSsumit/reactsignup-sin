var User = require('../Model/userSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const jwttoken = require('../Model/key').url.jwt;
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path')
var store = require('store')

/** @route /user */

exports.homepageroute = (req,res,next) =>{
    res.status(200).json({message:"staus ok"})
}

/** @route /user/signup */

exports.Signup = (req,res,next) =>{
const errors = validationResult(req) 
 if(!errors.isEmpty()) return res.status(406).json(errors.errors)

var {fullname,password,email,otp,contact}  =  req.body


var newUser = new User({fullname,password,email,contact})

 var otplocal =  store.get('otp').otp;

 if(otplocal === otp){
    User.findOne({email}).then((user)=>{
        if(user) return res.status(302).json({message : 'user already registerd'})
       
       
        bcrypt.genSalt(10,(err,salt)=>{
                   bcrypt.hash(newUser.password,salt,(err,hash)=>{
                       
                       if(err) throw err;
                       newUser.password = hash ;
       
                       newUser.save().then(user => res.status(201).json({message : 'new user created',user})  ).catch((err)=>{
                           res.status(500).json({message : "Internal server plm",error:err})
                       })
       
                   })
               })
               
         
           })
 }else{
   return res.status(500).json({message : "Otp Incorrect"})
 }


}

exports.otpcheck = (req,res,next) =>{
    const errors = validationResult(req) 
     if(!errors.isEmpty()) return res.status(406).json(errors.errors)
    
    var {email}  =  req.body


    
    var otp = String( Math.floor(Math.random()* 999999999-1000000) +1000000);
  
    var transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:'creatorssumit@gmail.com',
            pass:"Madurga98@"
        }
    })

    var mailOptions = {
        from:'"Fred Foo 👻" <developersumit98@gmail.com>',
        to: email.trim(),
        subject: "Auto genrated otp",
        text:`your OTP is "${otp}".`
    }

    
    transport.sendMail(mailOptions,(error,info)=>{
        store.set('otp', { otp:otp })
        
        if(error) return res.status(401).json({message : 'Try Again Later ! Server Down'})
    

    }
    
  
    
    )


}
    



/** @route /user/signin */

exports.Signin = (req,res,next)=>{
    const errors = validationResult(req) 
    if(!errors.isEmpty()) return res.status(406).json(errors.errors);
    var {email,password}  =  req.body
    
    
    User.findOne({email}).then((user)=>{
        if(!user) return res.status(401).json({message : "user not found"})
        bcrypt.compare(password,user.password).then( isMatch =>{
       
             if(!isMatch) return res.status(203).json({message:"password incorrect"})
var token = jwt.sign({user},jwttoken,{expiresIn :3600})
 req.header('auth-token',token)
            res.status(200).json({message:"Signin Successfully",token,user})
        })
               
         
           })
    
}

