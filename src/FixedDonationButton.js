import { Link } from "react-router-dom";

function FixedDonateButton() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        width: "60px",
        height: "60px",
        backgroundColor: "#28a745",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
      }}
    >
      <Link className="nav-link nav-text" to="Donate">
        <i
          className="bi bi-cash-coin"
          style={{
            color: "#fff",
            marginTop: "8px",
            fontSize: "24px",
          }}
        ></i>
      </Link>
    </div>
  );
}

export default FixedDonateButton;
