import React from 'react';
import { useStateValue } from "../../context/StateProvider";
import CartProduct from "../../components/Cart/CartProduct"; 
import "./Orders.css";

function Orders() {
    const [{ basket, user }] = useStateValue();

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__container">
                <h2>Thank you for your purchase, {user?.email || "Lutendo"}!</h2>
                <p>Your order has been placed and is being processed for delivery.</p>
                
                <div className="orders__order">
                    <p className="order__id">
                        <small>Order ID: #AMZ-992384-2026</small>
                    </p>

                    {/* This is where the import is used! */}
                    {basket?.map((item, index) => (
                        <CartProduct
                            key={index}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            hideButton // We pass this to hide the 'Remove from basket' button
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Orders;