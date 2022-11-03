import React from "react";
import "./SearchForm.css";
import find from "../../../images/find.svg";

function SearchForm() {
  return (
    <section>
      <form className="searchForm">
        <input className="searchForm__input" placeholder="Фильм" required />
        <button className="searchForm__find" type="submit"><img src={find} alt="Лупа"/></button>
      </form>
      <div className="seachForm__switch">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider "></span>
        </label>
        <p className="searchForm__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
