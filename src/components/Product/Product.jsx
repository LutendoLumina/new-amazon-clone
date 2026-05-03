import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";
import "./Product.css";

const Product = () => {
  const { categoryId } = useParams();

  // Filter products based on the URL parameter
  const filteredProducts = products.filter(
    (item) => item.category === categoryId,
  );

  return (
    <div className="product">
      <div className="product_banner">
        <h1>`Results for "{categoryId.replace('-', ' ')}"`</h1>
        <p>Check each product page for other buying options.</p>
      </div>

      <div className="product_grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
