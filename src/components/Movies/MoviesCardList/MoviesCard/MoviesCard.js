import React from "react";
import "./MoviesCard.css";
import filmFoto from "../../../../images/film.svg";

function MoviesCard({ btn }) {
  return (
    <div className="card">
      <div className="card-text">
        <p className="card-text__name">В погоне за Бенкси</p>
        <p className="card-text__duration">27 минут</p>
      </div>
      <img src={filmFoto} alt="Постер фильма" className="card__avatar" />
      <button className="card__button">{btn}</button>
    </div>
  );
}

export default MoviesCard;
