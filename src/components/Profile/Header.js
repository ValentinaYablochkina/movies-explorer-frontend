import React from "react";
import logo from "../../images/logo.svg";
import "./header.css";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="profile__header">
      <img className="profile__header-logo" src={logo} alt="Логотип" />
      <Navigation />
    </header>
  );
}
export default Header;
