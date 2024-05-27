const bookRepository = require('../repositories/bookRepository');

class BookService {
  async getAllBooks() {
    return await bookRepository.findAll();
  }

  async getBookById(code) {
    return await bookRepository.findByPk(code);
  }

  async createBook(book) {
    return await bookRepository.create(book);
  }

  async updateBook(code, updates) {
    return await bookRepository.update(code, updates);
  }
}

module.exports = new BookService();
