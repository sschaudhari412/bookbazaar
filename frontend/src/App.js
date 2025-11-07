// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
//import HomePage from "./components/HomePage";
import Allbooks from "./components/Allbooks";
import AdminDashboard from "./components/AdminDashboard";
import AboutPage from "./components/AboutPage";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLanding = location.pathname === "/";
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand Name */}
        <Link className="navbar-brand fw-bold" to="/">
          <span
            role="img"
            aria-label="logo"
            style={{ fontSize: "1.9rem", marginRight: "8px" }}
          >
            📚
          </span>
          BookBazaar
        </Link>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto d-flex align-items-center">
            {/* Show Home / About only on landing page */}
            {isLanding && (
              <>
                <Link to="/" className="btn btn-outline-light me-2 fw-semibold">
                  🏠 Home
                </Link>
                <Link to="/about" className="btn btn-outline-light fw-semibold">
                  ℹ️ About Us
                </Link>
              </>
            )}

            {/* Show Logout button on any logged-in page */}
            {!isLanding && !isAuthPage && (
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

// function LandingContent() {
//   return (
//     <div className="text-center mt-5">
//       <h1 className="fw-bold">Welcome to BookBazaar 📚</h1>
//       <p className="lead mt-3">Discover, buy, and sell books effortlessly!</p>
//     </div>
//   );
// }

function LandingContent() {
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        padding: "40px 20px",
      }}
    >
      <div
        className="text-center p-5 bg-white shadow-lg rounded-4"
        style={{
          maxWidth: "800px",
          width: "100%",
        }}
      >
        {/* Hero Section */}
        <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
          Welcome to <span style={{ color: "#007bff" }}>BookBazaar</span> 📚
        </h1>
        <p className="lead text-muted mb-4">
          Discover, buy, and sell your favorite books all in one place. Bringing
          readers and stories closer than ever!
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3">
          <Link to="/login" className="btn btn-primary px-4 py-2 fw-semibold">
            🔑 Login
          </Link>
          <Link
            to="/register"
            className="btn btn-success px-4 py-2 fw-semibold"
          >
            📝 Register
          </Link>
        </div>

        {/* Decorative Image Section */}
        {/* <div className="mt-5">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/12/54/books-1868068_960_720.jpg"
            //alt="Book Store"
            className="img-fluid rounded-3 shadow-sm"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </div> */}

        {/* Feature Highlights */}
        <div className="mt-5 row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="p-3 bg-light rounded-3 shadow-sm h-100">
              <h5 className="fw-bold text-primary">📖 Explore Books</h5>
              <p className="text-muted mb-0">
                Browse a wide range of categories — from classics to modern
                bestsellers.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-light rounded-3 shadow-sm h-100">
              <h5 className="fw-bold text-success">💳 Buy Instantly</h5>
              <p className="text-muted mb-0">
                Easy, secure purchases — get your favorite books in just a
                click.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-light rounded-3 shadow-sm h-100">
              <h5 className="fw-bold text-warning">👩‍💻 Manage Dashboard</h5>
              <p className="text-muted mb-0">
                Admins can manage users, orders, and inventory effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<LandingContent />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* // <Route path="/home" element={<HomePage />} /> */}
          <Route path="/books" element={<Allbooks />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/about" element={<AboutPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
