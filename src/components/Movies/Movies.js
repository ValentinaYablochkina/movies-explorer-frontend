import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import "./movies.css";
import Preloader from "../Preloader/Preloader"
import Header from "../Main/Header/Header";
import Footer from "../Main/Footer/Footer";
import { LOADING_STATUS } from "./../../constants/MoviesConstants";

function Movies({
  loggedIn,
  movies,
  savedMovies,
  isShorts,
  onBurgerMenuClick,
  onSeacrhedName,
  onToggleIsShorts,
  onSave,
  onUnsave,
  moviesIsLoaded,
}) {
  return (
    <div>
      <Header loggedIn={loggedIn} onBurgerMenuClick={onBurgerMenuClick} />
      <SearchForm
        onSeacrhedName={onSeacrhedName}
        isShorts={isShorts}
        onToggleIsShorts={onToggleIsShorts}
      />
      {moviesIsLoaded === LOADING_STATUS.SUCCESSFULLY ? (
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          onSave={onSave}
          onUnsave={onUnsave}
        />
      ) : moviesIsLoaded === LOADING_STATUS.NOT_FOUND ? (
        <h1 className="movies__notification">Ничего не найдено</h1>
      ) : moviesIsLoaded === LOADING_STATUS.ERROR ? (
        <h1 className="movies__notification">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </h1>
      ) : (
        moviesIsLoaded === LOADING_STATUS.LOADING && <Preloader />
      )}
      <Footer />
    </div>
  );
}

export default Movies;
