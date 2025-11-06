// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";
// import HomePage from "./components/HomePage";
// import Allbooks from "./components/Allbooks";
// import AdminDashboard from "./components/AdminDashboard";


// function Navbar() {
//   const location = useLocation();
//   const isLanding = location.pathname === "/"; // only show login/register buttons here
//   const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

//   // Hide the top navbar entirely when user is logged in (i.e., on /home)
//   if (!isLanding && !isAuthPage) return null;

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         {/* Brand Name */}
//         <Link className="navbar-brand fw-bold" to="/">BookBazaar</Link>

//         {/* Mobile toggler */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           {isLanding && (
//             <div className="ms-auto d-flex align-items-center">
//               <Link to="/login" className="btn btn-primary me-2">Login</Link>
//               <Link to="/register" className="btn btn-success">Register</Link>

//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// function LandingContent() {
//   return (
//     <div className="text-center mt-5">
//       <h1 className="fw-bold">Welcome to BookBazaar 📚</h1>
//       <p className="lead mt-3">Discover, buy, and sell books effortlessly!</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="container mt-5">
//         <Routes>
//           <Route path="/" element={<LandingContent />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/home" element={<HomePage />} />
//           <Route path="/books" element={<Allbooks />} />
//           <Route path="/dashboard" element={<AdminDashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



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
import HomePage from "./components/HomePage";
import Allbooks from "./components/Allbooks";
import AdminDashboard from "./components/AdminDashboard";

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
            {/* Show login/register only on landing page */}
            {isLanding && (
              <>
                <Link to="/login" className="btn btn-primary me-2">
                  Login
                </Link>
                <Link to="/register" className="btn btn-success">
                  Register
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

function LandingContent() {
  return (
    <div className="text-center mt-5">
      <h1 className="fw-bold">Welcome to BookBazaar 📚</h1>
      <p className="lead mt-3">Discover, buy, and sell books effortlessly!</p>
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
          <Route path="/home" element={<HomePage />} />
          <Route path="/books" element={<Allbooks />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
