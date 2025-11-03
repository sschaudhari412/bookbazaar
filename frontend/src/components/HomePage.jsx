// src/components/HomePage.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// function HomePage() {
//   return (
//     <div className="text-center mt-5">
//       <h1>📚 Welcome to BookBazaar</h1>
//       <p className="lead">Your online book store made simple.</p>

//       {/* <div className="mt-4">
//         <Link to="/login" className="btn btn-primary mx-2">Login</Link>
//         <Link to="/register" className="btn btn-success mx-2">Register</Link>
//       </div> */}
//     </div>
//   );
// }

// export default HomePage;

// src/components/HomePage.jsx



//HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand fw-bold" to="/">BookBazaar</Link>

          {/* Toggler for Mobile */}
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

          {/* Collapsible Buttons */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="ms-auto d-flex align-items-center">
              <Link to="/dashboard" className="btn btn-info mx-2">Go to Dashboard</Link>
              <Link to="/login" className="btn btn-primary me-2">Login</Link>
              <Link to="/register" className="btn btn-success">Register</Link>
              <Link to="/about" className="nav-link">About Us</Link>

            </div>
          </div>
        </div>
      </nav>

      {/* Home Content */}
      <div className="text-center mt-5">
        <h1>📚 Welcome to BookBazaar</h1>
        <p className="lead">Your online book store made simple.</p>
      </div>
    </>
  );
}

export default HomePage;