import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import "./movies.css";
import Preloader from "./Preloader";
import Header from "../Main/Header/Header";
import Footer from "../Main/Footer/Footer";

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
}) {
  return (
    <div>
      <Header loggedIn={loggedIn} onBurgerMenuClick={onBurgerMenuClick} />
      <SearchForm
        onSeacrhedName={onSeacrhedName}
        isShorts={isShorts}
        onToggleIsShorts={onToggleIsShorts}
      />
      <Preloader />
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        onSave={onSave}
        onUnsave={onUnsave}
      />
      <Footer />
    </div>
  );
}

export default Movies;
