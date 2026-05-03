import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";
import "./Product.css";
import { useStateValue } from "../../context/StateProvider";

const Product = () => {
  const { categoryId } = useParams();
  const [{ searchTerm }] = useStateValue();

  // Filter products based on both category and search item
  const filteredProducts = products.filter((item) => {
    const matchesCategory = item.category === categoryId;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    // Clear search when the category changes
    dispatch({
      type: "SET_SEARCH_TERM",
      term: "",
    });
  }, [categoryId]); // Runs every time the URL category changes

  return (
    <div className="product">
      <div className="product_banner">
        <h1>Results for "{categoryId.replace("-", " ")}"</h1>
        {searchTerm && (
          <p>
            Filtering by: "<strong>{searchTerm}</strong>"
          </p>
        )}
      </div>

      <div className="product_grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))
        ) : (
          <p className="no_results">
            No products matching "{searchTerm}" found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
