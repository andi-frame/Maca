import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase.js";
import BookModel from "../models/BookModel.js";
import upPdfTextToMongoDb from "../utils/upPdfTextToMongoDb.js";

// const index = async (req, res) => {
//   BookModel.find()
//     .then((response) => {
//       res.json({
//         response,
//       });
//     })
//     .catch((error) => {
//       res.json({
//         message: error,
//       });
//     });
// };

const show = (req, res) => {
  let bookID = req.body.bookID;
  BookModel.findById(bookID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

const update = (req, res) => {
  let bookID = req.body.bookID;
  let updatedBook = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
  };

  BookModel.findByIdAndUpdate(bookID, { $set: updatedBook })
    .then(() => {
      res.json({
        message: "Book updated successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

const destroy = (req, res) => {
  let bookID = req.body.bookID;
  BookModel.findByIdAndRemove(bookID)
    .then(() => {
      res.json({
        message: "Book removed successfully!",
      });
    })
    .catch((error) => {
      req.json({
        message: error,
      });
    });
};

// -----------------------------------------
// -- Submit book to firebase and mongodb --
const submit = async (req, res) => {
  const file = req.file;
  if (file && req.body.title && req.body.author && req.body.uploaderEmail) {
    // Check if the book title already exists in the database
    const existingBook = await BookModel.findOne({ title: req.body.title });

    if (existingBook) {
      res.json({ uploaded: false, message: "Book title already exists. Please choose a different title!" });
    } else {
      // Upload file to firebase
      console.log("Uploading Book");
      const filePath = "books/" + new Date() + " -- " + file.originalname;
      const fileRef = ref(storage, filePath);
      await uploadBytes(fileRef, file.buffer);
      const pdfTextToMongoDb = await upPdfTextToMongoDb(file.buffer, req.body.title);

      // Upload file information to mongodb
      const data = {
        title: req.body.title,
        author: req.body.author,
        uploaderEmail: req.body.uploaderEmail,
        genre: req.body.genre,
        description: req.body.description,
        text: pdfTextToMongoDb.text,
        summary: pdfTextToMongoDb.summary,
        img: pdfTextToMongoDb.img,
        file: filePath,
      };

      await BookModel.insertMany(data);
      console.log("Book added successfully!");
      res.json({ uploaded: true });
    }
  } else {
    res.json({ uploaded: false, message: "Judul, pencipta, dan file buku tidak boleh kosong!" });
  }
};

// -- Find books by filter --
const findBy = async (req, res) => {
  const filter = req.body.filter;
  BookModel.find(filter)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

// -- Dowload book by id
const dowload = async (req, res) => {
  filter = req.body.filter;
  const book = await BookModel.findById(filter);
  
};

export default { findBy, show, update, destroy, submit, download };
