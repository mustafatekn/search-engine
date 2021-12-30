import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="navbar-brand" id="navbarLogo">
        <img src={Logo} id="navbarLogoImage" alt="logo" />
      </Link>
      <SearchForm/>
    </nav>
  );
}
