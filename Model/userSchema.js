const mongoose = require('mongoose')

var userSchema  = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    name:String,
    address:String,
    contact:Number,
    about:String,
    gender:String,
    avatar:{
        type:String,
        default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34EjcgXEVW0TLQXrXtETW6hdEzbSiJwkYzA&usqp=CAU'
    },
    posts:[{type:mongoose.Schema.Types.ObjectId , ref:'post'}],
    courses:[{type:mongoose.Schema.Types.ObjectId , ref:'course'}]
},{timestamps:true});

module.exports = mongoose.model('user',userSchema)