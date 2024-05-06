import Express from "express";
import { transcribeAudio } from "../utils/audioToText.js";
import askChatGpt from "../utils/askChatGPT.js";

const router = new Express();

router.get("/audiototext", async (req, res) => {
  const transcription = await transcribeAudio("./tempAudio.mp3");
  res.send(transcription);
});

router.get("/askchatgpt", async (req, res) => {
  res.send(await askChatGpt());
});

export default router;
