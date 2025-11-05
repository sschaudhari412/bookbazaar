// src/models/Book.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";

const Book = sequelize.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: { notEmpty: true },
    },
    author: {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: { notEmpty: true },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isbn: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: true,
      validate: {
        len: [10, 20], // loose validation (10 or 13 usually)
      },
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
      validate: { min: 0 },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: { min: 0 },
    },
    coverImageUrl: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      validate: { isUrl: true },
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    // Sequelize will automatically add createdAt and updatedAt
  },
  {
    tableName: "books",
    timestamps: true,
    underscored: true,
  }
);

export default Book;
