import React from "react";
import "./ProductCard.css";
import { useShop } from "../../hooks/useShop";

const ProductCard = ({ id, title, image, price, rating }) => {
  const { addToBasket } = useShop();

  return (
    <div className="product_card">
      <img src={image} alt={title} />
      <div className="product_info">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <strong>
            {new Intl.NumberFormat("en-ZA", {
              style: "currency",
              currency: "ZAR",
            }).format(price)}
          </strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
      </div>

      <button onClick={() => addToBasket({ id, title, image, price, rating })}>
        Add to basket
      </button>
    </div>
  );
};

export default ProductCard;
