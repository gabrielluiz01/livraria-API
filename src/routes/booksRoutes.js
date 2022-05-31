import express from "express";
import BookController from "../controllers/booksControllers.js";

const router = express.Router();

router
  .get("/livros", BookController.getAllBooks)
  .get("/livros/busca", BookController.getBookByPublisher)
  .get("/livros/:id", BookController.filteredBook)
  .post("/livros", BookController.createBook)
  .put("/livros/:id", BookController.updateBook)
  .delete("/livros/:id", BookController.deleteBook);

export default router;
