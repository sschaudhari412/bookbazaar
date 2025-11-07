// src/controllers/orderController.js
import { orderService } from "../services/orderService.js";

const OrderController = {
  // 🛒 Buy book
  async buy(req, res) {
    try {
      const userId = req.user.id; // from JWT
      const { bookId, quantity } = req.body;

      if (!bookId || !quantity) {
        return res.status(400).json({ message: "bookId and quantity required" });
      }

      const order = await orderService.buyBook({ userId, bookId, quantity });
      res.status(201).json({
        message: "Book purchased successfully",
        order,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // 🔁 Return book
  async returnBook(req, res) {
    try {
      const userId = req.user.id;
      const { orderId } = req.body;

      if (!orderId)
        return res.status(400).json({ message: "orderId required" });

      const order = await orderService.returnBook({ userId, orderId });
      res.status(200).json({
        message: "Book returned successfully",
        order,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // 📜 View customer orders
  async getUserOrders(req, res) {
    try {
      const userId = req.user.id;
      const orders = await orderService.getUserOrders(userId);
      res.status(200).json(orders);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },


  async getAllOrders(req, res) {
  try {
    // Optionally, you can check role if stored in JWT
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    const orders = await orderService.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

};

export default OrderController;
