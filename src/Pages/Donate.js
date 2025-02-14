import "bootstrap/dist/css/bootstrap.min.css";
import DonateBanner from "../Donate.png";
import React from "react";
import { useNavigate } from "react-router-dom";

function Donate() {
  const navigate = useNavigate();

  return (
    <div
      className="mt-5 mb-5 container"
      style={{
        fontFamily: "Jost, sans-serif",
        maxWidth: "1300px",
        justifyContent: "center",
      }}
    >
      {/* Donation Banner */}
      <div
        className="shadow"
        style={{
          overflow: "hidden",
          borderRadius: "60px",
          marginBottom: "30px",
          height: "400px",
        }}
      >
        <img
          src={DonateBanner}
          alt="Donate Banner"
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
        />
      </div>

      {/* Content Section */}
      <div
        className="shadow"
        style={{
          borderRadius: "30px",
          backgroundColor: "#ffffff",
          padding: "40px",
          marginTop: "30px",
        }}
      >
        <h2
          style={{
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Why Donate?
        </h2>
        <p
          style={{ fontSize: "16px", lineHeight: "1.8", textAlign: "justify" }}
        >
          Your donation helps us build a stronger, more connected community. By
          contributing, you are supporting our efforts to provide educational
          programs, cultural activities, and resources for those in need.
          Together, we can create opportunities and foster a sense of belonging
          for everyone.
        </p>
      </div>

      <div
        className="shadow"
        style={{
          borderRadius: "30px",
          backgroundColor: "#ffffff",
          padding: "40px",
          marginTop: "30px",
        }}
      >
        <h2
          style={{
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          How to Donate?
        </h2>
        <p
          style={{ fontSize: "16px", lineHeight: "1.8", textAlign: "justify" }}
        >
          Donating is simple and secure. Click the "Donate Now" button below to
          contribute online. Alternatively, you can visit our office or contact
          us directly to arrange your donation. Every contribution, big or
          small, makes a meaningful impact.
        </p>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
            onClick={() => {
              navigate("/payment");
            }}
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Donate;
