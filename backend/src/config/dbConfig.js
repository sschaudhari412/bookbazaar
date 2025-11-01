import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // to keep console clean
  }
);

export async function connectDb() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully");

    // Auto-create tables
    await sequelize.sync({ alter: true }); // alter = keeps schema updated
    console.log("✅ All models synchronized");
  } catch (error) {
    console.error("❌ Database connection error:", error);
  }
}