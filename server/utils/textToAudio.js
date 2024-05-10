import ElevenLabs from "elevenlabs-node";
import concat from 'concat-stream';

export const convertTextToAudio = async (text) => {
  const voiceID = "lFjzhZHq0NwTRiu2GQxy";

  const voice = new ElevenLabs({
    apiKey: process.env.ELEVEN_LABS_API_KEY,
    voiceId: voiceID,
  });

  console.log("Converting response to audio...");

  return new Promise((resolve, reject) => {
    voice
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
        res.pipe(concat({ encoding: 'Uint8Array' }, (result) => {
          console.log("Convert audio successfully!");
          resolve(result);
        }));
      })
      .catch((error) => {
        console.error("Error converting audio: ", error);
        reject(error);
      });
  });
};
