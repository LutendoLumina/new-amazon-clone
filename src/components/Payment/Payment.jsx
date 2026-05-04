import React from "react";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../context/reducer";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally trigger the order placement
    // For the assignment: Clear the basket and go to 'Orders'
    dispatch({ type: "EMPTY_BASKET" });
    navigate("/orders", { replace: true });
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout ({basket?.length} items)</h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email || "Lutendo Lumina"}</p>
            <p>6646 Letlalo Street</p>
            <p>Soshanguve, Gauteng</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {/* Map through basket items here */}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <div className="payment__priceContainer">
                <h3>Order Total: ZAR {getBasketTotal(basket)}</h3>
                <button className="payment__button">Buy Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
