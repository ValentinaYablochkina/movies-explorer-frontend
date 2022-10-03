import React from "react";
import icon from "../../images/icon.svg";
import { Link } from "react-router-dom";
import burger from "../../images/burger.svg";
import "./Navigation.css";

function Navigation() {
  return (
    <div>
      <div className="profile__header-buttons">
        <Link className="profile__header-button" to="/movies">
          <button
            className="profile__header profile__header-button_films"
            type="button"
          >
            Фильмы
          </button>
        </Link>
        <Link className="profile__header-button" to="/saved-movies">
          <button
            className="profile__header profile__header-button_saved-films"
            type="button"
          >
            Сохранённые фильмы
          </button>
        </Link>
        <Link className="profile__header-button" to="/profile">
          <button
            className="profile__header profile__header-button_account"
            type="button"
          >
            <img src={icon} alt="Иконка" /> Аккаунт
          </button>
        </Link>
      </div>
      <div className="profile__header-burger">
        <img src={burger} alt="Меню" />
      </div>
    </div>
  );
}
export default Navigation;
