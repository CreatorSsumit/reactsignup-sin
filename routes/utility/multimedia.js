var multer = require('multer')
var path = require("path");

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/upload')
      },
      filename: function (req, file, cb) {
          let filename = `sumitkumar${new Date.now()+path.extname(file.originalname)}`;
        cb(null, filename)
      }
})

var upload = multer({ storage: storage,
fileFilter:function(req,file,cb){
    let filetype = /png|jpg|jpeg|svg|gif/;
    let mimetype = filetype.test(file.mimetype);
    let extname = filetype.test(path.extname(file.originalname).toLowerCase());

    if(mimetype && extname) return cb(null,true)

    cb(`only ${filetype} are allowed`)
}
})


module.exports = upload;