// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import LoginPage from './components/LoginPage';
// import RegisterPage from './components/RegisterPage';

// function App() {
//   return (
//     <Router>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container">
//           {/* Brand Name */}
//           <Link className="navbar-brand fw-bold" to="/">BookBazaar</Link>

//           {/* Toggler for mobile view */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Collapsible Content */}
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <div className="ms-auto d-flex align-items-center">
//               <Link to="/login" className="btn btn-primary me-2">Login</Link>
//               <Link to="/register" className="btn btn-success">Register</Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Page Content */}
//       <div className="container mt-5">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AboutUs from './components/AboutUs';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;

