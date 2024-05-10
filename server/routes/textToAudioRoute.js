import Express from "express";
import { convertTextToAudio } from "../utils/textToAudio.js";

const router = Express.Router();

router.use(Express.json());
router.use(Express.urlencoded({ extended: true }));

router.post("/texttoaudio", async (req, res) => {
  const text = req.body.text;
  const audioData = await convertTextToAudio(text);
  res.json({ audioData: audioData });
});

export default router;
