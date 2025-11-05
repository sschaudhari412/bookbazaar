// src/routes/bookRoutes.js
import express from "express";
import BookController from "../controllers/bookController.js";
import { authenticateToken, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔹 Public routes
router.get("/", BookController.getAll);
router.get("/:id", BookController.getById);

// 🔹 Admin routes (protected)
router.post("/", authenticateToken, isAdmin, BookController.create);
router.put("/:id", authenticateToken, isAdmin, BookController.update);
router.delete("/:id", authenticateToken, isAdmin, BookController.delete);

export default router;
