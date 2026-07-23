import { useNavigate } from "react-router-dom";

function OrderSuccess() {

  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#f8fff8",
      }}
    >
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "#4CAF50",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
        }}
      >
        ✓
      </div>

      <h1 style={{ color: "#2E7D32", marginTop: "20px" }}>
        Order Placed Successfully!
      </h1>

      <p>Your food is being prepared 🍛</p>

      <p>Estimated Delivery: 30 - 40 Minutes 🚚</p>

      <button
        onClick={() => navigate("/orders")}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#2E7D32",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Go to My Orders
      </button>
    </div>
  );
}

export default OrderSuccess;