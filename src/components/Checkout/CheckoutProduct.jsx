import React from "react";
import { useShop } from "../../hooks/useShop";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const { removeFromCart } = useShop();

  return (
    <div className="checkout_product">
      <img src={image} alt={title} className="checkout_product_image" />

      <div className="checkout_product_info">
        <div className="checkout_product_header">
          <p className="checkout_product_title">{title}</p>
          <p className="checkout_product_price">
            <strong>
              {new Intl.NumberFormat("en-ZA", {
                style: "currency",
                currency: "ZAR",
              }).format(price)}
            </strong>
          </p>
        </div>

        <p className="checkout_product_stock">In Stock</p>

        <div className="checkout_product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>

        <div className="checkout_product_actions">
          <button className="action_link" onClick={() => removeFromCart(id)}>Delete</button>
          <span className="separator">|</span>
          <button className="action_link">Save for later</button>
          <span className="separator">|</span>
          <button className="action_link">Compare with similar items</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
