import React from 'react';
import { useStateValue } from "../../context/StateProvider";
import CartProduct from "../../components/Cart/CartProduct"; 
import "./Orders.css";

function Orders() {
    const [{ orders, user }] = useStateValue();

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__container">
                {orders && orders.length > 0 ? (
                    <>
                        <h2>Thank you for your purchase, {user?.email || "Lutendo"}!</h2>
                        <p>Your orders have been placed and are being processed for delivery.</p>
                        
                        {orders.map((order, orderIndex) => (
                            <div className="orders__order" key={orderIndex}>
                                <p className="order__id">
                                    <small>Order ID: {order.id}</small>
                                    <small style={{ marginLeft: '20px' }}>Date: {order.date}</small>
                                </p>

                                {order.items?.map((item, itemIndex) => (
                                    <CartProduct
                                        key={itemIndex}
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                        quantity={item.quantity || 1}
                                        hideButton
                                    />
                                ))}

                                <div className="order__total">
                                    <p><strong>Order Total: ZAR {order.total.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</strong></p>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <div className="orders__empty">
                        <h2>No Orders Yet</h2>
                        <p>You haven't placed any orders. Start shopping!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Orders;