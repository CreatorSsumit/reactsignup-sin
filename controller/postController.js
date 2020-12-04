var User = require('../Model/userSchema')
const {validationResult} = require('express-validator');
const postSchema = require('../Model/postSchema');

exports.homepageroute = (req,res,next) =>{
    res.status(200).json({message:"staus ok"})
}

exports.Timeline = (req,res,next) =>{
    postSchema.find().populate('postedby').exec((err,posts)=>{
        res.status(200).json({message:"all recent post goted",posts})
    })
}

exports.Profile = (req,res,next) =>{
   User.findOne({username:req.user.username}).populate('posts').exec((err,user)=>{
        res.status(200).json({message:"all user recent post goted",user:user})
    })
}

exports.Createpost = (req,res,next) =>{
    let {posttext} = req.body;
    var newpost = new postSchema({posttext})
    User.findOne({username:req.user.username})
    .then(userdata=>{
        newpost.postedby = userdata;
        userdata.posts.push(newpost);
        userdata.save().then(()=>{
            newpost.save().then(()=>{
                res.status(200).json({message:"new post created"})
            })
        })
    })
 }

 exports.Likepost = (req,res,next) =>{
   User.findOne({username:req.user.username}).then((user)=>{
       postSchema.findOne({_id:req.params.id}).then((post)=>{

          if(post.like.indexOf(user._id) === -1){

            if(post.dislike.indexOf(user._id) >= 0){
                let userindex = post.dislike.findIndex(p=>p._id === user._id);
                post.dislike.splice(userindex,1)
            }

            post.like.push(user);
            res.status(200).json({message:"liked"})
          }
else if(post.like.indexOf(user._id) >= 0){
    res.status(200).json({message:"already liked"})
}

          post.save()
       })
   })

 }

exports.DisLikepost = (req,res,next) =>{
    User.findOne({username:req.user.username}).then((user)=>{
        postSchema.findOne({_id:req.params.id}).then((post)=>{
 
           if(post.dislike.indexOf(user._id) === -1){
 
             if(post.like.indexOf(user._id) >= 0){
                 let userindex = post.like.findIndex(p=>p._id === user._id);
                 post.like.splice(userindex,1)
             }
 
             post.dislike.push(user);
             res.status(200).json({message:"disliked"})
           }
 else if(post.dislike.indexOf(user._id) >= 0){
     res.status(200).json({message:"already disliked"})
 }
 
           post.save()
        
        })
    })
 
  }

  



 

