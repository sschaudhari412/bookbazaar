import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, Form, Table, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AdminOrders from "./AdminOrders";

function AdminDashboard() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [form, setForm] = useState({ title: "", author: "", description: "" });
  const [showOrders, setShowOrders] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // ✅ Fetch all books
  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/books", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBooks(res.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // ✅ Handle form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Add or Update book
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingBook) {
        await axios.put(
          `http://localhost:5000/api/books/${editingBook.id}`,
          form,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        await axios.post("http://localhost:5000/api/books", form, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      setShowModal(false);
      setEditingBook(null);
      setForm({ title: "", author: "", description: "" });
      fetchBooks();
    } catch (error) {
      console.error("Error saving book:", error);
      alert("Failed to save book!");
    }
  };

  // ✅ Delete a book
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Failed to delete book!");
    }
  };

  // ✅ Open modal for adding new book
  const handleAddBook = () => {
    setEditingBook(null);
    setForm({ title: "", author: "", description: "" });
    setShowModal(true);
  };

  // ✅ Open modal for editing book
  const handleEdit = (book) => {
    setEditingBook(book);
    setForm(book);
    setShowModal(true);
  };

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container mt-4">
      {/* <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>📘 Admin Dashboard - Manage Books</h2>
         {/* <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>  */}

      {/*</div> */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>📘 Admin Dashboard</h2>
        <div>
          {!showOrders && (
            <Button
              variant="info"
              className="me-2"
              onClick={() => setShowOrders(true)}
            >
              📦 View All Orders
            </Button>
          )}

          {showOrders && (
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => setShowOrders(false)}
            >
              ← Back to Books
            </Button>
          )}

          {/* <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button> */}
        </div>
      </div>

      {/* <Button variant="primary" className="mb-3" onClick={handleAddBook}>
        ➕ Add New Book
      </Button>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.description}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEdit(book)}
                    >
                      ✏️ Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(book.id)}
                    >
                      🗑 Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No books found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )} */}

      {showOrders ? (
        // 🧾 Show Orders Page
        <div>
          <AdminOrders />
        </div>
      ) : (
        // 📚 Default Books Page
        <>
          <Button variant="primary" className="mb-3" onClick={handleAddBook}>
            ➕ Add New Book
          </Button>

          {loading ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.length > 0 ? (
                  books.map((book) => (
                    <tr key={book.id}>
                      <td>{book.id}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.description}</td>
                      <td>
                        <Button
                          variant="warning"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEdit(book)}
                        >
                          ✏️ Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(book.id)}
                        >
                          🗑 Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-muted">
                      No books found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </>
      )}

      {/* 📋 Add/Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingBook ? "Edit Book" : "Add Book"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={form.author}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={form.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              {editingBook ? "Update Book" : "Add Book"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AdminDashboard;
