import OpenAI from "openai";
import fs from "fs";
import "dotenv/config";

export async function transcribeAudio(filename) {
  try {
    // Initialize the OpenAI client with the given API key.
    const apiKey = process.env.OPENAI_API_KEY;
    const openAiClient = new OpenAI({ apiKey });
    // const openAiClient = new OpenAI();


    // Send the audio file for transcription using the specified model.
    console.log("Start transcribing...");
    const transcription = await openAiClient.audio.transcriptions.create({
      file: fs.createReadStream(filename),
      model: "whisper-1",
    });
    console.log("Finish transcribing.");

    // Return the transcription result.
    return transcription;
  } catch (error) {
    // Log any errors that occur during transcription.
    console.error("Error", error);
  }
}
