import homeImage from "../../assets/home_image.jpg";
import "./Home.css";
import Products from "../Product/Product";
import { categories } from "../../data/categories.js";
import CategoryCard from "../Category/CategoryCard";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img src={homeImage} alt="Home Image" className="home_image" />

        {/* Category Grid */}
        <div className="home_row">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              title={cat.title}
              image={cat.image}
              linkText={cat.linkText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
