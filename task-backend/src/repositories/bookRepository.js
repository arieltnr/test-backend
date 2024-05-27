const { where } = require("sequelize");
const Book = require("../entities/book");

class BookRepository {

    async findAll() {
        return await Book.findAll();
    }

    async findByPk(code) {
        return await Book.findByPk(code);
    }

    async create(book) {
        return await Book.create(book);
    }

    async update(code, updates) {
        return await Book.update(updates, { where: { code } });
    }
}

module.exports = new BookRepository();