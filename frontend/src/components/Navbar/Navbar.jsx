import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ShoppingCart } from "phosphor-react";

function Navbar() {
  return (
    <div>
      <div className="header">
        <div
          style={{
            margin: 0,
            fontSize: "2rem",
            padding: ".5rem",
            color: "white",
          }}
          className="links"
        >
          <Link to="/">Ecommerce Application</Link>
          <Link to="/cart" className="cart">
            <ShoppingCart size={32}/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
