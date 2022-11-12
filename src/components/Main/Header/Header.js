import React from "react";
import logo from "../../../images/logo.svg";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import icon from "../../../images/icon.svg";
import burger from "../../../images/burger.svg";

function Header({ loggedIn, onBurgerMenuClick }) {
  return (
    <header className={`header  ${loggedIn && 'logged'}`}>
      <Link to="/" className="header__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <div className={`header__buttons_not-logged ${loggedIn && 'hidden'}`}>
        <Link to="/signup" className="header__button_not-logged_register">
          Регистрация
        </Link>
        <Link to="/signin" className="header__button_not-logged_login">Войти</Link>
      </div>
      <div className={`header__buttons_logged ${!loggedIn && 'hidden'}`}>
        <div className="header__buttons_films-buttons">
          <NavLink className="header__profile-button" activeClassName="acitve" to="/movies">
            Фильмы
          </NavLink>
          <NavLink className="header__profile-button" activeClassName="acitve" to="/saved-movies">
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link className="header__profile-button_profile" to="/profile">
          <img src={icon} alt="Иконка" /> Аккаунт
        </Link>
      </div>
      <button className="header__profile-burger" onClick={onBurgerMenuClick}>
        <img src={burger} alt="Меню" />
      </button>
    </header>
  );
}

export default Header;
