// src/controllers/bookController.js
import { bookService } from "../services/bookService.js";

const BookController = {
  // 🔹 Create book (Admin only)
  async create(req, res) {
    try {
      const data = req.body;
      const book = await bookService.createBook(data);
      res.status(201).json({ message: "Book created successfully", book });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // 🔹 Get all books
  async getAll(req, res) {
    try {
      const books = await bookService.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 🔹 Get single book by ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const book = await bookService.getBookById(id);
      res.status(200).json(book);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  // 🔹 Update book (Admin only)
  async update(req, res) {
    try {
      const { id } = req.params;
      const updatedBook = await bookService.updateBook(id, req.body);
      res.status(200).json({ message: "Book updated successfully", updatedBook });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // 🔹 Delete book (Admin only)
  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await bookService.deleteBook(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

export default BookController;
