import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <div className="navbar-section">
      <div className="navSection">
        {/* Logo / Title */}
        <Link to="/" className="custom-link">
          <div className="title">
            <h2>E-Mart</h2>
          </div>
        </Link>

        {/* Search Bar */}
        <form className="search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {/* Sign In / Sign Up */}
        <div className="user">
          <Link to="/signin" className="custom-link user-detail"
            style={{ color: "white", textDecoration: "none" }}>
            Sign In
          </Link>
          <span> / </span>
          <Link to="/signup" className="custom-link user-detail"
            style={{ color: "white", textDecoration: "none" }}>
            Sign Up
          </Link>
        </div>

        {/* Cart */}
        <Link to="/cart">
          <div className="cart">
            Cart <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>

      {/* Submenu */}
      <div className="subMenu">
        <ul>
          <Link to="/mobiles" className="custom-link"><li>Mobiles</li></Link>
          <Link to="/computers" className="custom-link"><li>Computers</li></Link>
          <Link to="/watch" className="custom-link"><li>Watches</li></Link>
          <Link to="/men" className="custom-link"><li>Mens Wear</li></Link>
          <Link to="/woman" className="custom-link"><li>Womens Wear</li></Link>
          <Link to="/furniture" className="custom-link"><li>Furniture</li></Link>
          <Link to="/kitchen" className="custom-link"><li>Kitchen</li></Link>
          <Link to="/fridge" className="custom-link"><li>Fridge</li></Link>
          <Link to="/book" className="custom-link"><li>Books</li></Link>
          <Link to="/speaker" className="custom-link"><li>Speakers</li></Link>
          <Link to="/tv" className="custom-link"><li>TV's</li></Link>
          <Link to="/ac" className="custom-link"><li>AC</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
