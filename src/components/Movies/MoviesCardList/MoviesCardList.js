import React from "react";
import MoviesCard from "./MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { BREAKPOINTS } from "../../../constants/MoviesConstants";
import { useLocation } from "react-router-dom";

function MoviesCardList({ movies, savedMovies, onSave, onUnsave }) {
  const location = useLocation();
  const isMoviesPage = location.pathname === "/movies";
  const [initialAmount, setInitialAmount] = React.useState(null);
  const [loadCardsCount, setLoadCardsCount] = React.useState(null);
  const [numberOfVisibleMovies, setNumberOfVisibleMovies] =
    React.useState(null);
  const [maxVisibleCards, setMaxVisibleCards] = React.useState(null);
  const [maxCardsInRow, setMaxCardsInRow] = React.useState(null);

  React.useEffect(() => {
    if (isMoviesPage) {
      if (numberOfVisibleMovies > maxVisibleCards) {
        setNumberOfVisibleMovies(maxVisibleCards);
      }
    } else {
      setNumberOfVisibleMovies(-1);
    }
  }, [maxVisibleCards]);

  React.useEffect(() => {
    if (isMoviesPage) {
      setNumberOfVisibleMovies(initialAmount);
    }
  }, [initialAmount]);

  React.useEffect(() => {
    calculateCardsList();
    window.addEventListener("resize", calculateCardsList);

    return () => {
      window.removeEventListener("resize", calculateCardsList);
    };
  }, []);

  function handleClickOnButton() {
    setNumberOfVisibleMovies(
      numberOfVisibleMovies + loadCardsCount > maxVisibleCards
        ? numberOfVisibleMovies + (maxVisibleCards - numberOfVisibleMovies)
        : numberOfVisibleMovies + loadCardsCount
    );
  }

  const calculateCardsList = React.useCallback(() => {
    setTimeout(() => {
      for (const deviceName in BREAKPOINTS) {
        if (Object.hasOwnProperty.call(BREAKPOINTS, deviceName)) {
          const device = BREAKPOINTS[deviceName];
          const correctMinWidth = device.minWidth < window.innerWidth;
          const correctMaxWidth = device.maxWidth > window.innerWidth;

          if (correctMinWidth && correctMaxWidth) {
            if (isMoviesPage) {
              setInitialAmount(device.initialAmount);
              setLoadCardsCount(device.loadCardsCount);
              setMaxVisibleCards(device.maxCards);
            }
            setMaxCardsInRow(device.cardsInRow);
            break;
          }
        }
      }
    }, 300);
  });

  return (
    <>
      <section
        className="movies"
        style={{
          gridTemplateColumns: `repeat(${maxCardsInRow}, minmax(200px, 1fr)`,
        }}
      >
        {maxCardsInRow &&
          movies
            .slice(
              0,
              numberOfVisibleMovies === -1 ? undefined : numberOfVisibleMovies
            )
            .map((movie) => (
              <MoviesCard
                key={movie.id || movie._id}
                movie={movie}
                savedMovies={savedMovies}
                onSave={onSave}
                onUnsave={onUnsave}
              />
            ))}
      </section>
      {maxCardsInRow && isMoviesPage && movies.length > numberOfVisibleMovies && (
        <button className="movies__else-button" onClick={handleClickOnButton}>
          Ещё
        </button>
      )}
    </>
  );
}

export default MoviesCardList;
