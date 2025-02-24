import "bootstrap/dist/css/bootstrap.min.css";
import DonateBanner from "../Donate.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../Styles/style.css";
import Form from "react-bootstrap/Form";
import { loadStripe } from "@stripe/stripe-js";

const stripePublishableKey =
  "pk_live_51M21TPKPPt2IOFXI1b4X1KKVbsqWWrC15gHESAnDhBF3w6V6ZtHlEVMDhxsDnqhbJPakdJcNiT6wPKJFiq3WzpoT00LS19yite";
const studentLink = "https://buy.stripe.com/3cs9Bi1iDcoc5B69AG";
const professionalLink = "https://buy.stripe.com/8wM8xe1iD9c08Ni6os";
const membershipPlusLink = "https://buy.stripe.com/dR67taaTdcoc4x28wB";
const customLink = "";

function Donate() {
  const navigate = useNavigate();

  const [selectedPlan, setSelectedPlan] = useState("");
  const [paymentURL, setpaymentURL] = useState(professionalLink);

  const handlePayment = async () => {
    const sessionUrl = `https://donate.stripe.com/test_9AQ02Bdnhbk7epacMM`;
    window.location.href = paymentURL;
  };

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

      <div className="donate-container shadow">
        <h2 className="donate-header">Support Our Cause</h2>
        <p
          style={{ fontSize: "16px", lineHeight: "1.8", textAlign: "justify" }}
        >
          Your donation helps us continue our mission.
        </p>
        <div className="doante-options-container">
          <Form>
            <Form.Check
              className="margin-bottom-normal"
              label="Support as a student member and contribute to our initiatives at a discounted rate. (5 €)"
              name="group1"
              type="radio"
              id="student-radio"
            />
            <Form.Check
              defaultChecked
              className="margin-bottom-normal"
              label="Join as a professional member to help sustain and expand our mission. (15 €)"
              name="group1"
              type="radio"
              id="professional-radio"
            />
            <Form.Check
              label="Custom donation amount to contribute as much as you wish."
              name="group1"
              type="radio"
              id="customeAmount-radio"
            />
          </Form>
        </div>
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
              // navigate("/payment");
              handlePayment();
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
