import books from "../models/Book.js";

class BookController {
  static getAllBooks = (req, res) => {
    books
      .find()
      .populate("author")
      .exec((err, books) => {
        res.status(200).json(books);
      });
  };

  static filteredBook = (req, res) => {
    const id = req.params.id;
    books
      .findById(id)
      .populate("author", "name")
      .exec((err, books) => {
        if (err) {
          res
            .status(400)
            .send({ message: `${err.message} - Livro não encontrado` });
        } else {
          res.status(200).send(books);
        }
      });
  };

  static createBook = (req, res) => {
    let book = new books(req.body);

    book.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao cadastrar livro.` });
      } else {
        res.status(201).send(book.toJSON());
      }
    });
  };

  static updateBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
  static deleteBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndRemove(id, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send("Livro deletado com sucesso");
      }
    });
  };

  static getBookByPublisher = (req, res) => {
    const editora = req.query.publishingCompany;

    books.find({ publishingCompany: editora }, {}, (err, books) => {
      if (err) {
        res.staus(400).send("Livro não econtrado");
      } else {
        res.status(200).send(books);
      }
    });
  };
}

export default BookController;
