// src/controllers/userController.js
import { userService } from "../services/userService.js";

const UserController = {
  async register(req, res) {
    try {
      const { name, email, password, role } = req.body;

      // Basic input validation (regex style)
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      if (!passwordRegex.test(password)) {
        return res
          .status(400)
          .json({ message: "Password must be min 6 chars, include letters & numbers" });
      }

      const user = await userService.register({ name, email, password, role });

      res.status(201).json({
        message: "User registered successfully",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({ message: "Email & password required" });

      const result = await userService.login({ email, password });

      res.status(200).json({
        message: "Login successful",
        token: result.token,
        user: result.user,
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};

export default UserController;
