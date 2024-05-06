import multer from "multer";
import path from "node:path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const maxFileSize = 15000000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "books"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype == "application/pdf") {
      cb(null, true);
    } else {
      console.log("Please insert PDF file!");
      cb(null, false);
    }
  },
  limits: { fieldSize: maxFileSize },
});

export default upload;
