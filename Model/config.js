var mongoose = require('mongoose')
let url = require('./key').url.mongodb

mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
    console.log("database connected")
}).catch(()=>{
    console.log("database not connected")
})