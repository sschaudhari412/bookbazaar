// src/routes/orderRoutes.js
import express from "express";
import OrderController from "../controllers/orderController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes below require authentication
router.post("/buy", authenticateToken, OrderController.buy);
router.post("/return", authenticateToken, OrderController.returnBook);
router.get("/", authenticateToken, OrderController.getUserOrders);


// 🧾 Admin: Get all orders
router.get("/all", authenticateToken, OrderController.getAllOrders);

export default router;
