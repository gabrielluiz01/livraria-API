import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: true,
  },
  publishingCompany: { type: String, required: true },
  numberPages: { type: Number },
  description: { type: String },
  price: { type: String, required: true },
  language: { type: String, required: true },
});

const books = mongoose.model("livros", bookSchema);

export default books;
