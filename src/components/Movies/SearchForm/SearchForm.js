import React from "react";
import "./SearchForm.css";
import find from "../../../images/find.svg";
import { useLocation } from "react-router-dom";

function SearchForm({ onSeacrhedName, isShorts, onToggleIsShorts }) {
  const location = useLocation();
  const isSavedMoviesPage = location.pathname === "/saved-movies";
  const [searchedName, setSearchedName] = React.useState(
    isSavedMoviesPage ? "" : localStorage.getItem("searchedName") || ""
  );

  function handleChangeSearchedName(e) {
    setSearchedName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSeacrhedName(searchedName);
  }

  return (
    <section>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          className="searchForm__input"
          placeholder="Фильм"
          required
          value={searchedName}
          onChange={handleChangeSearchedName}
        />
        <button className="searchForm__find" type="submit">
          <img src={find} alt="Лупа" />
        </button>
      </form>
      <div className="seachForm__switch">
        <label className="switch">
          <input
            type="checkbox"
            checked={isShorts}
            onChange={onToggleIsShorts}
          />
          <span className="slider "></span>
        </label>
        <p className="searchForm__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
