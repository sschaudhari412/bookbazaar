// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./src/config/dbConfig.js";
import UserController from "./src/controllers/userController.js";
import bookRoutes from "./src/routes/bookRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";



dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect Database
await connectDb();

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("BookBazaar backend running 🚀");
});

// ✅ Register API (will define soon)
 app.post("/api/register", UserController.register);
 app.post("/api/login",UserController.login);



//Book routes 
 app.use("/api/books", bookRoutes);



 //Order routes
 app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
