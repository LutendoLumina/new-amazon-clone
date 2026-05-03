import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
