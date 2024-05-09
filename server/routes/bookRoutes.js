import Express from "express";
import BookController from "../controllers/bookController.js";
import upload from "../middleware/upload.js";
import cors from "cors";
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

router.post("/submit", uploadMulter.single("file"), BookController.submit);

export default router;
