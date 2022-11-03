import React from "react";
import MoviesCard from "./MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import addedBtn from "../../../images/addedBtn.svg";

function MoviesCardList() {
  return (
    <div>
      <section className="movies">
        <MoviesCard btn={<img src={addedBtn} alt="Кнопка" />} />
        <MoviesCard btn={<img src={addedBtn} alt="Кнопка" />} />
        <MoviesCard btn={"Сохранить"} />
        <MoviesCard btn={"Сохранить"} />
        <MoviesCard btn={"Сохранить"} />
        <MoviesCard btn={<img src={addedBtn} alt="Кнопка" />} />
        <MoviesCard btn={<img src={addedBtn} alt="Кнопка" />} />
        <MoviesCard btn={"Сохранить"} />
        <MoviesCard btn={"Сохранить"} />
        <MoviesCard btn={"Сохранить"} />
        <MoviesCard btn={<img src={addedBtn} alt="Кнопка" />} />
        <MoviesCard btn={"Сохранить"} />
      </section>
    </div>
  );
}

export default MoviesCardList;
