import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";
import { createCanvas } from "canvas";
import { createWorker } from "tesseract.js";
import fs from "fs";

// Function to convert pdf file to image file (for specific page)
export const convertPdfToImage = async (pdfFile) => {
  pdfjs.GlobalWorkerOptions.workerSrc = "pdfjs-dist/legacy/build/pdf.worker.min.mjs";
  try {
    // Initialize PDF.js with the BinaryData
    // const binaryData = new Uint8Array(fs.readFileSync(pdfFile));
    const binaryData = new Uint8Array(pdfFile);
    const pdfDoc = await pdfjs.getDocument({ data: binaryData }).promise;

    var numPage = 1;
    var imagesPath = [];

    while (numPage <= pdfDoc.numPages) {
      const page = await pdfDoc.getPage(numPage);
      const viewport = page.getViewport({ scale: 1 });
      const canvas = createCanvas(viewport.width, viewport.height);
      const context = canvas.getContext("2d");

      await page.render({ canvasContext: context, viewport }).promise;
      const imageDataURL = canvas.toDataURL("image/png");

      // Convert base64 image data URL to image file
      const imageBase64Data = imageDataURL.replace(/^data:image\/\w+;base64,/, "");
      let buffer = new Buffer.from(imageBase64Data, "base64");

      // Store image file
      // const imageFile = `tmp/tempImgForOCR.png`;
      const imageFile = `tmp/ocr-${numPage}.png`;
      fs.writeFileSync(imageFile, buffer);
      imagesPath.push(imageFile);
      numPage++;
    }

    return imagesPath; //imageFile
  } catch (error) {
    throw new Error(`Error converting PDF to image: ${error}`);
  }
};

export const convertPdfToText = async (pdfFile) => {
  const imagesPath = await convertPdfToImage(pdfFile);

  var textOCR = [];
  const worker = await createWorker("ind");
  for (const imageFile of imagesPath) {
    const ret = await worker.recognize(imageFile);
    textOCR.push(ret.data.text);
    fs.unlinkSync(imageFile);
  }
  await worker.terminate();

  return textOCR;
};
