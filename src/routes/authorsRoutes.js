import express from "express";
import AuthorController from "../controllers/authorsController.js";

const router = express.Router();

router
  .get("/autores", AuthorController.getAllAuthors)
  .get("/autores/:id", AuthorController.filteredAuthor)
  .post("/autores", AuthorController.createAuthor)
  .put("/autores/:id", AuthorController.updateAuthor)
  .delete("/autores/:id", AuthorController.deleteAuthor);

export default router;
