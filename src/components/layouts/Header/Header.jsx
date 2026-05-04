import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/amazon-logo.png";
import Flag from "../../../assets/usa-flag.webp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Header.css";
import { useStateValue } from "../../../context/StateProvider";

const Header = () => {
  const [{ basket, searchTerm }, dispatch] = useStateValue();

  const handleSearch = (e) => {
    dispatch({
      type: "SET_SEARCH_TERM",
      term: e.target.value,
    });
  };

  return (
    <div>
      {/* main navigation bar */}
      <nav className="main-nav">
        <Link to="/">
          <img src={Logo} className="logo" alt="Amazon Logo" />
        </Link>

        <div className="country">
          <LocationOnOutlinedIcon />
          <div className="country_d">
            <span>Deliver to</span>
          </div>
          <p className="country_name">South Africa</p>
        </div>

        <div className="search">
          <input
            type="text"
            className="search_input"
            placeholder="Search Amazon"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="search_icon">
            <SearchOutlinedIcon />
          </button>
        </div>

        <div className="language">
          <img src={Flag} className="flag" alt="Country Flag" />
          <p>EN</p>
          <ArrowDropDownOutlinedIcon />
        </div>

        <div className="account">
          <p>Hello, sign in</p>
          <div className="sub-account">
            <p>Account & Lists</p>
            <ArrowDropDownOutlinedIcon />
          </div>
        </div>

        <div className="returns">
          <p>Returns</p>
          <strong>& Orders</strong>
        </div>

        <Link to="/cart">
          <div className="cart">
            <AddShoppingCartOutlinedIcon className="cart_icon" />
            {basket?.length > 0 && (
              <span className="cart_count">{basket.length}</span>
            )}
            <p>Cart</p>
          </div>
        </Link>
      </nav>

      {/* sub navigation bar */}
      <nav className="sub-nav">
        <div className="menu">
          <MenuOutlinedIcon />
          <p>All</p>
        </div>

        <p>Today's Deals</p>
        <p>Gift Cards</p>
        <p>Sell</p>
        <p>Registry</p>
        <p>Prime Video</p>
        <p>Customer service</p>
      </nav>
    </div>
  );
};

export default Header;
