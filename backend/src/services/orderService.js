// src/services/orderService.js
import Order from "../models/Order.js";
import Book from "../models/Book.js";
import User from "../models/User.js";

export const orderService = {
  // 🔹 Buy a book
  async buyBook({ userId, bookId, quantity }) {
    const book = await Book.findByPk(bookId);
    if (!book) throw new Error("Book not found");
    if (book.stock < quantity)
      throw new Error("Not enough stock available for this book");

    const totalPrice = book.price * quantity;

    // Update book stock
    book.stock -= quantity;
    await book.save();

    // Create order record
    const order = await Order.create({
      userId,
      bookId,
      quantity,
      totalPrice,
      status: "purchased",
    });

    return order;
  },

  // 🔹 Return a book
  async returnBook({ userId, orderId }) {
    const order = await Order.findOne({
      where: { id: orderId, userId },
      include: Book,
    });

    if (!order) throw new Error("Order not found for this user");
    if (order.status === "returned")
      throw new Error("Book already returned");

    // Restore stock
    const book = order.Book;
    book.stock += order.quantity;
    await book.save();

    // Update order status
    order.status = "returned";
    await order.save();

    return order;
  },

  // 🔹 Get all orders of a customer
  async getUserOrders(userId) {
    const orders = await Order.findAll({
      where: { userId },
      include: [
        { model: Book, attributes: ["title", "author", "price"] },
        { model: User, attributes: ["name", "email"] },
      ],
    });
    return orders;
  },
};
