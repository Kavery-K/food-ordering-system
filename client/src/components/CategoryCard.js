import { Link } from "react-router-dom";

function CategoryCard({ title, emoji, link }) {
  return (
    <div
      style={{
        width: "220px",
        padding: "20px",
        background: "#fff",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
        transition: "0.3s",
      }}
    >
      <h1>{emoji}</h1>

      <h3>{title}</h3>

      <Link
        to={link}
        style={{
          textDecoration: "none",
          color: "#2E7D32",
          fontWeight: "bold",
        }}
      >
        Explore →
      </Link>
    </div>
  );
}

export default CategoryCard;