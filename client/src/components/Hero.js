import React from "react";

function Hero() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px",
        background: "#f8fff8",
        borderRadius: "20px",
        margin: "20px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: "48px",
            color: "#1B5E20",
            marginBottom: "20px",
          }}
        >
          Welcome to <br /> Kavery Food Ordering
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          Delicious Food Delivered to Your Doorstep
        </p>

        <button
          style={{
            padding: "12px 28px",
            background: "#2E7D32",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            marginRight: "15px",
            cursor: "pointer",
          }}
        >
          Order Now
        </button>

        <button
          style={{
            padding: "12px 28px",
            background: "#fff",
            color: "#2E7D32",
            border: "2px solid #2E7D32",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Explore Menu
        </button>
      </div>

      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          src="/images/hero-food.jpeg"
          alt="Food"
          style={{
            width: "500px",
            maxWidth: "100%",
            borderRadius: "20px",
          }}
        />
      </div>
    </div>
  );
}

export default Hero;