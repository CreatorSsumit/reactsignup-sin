var jwt = require("jsonwebtoken");
var jwttoken = require("../../Model/key").url.jwt

exports.isLoggedin = (req,res,next)=>{
    var token = req.header('auth-token')
    if(!token) return res.status(401).json({error:"access denied"})
    try {
        const verfied = jwt.verify(token,jwttoken);
    
        req.user = verfied.user;
        next();
    } catch (error) {
        let message;
        if(!req.user) message = "Session timeout";
        else message = error;
     

        res.status(500).json({error:message})
    }
}