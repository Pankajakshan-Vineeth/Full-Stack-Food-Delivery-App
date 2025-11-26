import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("menu");

  return (
    <div className="navbar">
      <img src={assets.logo} className="logo" />
      <ul className="navbar-menu">
        <li
          className={selectedMenu === "home" ? "active" : ""}
          onClick={() => setSelectedMenu("home")}
        >
          Home
        </li>
        <li
          className={selectedMenu === "menu" ? "active" : ""}
          onClick={() => setSelectedMenu("menu")}
        >
          Menu
        </li>
        <li
          className={selectedMenu === "mobile-app" ? "active" : ""}
          onClick={() => setSelectedMenu("mobile-app")}
        >
          Mobile App
        </li>
        <li
          className={selectedMenu === "contact-us" ? "active" : ""}
          onClick={() => setSelectedMenu("contact-us")}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
