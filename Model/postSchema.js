var mongoose = require('mongoose')
var postSchema = new mongoose.Schema({

posttext:String,
like:[{type:mongoose.Schema.Types.ObjectId , ref:'user'}],
dislike:[{type:mongoose.Schema.Types.ObjectId , ref:'user'}],
postedby:[{type:mongoose.Schema.Types.ObjectId , ref:'user'}]

},{timestamps:true})



module.exports = mongoose.model('post',postSchema)