import React from "react";
import { useShop } from "../../hooks/useShop";
import CartProduct from "../../components/Cart/CartProduct"; 
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, itemCount, getCartTotal } = useShop();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart_left">
        <img
          className="cart_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Advertisement"
        />

        <div>
          <h2 className="cart_title">Your Shopping Basket</h2>

          {/* List all the products in the basket */}
          {cart?.map((item, index) => (
            <CartProduct
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="cart_right">
        <div className="subtotal">
          <p>
            Subtotal ({itemCount} items):{" "}
            <strong>R{getCartTotal().toLocaleString()}</strong>
          </p>
          <small className="subtotal_gift">
            <input type="checkbox" /> This order contains a gift
          </small>
          <button onClick={() => navigate("/checkout")}>
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
