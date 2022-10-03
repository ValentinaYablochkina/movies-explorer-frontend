import React from "react";
import "./SearchForm.css";
import find from "../../../images/find.svg";

function SearchForm() {
  return (
    <div>
      <div className="searchForm">
        <input className="searchForm__input" placeholder="Фильм" />
        <img src={find} alt="Лупа" className="searchForm__find" />
      </div>
      <div className="seachForm__switch">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider "></span>
        </label>
        <p className="searchForm__text">Короткометражки</p>
      </div>
    </div>
  );
}

export default SearchForm;
