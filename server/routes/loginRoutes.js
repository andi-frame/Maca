import Express from "express";
import LoginModel from "../models/LoginModel.js";
import cors from "cors";
import bcrypt from "bcrypt";

const router = Express.Router();

router.use(Express.json());
router.use(Express.urlencoded({ extended: true }));
router.use(cors());

router.post("/register", async (req, res) => {
  const data = {
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  // Check if the username already exists in the database
  const existingUser = await LoginModel.findOne({ email: data.email });

  if (existingUser) {
    res.json({ exist: true, message: "Email already exists. Please choose a different email or login to your email!" });
  } else {
    // Hash the password using bcrypt
    const saltRounds = 10; // Number of salt rounds for bcrypt
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    data.password = hashedPassword; // Replace the original password with the hashed one

    const userdata = await LoginModel.insertMany(data);
    console.log(userdata);
    res.json({ exist: false, username: data.name, email: data.email });
  }
});

router.post("/login", async (req, res) => {
  try {
    const check = await LoginModel.findOne({ email: req.body.email });
    if (!check) {
      res.json({ exist: false, message: "Email not found. Please register." });
    }

    // Compare the hashed password from the database with the plaintext password
    const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
    if (!isPasswordMatch) {
      res.json({ exist: false, message: "Password incorrect" });
    } else {
      console.log(check);
      res.json({ exist: true, username: check.name, email: check.email });
    }
  } catch {
    res.json({ exist: false, message: "Wrong Details" });
  }
});

export default router;
