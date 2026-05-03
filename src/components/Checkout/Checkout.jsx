import React from "react";
import { useShop } from "../../hooks/useShop";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

const Checkout = () => {
  const { cart, itemCount, getCartTotal } = useShop();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Advertisement"
        />

        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {/* List all the products in the basket */}
          {cart?.map((item, index) => (
            <CheckoutProduct
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

      <div className="checkout_right">
        <div className="subtotal">
          <p>
            Subtotal ({itemCount} items):{" "}
            <strong>R{getCartTotal().toLocaleString()}</strong>
          </p>
          <small className="subtotal_gift">
            <input type="checkbox" /> This order contains a gift
          </small>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
