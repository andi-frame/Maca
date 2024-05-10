import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";
import { createCanvas } from "canvas";
import { createWorker } from "tesseract.js";
import fs from "fs";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase.js";

// Function to convert pdf file to image file (for specific page)
export const convertPdfToImage = async (pdfFile) => {
  pdfjs.GlobalWorkerOptions.workerSrc = "pdfjs-dist/legacy/build/pdf.worker.min.mjs";
  try {
    // Initialize PDF.js with the BinaryData
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
      const imageFile = `tmp/ocr-${numPage}.png`;
      fs.writeFileSync(imageFile, buffer);
      imagesPath.push(imageFile);

      numPage++;
    }

    return imagesPath;
  } catch (error) {
    throw new Error(`Error converting PDF to image: ${error}`);
  }
};

export const convertPdfToText = async (pdfFile, bookTitle) => {
  const imagesPath = await convertPdfToImage(pdfFile);

  // Upload book cover to firebase
  const binaryData = new Uint8Array(fs.readFileSync(imagesPath[0]));
  const filePath = "bookCover/" + new Date() + " -- " + bookTitle + ".png";
  const fileRef = ref(storage, filePath);
  await uploadBytes(fileRef, binaryData);
  const coverUrl = await getDownloadURL(fileRef);

  var textOCR = [];
  const worker = await createWorker("ind");
  for (const imageFile of imagesPath) {
    const ret = await worker.recognize(imageFile);
    textOCR.push(ret.data.text);
    fs.unlinkSync(imageFile);
  }
  await worker.terminate();

  return { textOCR: textOCR, coverUrl: coverUrl };
};
