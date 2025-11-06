import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [user, setUser] = useState({ name: "John Doe", email: "john@example.com", joined: "2024" });
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", price: 499, cover: "https://m.media-amazon.com/images/I/41xShlnTZTL.jpg" },
    { id: 2, title: "Effective Java", author: "Joshua Bloch", price: 699, cover: "https://m.media-amazon.com/images/I/41bWcNdTG-L.jpg" },
    { id: 3, title: "The Pragmatic Programmer", author: "Andrew Hunt", price: 599, cover: "https://m.media-amazon.com/images/I/518FqJvR9aL.jpg" },
    { id: 4, title: "Design Patterns", author: "Gang of Four", price: 799, cover: "https://m.media-amazon.com/images/I/51qpZiIYb9L.jpg" },
    { id: 5, title: "Code Complete", author: "Steve McConnell", price: 749, cover: "https://m.media-amazon.com/images/I/41vZasKUKxL.jpg" },
    { id: 6, title: "Refactoring", author: "Martin Fowler", price: 649, cover: "https://m.media-amazon.com/images/I/41zpHBNTKML.jpg" },
    { id: 7, title: "The Mythical Man-Month", author: "Frederick Brooks", price: 549, cover: "https://m.media-amazon.com/images/I/41g7dv8iq3L.jpg" },
    { id: 8, title: "Introduction to Algorithms", author: "CLRS", price: 899, cover: "https://m.media-amazon.com/images/I/41zpHBNTKML.jpg" },
  ];

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
    setCartCount(cartCount + 1);
  };

  const handleBuyNow = (book) => {
    alert(`🎉 Thank you for purchasing "${book.title}"!\nPrice: ₹${book.price}`);
  };

  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
    setCartCount(cartCount - 1);
  };

  const getTotalPrice = () => cart.reduce((sum, book) => sum + book.price, 0);

  const handleLogout = () => {
    localStorage.removeItem("user")

   // alert("Logged out!");
    setShowUserMenu(false);
    navigate("/");

  };

  const handleCheckout = () => {
    alert("🎉 Order placed! Total: ₹" + getTotalPrice());
    setCart([]);
    setCartCount(0);
    setShowCart(false);
  };


  return (
    
    <div style={{width:"100vw",top:"0"}}>
    <div style={{ height: "100vh",width:"100vw", backgroundColor: "#f5f5f5", display: "flex", flexDirection: "column", overflowY: "auto"  }}>
      {/* NAVBAR */}
      <nav style={{/* backgroundColor: "#1a1a1a", color: "white", padding: "15px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.2)", position: "sticky", top: 0, zIndex: 100 */ backgroundColor: "#1a1a1a",
      color: "white",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      position: "sticky",
      top: 0,
      zIndex: 100,

      width: "100vw"}}>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div style={{ fontSize: "32px" }}>📚</div>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>BookBazaar</h1>
        </div>

        <input type="text" placeholder="Search books..." style={{ padding: "10px 15px", borderRadius: "5px", border: "none", width: "300px", fontSize: "14px" }} />

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <button onClick={() => { setShowCart(!showCart); setShowUserMenu(false); }} style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", fontWeight: "bold", position: "relative" }}>
            🛒 Cart {cartCount > 0 && <span style={{ position: "absolute", top: "-8px", right: "-8px", backgroundColor: "red", color: "white", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>{cartCount}</span>}
          </button>

          <div style={{ position: "relative" }}>
            <button onClick={() => { setShowUserMenu(!showUserMenu); setShowCart(false); }} style={{ padding: "10px 20px", backgroundColor: "#555", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>
              👤 {user.name} ▼
            </button>

            {showUserMenu && (
              <div style={{ position: "absolute", right: 0, top: "50px", backgroundColor: "white", color: "#333", borderRadius: "8px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", width: "280px", zIndex: 200 }}>
                <div style={{ padding: "15px", backgroundColor: "#e3f2fd", borderBottom: "2px solid #ddd" }}>
                  <p style={{ margin: "0 0 5px 0", fontSize: "16px", fontWeight: "bold" }}>{user.name}</p>
                  <p style={{ margin: "0 0 3px 0", fontSize: "13px", color: "#666" }}>{user.email}</p>
                  <p style={{ margin: "0", fontSize: "12px", color: "#999" }}>Member since {user.joined}</p>
                </div>
                <button style={{ width: "100%", padding: "12px", textAlign: "left", border: "none", backgroundColor: "transparent", cursor: "pointer", fontSize: "14px", borderBottom: "1px solid #eee" }} onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f5f5"} onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>👤 My Account</button>
                <button style={{ width: "100%", padding: "12px", textAlign: "left", border: "none", backgroundColor: "transparent", cursor: "pointer", fontSize: "14px", borderBottom: "1px solid #eee" }} onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f5f5"} onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>📦 My Orders</button>
                <button style={{ width: "100%", padding: "12px", textAlign: "left", border: "none", backgroundColor: "transparent", cursor: "pointer", fontSize: "14px", borderBottom: "1px solid #eee" }} onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f5f5"} onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>❤️ Wishlist</button>
                <button style={{ width: "100%", padding: "12px", textAlign: "left", border: "none", backgroundColor: "transparent", cursor: "pointer", fontSize: "14px", borderBottom: "1px solid #eee" }} onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f5f5"} onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>⭐ Reviews</button>
                <button style={{ width: "100%", padding: "12px", textAlign: "left", border: "none", backgroundColor: "transparent", cursor: "pointer", fontSize: "14px", borderBottom: "1px solid #eee" }} onMouseEnter={(e) => e.target.style.backgroundColor = "#f5f5f5"} onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>⚙️ Settings</button>
                <button onClick={() => { handleLogout(); setShowUserMenu(false); }} style={{ width: "100%", padding: "12px", textAlign: "left", border: "none", backgroundColor: "transparent", cursor: "pointer", fontSize: "14px", color: "red", fontWeight: "bold" }} onMouseEnter={(e) => e.target.style.backgroundColor = "#ffe0e0"} onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>🚪 Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div style={{ minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column", }}>
        {showCart ? (
          // CART VIEW
          <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "30px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "30px" }}>🛒 Your Shopping Cart</h2>
            {cart.length === 0 ? (
              <p style={{ fontSize: "18px", color: "#666", textAlign: "center", padding: "50px 0" }}>Your cart is empty!</p>
            ) : (
              <>
                <div style={{ marginBottom: "30px" }}>
                  {cart.map((book, index) => (
                    <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#f9f9f9", padding: "20px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #e0e0e0" }}>
                      <div style={{ display: "flex", gap: "20px", alignItems: "center", flex: 1 }}>
                        <img src={book.cover} alt={book.title} style={{ width: "50px", height: "90px", objectFit: "cover", borderRadius: "5px" }} />
                        <div>
                          <p style={{ fontSize: "16px", fontWeight: "bold", margin: "0 0 5px 0" }}>{book.title}</p>
                          <p style={{ fontSize: "13px", color: "#666", margin: "0 0 8px 0" }}>by {book.author}</p>
                          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#007bff", margin: 0 }}>₹{book.price}</p>
                        </div>
                      </div>
                      <button onClick={() => handleRemoveFromCart(index)} style={{ padding: "8px 16px", backgroundColor: "#ff4444", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "14px", fontWeight: "bold" }}>Remove</button>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: "2px solid #ddd", paddingTop: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>
                    <span>Total:</span>
                    <span style={{ color: "#007bff" }}>₹{getTotalPrice()}</span>
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <button onClick={() => setShowCart(false)} style={{ flex: 1, padding: "12px", backgroundColor: "#666", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>Continue Shopping</button>
                    <button onClick={handleCheckout} style={{ flex: 1, padding: "12px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>Checkout</button>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            {/* WELCOME SECTION */}
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <h2 style={{ fontSize: "40px", fontWeight: "bold", margin: "0 0 10px 0" }}>👋 Welcome back, {user.name}!</h2>
              <p style={{ fontSize: "18px", color: "#666", margin: 0 }}>Here are some amazing books you might love 📚</p>
            </div>

            {/* BOOKS GRID */}0
            <div style={{width:"70vw",margin:"auto"}}>
              <h3 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "30px" }}>🌟 Top Sellers</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "25px" }}>
                {books.map((book) => (
                  <div key={book.id} style={{ backgroundColor: "white", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", transition: "all 0.3s ease", cursor: "pointer" }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)"} onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)"}>
                    <img src={book.cover} alt={book.title} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                    <div style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "200px" }}>
                      <div>
                        <h4 style={{ fontSize: "16px", fontWeight: "bold", margin: "0 0 8px 0", maxHeight: "48px", overflow: "hidden" }}>{book.title}</h4>
                        <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>by {book.author}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: "22px", fontWeight: "bold", color: "#007bff", margin: "15px 0" }}>₹{book.price}</p>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <button onClick={() => handleAddToCart(book)} style={{ flex: 1, padding: "10px", backgroundColor: "#555", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "13px", fontWeight: "bold" }}>🛒 Add to Cart</button>
                          <button onClick={() => handleBuyNow(book)} style={{ flex: 1, padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "13px", fontWeight: "bold" }}>💳 Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
     </div>
  );
}
