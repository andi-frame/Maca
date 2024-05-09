import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    file: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BookModel = new mongoose.model("BookModel", bookSchema);
export default BookModel;
