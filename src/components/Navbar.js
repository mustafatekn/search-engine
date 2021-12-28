import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="navbar-brand" id="navbarLogo">
        <img src={Logo} id="navbarLogoImage" alt="logo" />
      </Link>
      <div id="navbarSearchFormWrapper">
        <form id="navbarSearchForm">
          <input type="text" className="searchInput" placeholder="Tu"/>
          <button type="submit" className="btn" id="navbarSearchButton">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
