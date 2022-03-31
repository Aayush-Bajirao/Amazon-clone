import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";


function Header() {
  return (
    <nav className="header">
      <Link to="/login">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="header_search">
        <input type="Text" className="header_searchInput" />
        <button  className="search">
        <FaSearch size="1.2rem" color="black" />  
        </button>      
      </div>

      <div className="headerNav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& orders</span>
          </div>
        </Link>

        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">
              <FaShoppingCart size="1.5rem" />
              <span>0</span>
            </div>
        </Link>
        
      </div>

    </nav>
  );
}

export default Header;
