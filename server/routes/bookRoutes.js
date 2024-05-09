import Express from "express";
import BookController from "../controllers/bookController.js";
import upload from "../middleware/upload.js";
import cors from "cors";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase.js";
import multer from "multer";

const router = Express.Router();
const uploadMulter = multer();

router.use(Express.json());
router.use(Express.urlencoded({ extended: true }));
router.use(cors());

router.get("/", BookController.index);
router.post("/show", BookController.show);
router.post("/store", upload.single("file"), BookController.store);
router.post("/update", BookController.update);
router.post("/delete", BookController.destroy);
router.post("/submit", uploadMulter.single("file"), async (req, res) => {
  // -- UPLOAD FILE TO FIREBASE --
  const file = req.file;

  if (file) {
    console.log("Uploading Book");

    const fileRef = ref(storage, `books/${new Date() + " -- " + file.originalname}`);
    uploadBytes(fileRef, file.buffer).then(() => {
      console.log("Book Uploaded");
      res.json({ uploaded: true });
    });
  } else {
    res.json({ uploaded: false, message: "No file selected" });
  }
});

export default router;
