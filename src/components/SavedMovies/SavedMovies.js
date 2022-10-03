import React from "react";
import Header from "../Profile/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Main/Footer/Footer";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <div>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default SavedMovies;
