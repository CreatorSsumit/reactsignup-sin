const mongoose = require('mongoose')

var userSchema  = new mongoose.Schema({
    fullname:String,
    password:String,
    email:String,
    contact:Number,
   
},{timestamps:true});

module.exports = mongoose.model('usermodel',userSchema)