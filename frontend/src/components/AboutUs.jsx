import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            📚 BookBazaar
          </Link>

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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Us Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Us</h1>
          <p className="lead text-muted">Learn more about BookBazaar and our mission</p>
        </div>

        <div className="row align-items-center">
          {/* Left - Image */}
          <div className="col-md-6 mb-4">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/07/15/12/books-2046678_1280.jpg"
              alt="About BookBazaar"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right - Content */}
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">📘 Our Story</h3>
            <p>
              BookBazaar was founded with one simple goal — to make buying and
              selling books easier, faster, and more affordable. From academic
              textbooks to your favorite novels, we bring a wide collection of
              books right to your fingertips.
            </p>
            <p>
              Our platform connects book lovers, students, and readers from all
              over the world. We aim to promote a culture of reading and make
              knowledge accessible to everyone.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="row text-center mt-5">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-4 h-100">
              <h4 className="fw-bold">🎯 Our Mission</h4>
              <p className="text-muted">
                To simplify book shopping with technology and deliver the best
                reading experience to our users.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-4 h-100">
              <h4 className="fw-bold">💡 Our Vision</h4>
              <p className="text-muted">
                To become India’s most trusted online bookstore — connecting
                millions of readers and authors.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-4 h-100">
              <h4 className="fw-bold">🤝 Our Values</h4>
              <p className="text-muted">
                Transparency, trust, innovation, and a shared love for books
                drive everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <h5>Want to know more or collaborate with us?</h5>
          <Link to="/contact" className="btn btn-primary mt-3">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-5">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} BookBazaar. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default AboutUs;
