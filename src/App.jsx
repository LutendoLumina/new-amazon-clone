import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment/Payment";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
