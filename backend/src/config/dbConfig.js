import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,          // <-- IMPORTANT
    dialect: process.env.DB_DIALECT,    // <-- IMPORTANT
    logging: false,
  }
);

export async function connectDb() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully");

    await sequelize.sync({ alter: true });
    console.log("✅ All models synchronized");
  } catch (error) {
    console.error("❌ Database connection error:", error);
  }
}
