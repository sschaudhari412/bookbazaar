import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
        role, // include role
      });

      const user = res.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", res.data.token);

      // ✅ Redirect based on role
      if (user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/books");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* ✅ Role Selection */}
        <div className="mb-3">
          <label>Role</label>
          <select
            className="form-control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
      <div className="text-center mt-3">
        <p>
          Don’t have an account?{" "}
          <Link to="/register" className="text-decoration-none text-success fw-bold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
