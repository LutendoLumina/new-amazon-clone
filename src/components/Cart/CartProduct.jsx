import React from "react";
import { useShop } from "../../hooks/useShop";
import { useStateValue } from "../../context/StateProvider";
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import "./CartProduct.css";

const CartProduct = ({ id, image, title, price, rating, quantity, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();
  const { removeFromBasket, addToBasket } = useShop();

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
              }).format(price * (quantity || 1))}
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

        {!hideButton && (
          <>
            <div className="cart_product_quantityContainer">
              <div className="cart_product_quantityPicker">
                <button onClick={() => removeFromBasket(id)}>
                  <RemoveOutlinedIcon className="cart_product_icon" />
                </button>
                <span>{quantity || 1}</span>
                <button onClick={() => addToBasket({id, title, image, price, rating})}>
                  <AddIcon className="cart_product_icon" />
                </button>
              </div>
            </div>

            <div className="cart_product_actions">
              <button className="action_link" onClick={() => removeFromBasket(id)}>
                Delete
              </button>
              <span className="separator">|</span>
              <button className="action_link">Save for later</button>
              <span className="separator">|</span>
              <button className="action_link">Compare with similar items</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartProduct;