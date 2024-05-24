const bookService = require('../services/bookService');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.code);
    if (book) {
      res.json(book);
    } else {
      res.status(404).send('Book not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createBook = async (req, res) => {
  try {
    const book = await bookService.createBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await bookService.updateBook(req.params.code, req.body);
    res.json(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
