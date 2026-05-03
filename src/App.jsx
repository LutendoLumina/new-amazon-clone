import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";
import Product from "./components/Product/Product";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
