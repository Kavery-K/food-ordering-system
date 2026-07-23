import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#2E7D32" }}>🍴 Kavery Food</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
        <Link to="/food" style={{ textDecoration: "none" }}>Food</Link>
        <Link to="/snacks" style={{ textDecoration: "none" }}>Snacks</Link>
        <Link to="/juice" style={{ textDecoration: "none" }}>Juices</Link>
        <Link to="/desserts" style={{ textDecoration: "none" }}>Desserts</Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>🛒 Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;