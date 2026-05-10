import React from "react";
import "./Footer.css";
import Logo from "../../../assets/amazon-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__backToTop" onClick={scrollToTop}>
        Back to top
      </div>

      <div className="footer__container">
        <div className="footer__column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Let Us Help You</h3>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <img src={Logo} className="footer__logo" alt="Amazon Logo" />
        <div className="footer__bottomControls">
          <div className="footer__controlItem">🌐 English</div>
          <div className="footer__controlItem">R ZAR - South African Rand</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
