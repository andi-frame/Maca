import fs from "fs";
import ElevenLabs from "elevenlabs-node";

export const convertTextToAudio = async (text) => {
  const voiceID = "lFjzhZHq0NwTRiu2GQxy";

  const voice = new ElevenLabs({
    apiKey: process.env.ELEVEN_LABS_API_KEY,
    voiceId: voiceID,
  });

  const fileName = `tempAudio.wav`;
  const fileWriteStream = fs.createWriteStream(fileName);

  console.log("Converting response to audio...");
  await voice
    .textToSpeechStream({
      // Required Parameters
      textInput: text,

      // Optional Parameters
      modelId: "eleven_multilingual_v2",
      voiceId: voiceID,
      stability: 0.5,
      similarityBoost: 0.5,
      style: 1,
      responseType: "stream",
      speakerBoost: true,
    })
    .then((res) => {
      res.pipe(fileWriteStream);
      console.log("Convert audio successfully!");
    });
};
