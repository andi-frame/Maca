import { convertPdfToText } from "./pdfToTextOCR.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function upPdfTextToMongoDb(bufferData) {
  const textOCR = await convertPdfToText(bufferData);

  // Ringkasan cerita dengan Gemini AI
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt =
    "Berikut adalah array tiap-tiap halaman buku cerita anak. Buatlah ringkasan cerita dari array berikut: " + textOCR;

  const result = await model.generateContent(prompt);
  const geminiText = result.response.text();

  return {
    text: textOCR,
    summary: geminiText,
  };
}
