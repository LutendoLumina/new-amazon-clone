import React from "react";
import { useShop } from "../../hooks/useShop";
import "./CartProduct.css";

const CartProduct = ({ id, image, title, price, rating }) => {
  const { removeFromBasket } = useShop();

  return (
    <div className="cart_product">
      <img src={image} alt={title} className="cart_product_image" />

      <div className="cart_product_info">
        <div className="cart_product_header">
          <p className="cart_product_title">{title}</p>
          <p className="cart_product_price">
            <strong>
              {new Intl.NumberFormat("en-ZA", {
                style: "currency",
                currency: "ZAR",
              }).format(price)}
            </strong>
          </p>
        </div>
        

        <p className="cart_product_stock">In Stock</p>

        <div className="cart_product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>

        <div className="cart_product_actions">
          <button className="action_link" onClick={() => removeFromBasket(id)}>Delete</button>
          <span className="separator">|</span>
          <button className="action_link">Save for later</button>
          <span className="separator">|</span>
          <button className="action_link">Compare with similar items</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
