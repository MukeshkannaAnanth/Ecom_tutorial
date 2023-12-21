const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req,res,cb){
        cb(null, "uploads/")
    },
    filename: function(req,file,cb){
      const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);

        const filename = file.originalname.split(".")[0]
        cb(null, filename + "_" + uniqueSuffix + ".png");
    }
})

const upload = multer({ storage: storage });
 module.exports = upload;
// // multerSetup.js

// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, res, cb) {
//     cb(null, 'uploads/'); // Specify the destination folder for uploaded files
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "_" + Math.round.apply(Math.random() * 1e9)
//     const filename = file.originalname.split(".")[0]
//    cb(null, filename + "_" + uniqueSuffix + ".png");
//   },
// });

// const fileFilter = (req, file, cb) => {
//   // Implement any file type filtering logic if needed
//   cb(null, true);
// };

// const upload = multer({ storage: storage });

// module.exports = upload;
