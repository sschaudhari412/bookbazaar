// src/models/Order.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";
import User from "./User.js";
import Book from "./Book.js";

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: { min: 1 },
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("purchased", "returned"),
      defaultValue: "purchased",
    },
  },
  {
    tableName: "orders",
    timestamps: true,
    underscored: true,
  }
);

// 🔹 Define relationships
User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });

Book.hasMany(Order, { foreignKey: "bookId" });
Order.belongsTo(Book, { foreignKey: "bookId" });

export default Order;
