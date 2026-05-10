import React, { useState } from "react";
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
  
  // Local UI States
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  
  // User Auth States (Usually these would come from your Context/Firebase)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleSearch = (e) => {
    dispatch({
      type: "SET_SEARCH_TERM",
      term: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail.trim()) {
      setIsLoggedIn(true);
      setUserEmail(loginEmail);
      setLoginEmail("");
      setShowLoginForm(false);
      // Close dropdown after successful login
      setIsAccountDropdownOpen(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
    setIsAccountDropdownOpen(false);
    setShowLoginForm(false);
  };

  const toggleDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  return (
    <div className="header_container">
      {/* Backdrop: Closes dropdown when clicking outside */}
      {isAccountDropdownOpen && (
        <div 
          className="dropdown_backdrop" 
          onClick={() => setIsAccountDropdownOpen(false)} 
        />
      )}

      {/* Main Navigation Bar */}
      <nav className="main-nav">
        <Link to="/">
          <img src={Logo} className="logo" alt="Amazon Logo" />
        </Link>

        <div className="country">
          <LocationOnOutlinedIcon />
          <div className="country_d">
            <span>Deliver to</span>
            <p className="country_name">South Africa</p>
          </div>
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

        {/* Account & Lists Section */}
        <div className="account" onClick={toggleDropdown}>
          <div className="account_label">
            <p>{isLoggedIn ? `Hello, ${userEmail.split("@")[0]}` : "Hello, sign in"}</p>
            <div className="sub-account">
              <p>Account & Lists</p>
              <ArrowDropDownOutlinedIcon />
            </div>
          </div>

          {/* Account Dropdown Content */}
          {isAccountDropdownOpen && (
            <div 
              className="account_dropdown" 
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside form
            >
              {!isLoggedIn ? (
                <div className="login_container">
                  {!showLoginForm ? (
                    <>
                      <button className="login_btn" onClick={() => setShowLoginForm(true)}>
                        Sign in
                      </button>
                      <p className="signup_text">
                        New customer? <span onClick={() => setShowLoginForm(true)}>Start here</span>
                      </p>
                    </>
                  ) : (
                    <form onSubmit={handleLogin} className="login_form">
                      <p>Sign-In</p>
                      <input
                        type="email"
                        placeholder="Email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                        autoFocus
                      />
                      <button type="submit" className="login_btn">Continue</button>
                      <button
                        type="button"
                        onClick={() => setShowLoginForm(false)}
                        className="cancel_btn"
                      >
                        Back
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                <div className="user_content">
                  <div className="user_info">
                    <p>Your Account</p>
                    <strong>{userEmail}</strong>
                  </div>
                  <hr />
                  <div className="dropdown_links">
                    <Link to="/orders" onClick={() => setIsAccountDropdownOpen(false)}>
                      Your Orders
                    </Link>
                    <a href="#account">Your Account</a>
                    <a href="#lists">Your Lists</a>
                  </div>
                  <hr />
                  <button className="logout_btn" onClick={handleLogout}>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <Link to="/orders" className="header__link">
          <div className="returns">
            <p>Returns</p>
            <strong>& Orders</strong>
          </div>
        </Link>

        <Link to="/cart">
          <div className="header_cart">
            <AddShoppingCartOutlinedIcon className="cart_icon" />
            {basket?.length > 0 && (
              <span className="cart_count">
                {basket.reduce((total, item) => total + (item.quantity || 1), 0)}
              </span>
            )}
            <p>Cart</p>
          </div>
        </Link>
      </nav>

      {/* Sub Navigation Bar */}
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