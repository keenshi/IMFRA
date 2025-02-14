import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const stripePublishableKey =
  "pk_test_51M21TPKPPt2IOFXIEyxqgAZuMeoImvJZtHkL8GNjQ8s4R81JQHYFsa8AdrunWVDq8VCJ69Gorwz1N23Vza1gvJCY004saVEV1L";
const stripePromise = loadStripe(stripePublishableKey);

export const PaymentSelectionPage = () => {
  const [amount, setAmount] = useState("");

  const onAmountInputChange = (event) => {
    setAmount(event.target.value);
  };

  const handlePayment = async () => {
    const stripe = await stripePromise;
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const sessionUrl = `https://donate.stripe.com/test_9AQ02Bdnhbk7epacMM?prefilled_price=${amount}00`;
    window.location.href = sessionUrl;
  };

  return (
    <div className="container">
      <h1>Select payment amoutn</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control
          aria-label="Amount (to the nearest euro)"
          type="number"
          onInput={onAmountInputChange}
        />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      <Button variant="primary">Donate {amount} €</Button>
    </div>
  );
};
