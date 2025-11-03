import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            📚 BookBazaar Dashboard
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
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger" to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Dashboard Layout */}
      <div className="container-fluid mt-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 bg-light border-end vh-100 p-3">
            <h5 className="text-center mb-3">Menu</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/dashboard" className="nav-link text-dark">
                  📊 Overview
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/books" className="nav-link text-dark">
                  📚 Manage Books
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/orders" className="nav-link text-dark">
                  🛒 Orders
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/users" className="nav-link text-dark">
                  👥 Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reports" className="nav-link text-dark">
                  📈 Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-lg-10 p-4">
            <h2 className="fw-bold mb-4">Dashboard Overview</h2>

            {/* Stats Cards */}
            <div className="row g-3">
              <div className="col-md-4">
                <div className="card shadow-sm text-center p-3">
                  <h5>Total Books</h5>
                  <h3 className="text-primary fw-bold">120</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm text-center p-3">
                  <h5>Orders</h5>
                  <h3 className="text-success fw-bold">85</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm text-center p-3">
                  <h5>Users</h5>
                  <h3 className="text-warning fw-bold">45</h3>
                </div>
              </div>
            </div>

            {/* Recent Orders Section */}
            <div className="mt-5">
              <h4 className="fw-bold mb-3">📦 Recent Orders</h4>
              <table className="table table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Book</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1001</td>
                    <td>Fameshwari </td>
                    <td>React for Beginners</td>
                    <td><span className="badge bg-success">Delivered</span></td>
                    <td>2 Nov 2025</td>
                  </tr>
                  <tr>
                    <td>#1002</td>
                    <td>Shubham C</td>
                    <td>Learn MERN Stack</td>
                    <td><span className="badge bg-warning text-dark">Pending</span></td>
                    <td>3 Nov 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
