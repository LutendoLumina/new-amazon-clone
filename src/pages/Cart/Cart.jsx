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

          {/* Show empty state if no items */}
          {cart?.length === 0 ? (
            <div className="cart_empty">
              <h3>Your Basket is Empty</h3>
              <p>You have no items in your shopping basket. Start shopping to add items!</p>
              <button 
                className="cart_empty_button"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* List all the products in the basket */}
              {cart?.map((item, index) => (
                <CartProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  quantity={item.quantity || 1}
                />
              ))}
            </>
          )}
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
          <button 
            onClick={() => navigate("/checkout")}
            disabled={cart?.length === 0}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;