import React from "react";
import Header from "../Profile/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Main/Footer/Footer";
import "./movies.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Preloader from './Preloader';

function Movies() {
  return (
    <div>
      <Header />
      <SearchForm />
      <Preloader />
      <MoviesCardList />
      <section className="movies__else">
        <button className="movies__else-button">Ещё</button>
      </section>
      <Footer />
      <BurgerMenu />
    </div>
  );
}

export default Movies;
