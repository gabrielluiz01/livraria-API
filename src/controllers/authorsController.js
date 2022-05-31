import authors from "../models/Author.js";

class AuthorController {
  static getAllAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static filteredAuthor = (req, res) => {
    const id = req.params.id;
    authors.findById(id, (err, authors) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Autor não encontrado` });
      } else {
        res.status(200).send(authors);
      }
    });
  };

  static createAuthor = (req, res) => {
    let author = new authors(req.body);

    author.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao cadastrar autor.` });
      } else {
        res.status(201).send(author.toJSON());
      }
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
  static deleteAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndRemove(id, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send("Autor deletado com sucesso");
      }
    });
  };
}

export default AuthorController;
