import React from "react";
import logo from "../../../images/logo.svg";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <div>
        <Link to="/signup">
          <button className="header__button_register" type="button">
            Регистрация
          </button>
        </Link>
        <Link to="/signin">
          <button className="header__button_login" type="button">
            Войти
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
