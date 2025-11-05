// src/services/bookService.js
import Book from "../models/Book.js";

export const bookService = {
  // Create a new book
  async createBook(data) {
    const { title, author, isbn } = data;

    // Check for duplicate ISBN if provided
    if (isbn) {
      const existingBook = await Book.findOne({ where: { isbn } });
      if (existingBook) throw new Error("Book with this ISBN already exists");
    }

    const book = await Book.create(data);
    return book;
  },

  // Get all books
  async getAllBooks() {
    return await Book.findAll();
  },

  // Get book by ID
  async getBookById(id) {
    const book = await Book.findByPk(id);
    if (!book) throw new Error("Book not found");
    return book;
  },

  // Update book by ID
  async updateBook(id, updatedData) {
    const book = await Book.findByPk(id);
    if (!book) throw new Error("Book not found");

    await book.update(updatedData);
    return book;
  },

  // Delete book by ID
  async deleteBook(id) {
    const book = await Book.findByPk(id);
    if (!book) throw new Error("Book not found");

    await book.destroy();
    return { message: "Book deleted successfully" };
  },
};
