// src/services/userService.js
import bcrypt from "bcrypt";
import User from "../models/User.js";
import dotenv from "dotenv";
import { generateToken } from "../utils/jwt.js";

dotenv.config();

export const userService = {
  async register({ name, email, password, role }) {
    // 🔹 Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error("Email already registered");
    }

    // 🔹 Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.BCRYPT_SALT_ROUNDS)
    );

    // 🔹 Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "user", // default role
    });

    return newUser;
  },

  async login({ email, password }) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("User not found");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid credentials");

    // Generate JWT
    const token = generateToken(user);

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  },


};
