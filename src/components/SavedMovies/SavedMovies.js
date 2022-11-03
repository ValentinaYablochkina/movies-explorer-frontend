import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import Header from "../Main/Header/Header";
import Footer from "../Main/Footer/Footer";

function SavedMovies({
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

export default SavedMovies;
