import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, image, price, rating }) => {
  return (
    <div className="product_banner">
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
        <button>Add to basket</button>
      </div>
    </div>
  );
};

export default ProductCard;
