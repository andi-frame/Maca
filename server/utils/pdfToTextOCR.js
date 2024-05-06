import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";
import { createCanvas } from "canvas";
import { createWorker } from "tesseract.js";
import fs from "fs";

// Function to convert pdf file to image file (for specific page)
export const convertPdfToImage = async (pdfFile) => {
  pdfjs.GlobalWorkerOptions.workerSrc = "pdfjs-dist/legacy/build/pdf.worker.min.mjs";
  try {
    // Initialize PDF.js with the BinaryData
    const binaryData = new Uint8Array(fs.readFileSync(pdfFile));
    const pdfDoc = await pdfjs.getDocument({ data: binaryData }).promise;
    const page = await pdfDoc.getPage(5);

    const viewport = page.getViewport({ scale: 1 });
    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext("2d");

    await page.render({ canvasContext: context, viewport }).promise;
    const imageDataURL = canvas.toDataURL("image/png");

    // Convert base64 image data URL to image file
    const imageBase64Data = imageDataURL.replace(/^data:image\/\w+;base64,/, "");
    let buffer = new Buffer.from(imageBase64Data, "base64");

    // Store image file
    const imageFile = `tempImgForOCR.png`;
    fs.writeFileSync(imageFile, buffer);

    return imageFile;
  } catch (error) {
    throw new Error(`Error converting PDF to image: ${error}`);
  }
};

export const convertPdfToText = async (pdfFile) => {
  const imageFile = await convertPdfToImage(pdfFile);
  const worker = await createWorker("ind");
  const ret = await worker.recognize(imageFile);
  await worker.terminate();
  fs.unlinkSync(imageFile);
  return ret.data.text;
};

