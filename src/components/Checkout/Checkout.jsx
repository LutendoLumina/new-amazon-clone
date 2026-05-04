import React, { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../context/reducer";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  // Combined state for everything in the form
  const [paymentData, setPaymentData] = useState({
    fullName: "",
    email: "",
    address: "",
    cardNumber: "4242 4242 4242 4242", // Default "fake" Stripe card
    expiry: "12/26",
    cvc: "123",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPaymentData({ ...paymentData, [id]: value });
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    // HCI: Provide feedback that the order is processing
    alert("Processing Order for " + paymentData.fullName);

    dispatch({ type: "EMPTY_BASKET" });
    navigate("/orders");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form-section">
        <h2>Shipping & Payment</h2>
        <form id="checkout-form" onSubmit={handlePurchase}>
          <div className="input-group">
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              required
              value={paymentData.fullName}
              onChange={handleInputChange}
            />
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
              value={paymentData.email}
              onChange={handleInputChange}
            />
          </div>

          <input
            type="text"
            id="address"
            placeholder="Shipping Address"
            required
            value={paymentData.address}
            onChange={handleInputChange}
          />

          <div id="stripe-payment-area">
            <h3>Card Details (Mock)</h3>
            <div className="stripe-input-box">
              <input
                type="text"
                id="cardNumber"
                placeholder="Card Number"
                value={paymentData.cardNumber}
                onChange={handleInputChange}
              />
              <div className="input-group">
                <input
                  type="text"
                  id="expiry"
                  placeholder="MM/YY"
                  value={paymentData.expiry}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="cvc"
                  placeholder="CVC"
                  value={paymentData.cvc}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            id="submit-button"
            className="checkout-submit-btn"
          >
            COMPLETE PURCHASE
          </button>
        </form>
      </div>

      <aside className="checkout-summary">
        <h3>ORDER SUMMARY</h3>
        <div id="checkout-items-list">
          {basket.map((item, index) => (
            <div className="summary-item" key={index}>
              <div className="summary-item-details">
                <p className="summary-item-title">
                  {item.title} <strong>x1</strong>
                </p>
                <p className="summary-item-price">ZAR {item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="checkout-totals">
          <div className="total-row">
            <span>Total</span>
            <span id="checkout-grand-total">
              ZAR{" "}
              {getBasketTotal(basket).toLocaleString("en-ZA", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Checkout;
