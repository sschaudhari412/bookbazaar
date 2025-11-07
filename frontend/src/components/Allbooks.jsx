import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Allbooks() {
  const navigate = useNavigate();
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    joined: "2024",
  });
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [purchasingBookId, setPurchasingBookId] = useState(null);

  const API_URL = "http://localhost:5000";

  const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}/api/books`);
      if (!response.ok) throw new Error("Failed to fetch books");
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError(err.message || "Failed to load books");
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleBuyNow = async (book) => {
    try {
      setPurchasingBookId(book.id);

      const response = await fetch(`${API_URL}/api/orders/buy`, {
        method: "POST",
        headers: getAuthHeader(),
        body: JSON.stringify({
          bookId: book.id,
          quantity: 1,
        }),
      });

      if (!response.ok) throw new Error("Failed to purchase book");

      const data = await response.json();
      setSuccessMessage(
        `✅ ${book.title} purchased successfully! Order ID: ${data.order.id}`
      );
      setTimeout(() => setSuccessMessage(""), 4000);
    } catch (err) {
      alert(`❌ Error: ${err.message}`);
    } finally {
      setPurchasingBookId(null);
    }
  };

  const handleAddToCart = (book) => {
    alert(`📚 ${book.title} added to cart!`);
  };

  // ✅ Logout handler
  // const handleLogout = () => {
  //   localStorage.removeItem("token"); // remove token
  //   navigate("/login"); // redirect to login page
  // };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        paddingTop: "20px",
        paddingBottom: "40px",
      }}
    >
      
      {/* NAVBAR */}
      {/* <nav
        style={{
          backgroundColor: "#1a1a1a",
          color: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          marginBottom: "30px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div style={{ fontSize: "32px" }}>📚</div>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>
            BookBazaar
          </h1>
        </div>
        <input
          type="text"
          placeholder="Search books..."
          style={{
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            width: "300px",
            fontSize: "14px",
          }}
        />
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            🛒 Cart
          </button>

          {/* ✅ LOGOUT BUTTON */}
          {/* <button
            onClick={handleLogout}
            style={{
              padding: "10px 20px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            🚪 Logout
          </button>
        </div>
      </nav> } */}

      <Container>
        {error && (
          <Alert variant="danger" onClose={() => setError(null)} dismissible>
            Error: {error}
          </Alert>
        )}
        {successMessage && (
          <Alert
            variant="success"
            onClose={() => setSuccessMessage("")}
            dismissible
          >
            {successMessage}
          </Alert>
        )}

        {loading ? (
          <div style={{ textAlign: "center", padding: "50px 0" }}>
            <Spinner animation="border" role="status" />
            <p style={{ marginTop: "20px", color: "#666" }}>Loading books...</p>
          </div>
        ) : books.length === 0 ? (
          <Alert variant="info">No books available</Alert>
        ) : (
          <Row className="justify-content-center">
            {books.map((book) => (
              <Col lg={3} md={4} sm={6} xs={12} className="mb-4" key={book.id}>
                <Card
                  style={{
                    height: "100%",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    transition: "0.3s",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={book.coverImageUrl}
                    alt={book.title}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text style={{ color: "#666" }}>
                      by {book.author}
                    </Card.Text>
                    <h5 style={{ color: "#007bff" }}>
                      ₹{parseFloat(book.price).toFixed(2)}
                    </h5>

                    <div style={{ display: "flex", gap: "10px" }}>
                      <Button
                        variant="secondary"
                        size="sm"
                        style={{ flex: 1 }}
                        onClick={() => handleAddToCart(book)}
                      >
                        🛒 Add to Cart
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        style={{ flex: 1 }}
                        onClick={() => handleBuyNow(book)}
                        disabled={purchasingBookId === book.id}
                      >
                        {purchasingBookId === book.id
                          ? "⏳ Processing..."
                          : "💳 Buy Now"}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
}
