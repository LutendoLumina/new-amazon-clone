import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ title, image, linkText, id }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate( `/category/${id}`);
  };

  return (
    <div className="category_card" onClick={handleCardClick}>
      <h2 className="card_title">{title}</h2>
      <div className="card_image">
        <img src={image} alt={title} />
      </div>
      <p className="card_link">{linkText}</p>
    </div>
  );
};

export default CategoryCard;
