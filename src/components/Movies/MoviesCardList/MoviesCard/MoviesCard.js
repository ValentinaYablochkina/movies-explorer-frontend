import React from "react";
import "./MoviesCard.css";

function MoviesCard({ movie, savedMovies, onSave, onUnsave }) {
  const isSaved = savedMovies.some(
    (savedMovie) => +savedMovie.movieId === (movie.id || +movie.movieId)
  );

  function handleSaveMovie(e) {
    e.stopPropagation();

    if (isSaved) {
      return onUnsave(
        savedMovies.find(
          (savedMovie) => +savedMovie.movieId === (movie.id || +movie.movieId)
        )._id
      );
    }
    return onSave(movie);
  }

  function handleClick(e) {
    if (movie.trailerLink) {
      window.location.href = movie.trailerLink;
    } else {
      alert("У данного фильма отсутствует трейлер.");
    }
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-text">
        <p className="card-text__name">{movie.nameRU}</p>
        <p className="card-text__duration">{movie.duration} минут</p>
      </div>
      <img
        src={
          movie.image.url
            ? `https://api.nomoreparties.co${movie.image.url}`
            : movie.image
        }
        alt={movie.nameRU}
        className="card__image"
      />
      <button
        className={`card__button ${isSaved ? "card__button_active" : ""}`}
        type="button"
        onClick={handleSaveMovie}
      >
        Сохранить
      </button>
    </div>
  );
}

export default MoviesCard;
