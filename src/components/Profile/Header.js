import React from "react";
import logo from "../../images/logo.svg";
import "./header.css";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="profile__header">
      <Link to="/"><img className="profile__header-logo" src={logo} alt="Логотип" /></Link>
      <Navigation />
    </header>
  );
}
export default Header;
