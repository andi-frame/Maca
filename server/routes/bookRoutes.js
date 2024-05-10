import Express from "express";
import BookController from "../controllers/bookController.js";
import cors from "cors";
import multer from "multer";

const router = Express.Router();
const uploadMulter = multer();

router.use(Express.json());
router.use(Express.urlencoded({ extended: true }));
router.use(cors());

router.post("/", BookController.findBy);
router.post("/show", BookController.show);
router.post("/update", BookController.update);
router.post("/delete", BookController.destroy);
router.post("/submit", uploadMulter.single("file"), BookController.submit);
router.post("/download", BookController.download);

export default router;
