import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "photo") {
      cb(null, './public/spot/')
    }
    else if (file.fieldname === "qrCode") {
        cb(null, './public/qr/');
    }
    cb(null, "./public/qr")
  },
  filename: function (req, file, cb) {
    cb(
      null,
      path.parse(file.originalname).name +
      "-" +
      Date.now() +
      path.extname(file.originalname)
    );
  },
});

function fileFilter (req, file, callback) {
  let ext = path.extname(file.originalname);
  console.log(file);
  if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(new Error('Only images are allowed'))
  }
  callback(null, true)
}

// const limits = {
//   fileSize: '2mb'
// }

const upload = multer({ storage, fileFilter});

export default upload