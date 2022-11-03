import React from "react";
import { Link } from "react-router-dom";
import icon from "../../../images/icon.svg";
import closeIcon from "../../../images/closeIcon.svg";
import "./BurgerMenu.css";

function BurgerMenu() {
  return (
    <div>
      <div className="burgerMenu">
        <button className="burgerMenu__close">
          <img src={closeIcon} alt="Закрыть" />
        </button>
        <div className="burgerMenu-buttons">
          <Link className="burgerMenu-button" to="/movies">
            <button className="burgerMenu-button__main" type="button">
              Главная
            </button>
          </Link>
          <Link className="burgerMenu-button" to="/movies">
            <button className="burgerMenu-button__films" type="button">
              Фильмы
            </button>
          </Link>
          <Link className="burgerMenu-button" to="/saved-movies">
            <button className="burgerMenu-button__saved-films" type="button">
              Сохранённые фильмы
            </button>
          </Link>
        </div>
        <div className="burgerMenu-button__account">
          <Link className="burgerMenu-button" to="/profile">
            <button className="burgerMenu-button__account-btn" type="button">
              <img src={icon} alt="Иконка" /> Аккаунт
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
