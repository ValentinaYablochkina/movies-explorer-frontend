import "./App.css";
import React from "react";
import Main from "../Main/Main";
import Register from "../Register/Register";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as mainApi from "../../utils/MainApi";
import * as moviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "./ProtectedRoute";
import { LOADING_STATUS } from "../../constants/MoviesConstants";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import success from "../../images/success.svg";
import failure from "../../images/Failure.svg";
import { MAX_DURATION_OF_SHORT_FILM } from "./../../constants/MoviesConstants";

function App() {
  const history = useHistory();
  const location = useLocation();

  const [currentUser, setCurrentUser] = React.useState({ isLoaded: false });
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [searchedName, setSearchedName] = React.useState("");
  const [isShorts, setIsShorts] = React.useState(false);
  const [isPopupRegisterSuccessOpen, setIsPopupRegisterSuccessOpen] =
    React.useState(false);
  const [isPopupRegisterFailureOpen, setIsPopupRegisterFailureOpen] =
    React.useState(false);
  const [isPopupAuthorizeSuccessOpen, setIsPopupAuthorizeSuccessOpen] =
    React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [moviesIsLoaded, setMoviesIsLoaded] = React.useState(
    LOADING_STATUS.SUCCESSFULLY
  );

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedMoviesIsLoaded, setSavedMoviesIsLoaded] = React.useState(
    LOADING_STATUS.SUCCESSFULLY
  );

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  // COMPLETE - АУТЕНТИФИКАЦИЯ
  React.useEffect(() => {
    let token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .getUserInfo()
        .then((user) => {
          setCurrentUser((currentUser) => ({
            ...currentUser,
            ...user,
          }));
          setLoggedIn(true);
        })
        .catch((err) => console.log(err))
        .finally(() =>
          setCurrentUser((currentUser) => ({ ...currentUser, isLoaded: true }))
        );
    } else {
      setCurrentUser((currentUser) => ({ ...currentUser, isLoaded: true }));
    }
  }, [loggedIn]);

  // COMPLETE - ПОЛУЧЕНИЕ ФИЛЬМОВ
  React.useEffect(() => {
    if (!searchedName) return;

    setMoviesIsLoaded(LOADING_STATUS.LOADING);

    const movies = JSON.parse(localStorage.getItem("movies"));
    const jwt = localStorage.getItem("jwt");

    if (!movies && jwt && currentUser._id) {
      moviesApi
        .getMovies()
        .then((movies) => {
          localStorage.setItem("movies", JSON.stringify(movies));

          const filteredMovies = filterMovies(movies);
          setMovies(filteredMovies);

          if (filteredMovies.length) {
            setMoviesIsLoaded(LOADING_STATUS.SUCCESSFULLY);
            return;
          }

          setMoviesIsLoaded(LOADING_STATUS.NOT_FOUND);
        })
        .catch((error) => {
          setMoviesIsLoaded(LOADING_STATUS.ERROR);
          console.log(error);
        });
      return;
    }

    if (movies) {
      const filteredMovies = filterMovies(movies);
      setMovies(filteredMovies);
      if (filteredMovies.length > 0) {
        setMoviesIsLoaded(LOADING_STATUS.SUCCESSFULLY);
      } else {
        setMoviesIsLoaded(LOADING_STATUS.NOT_FOUND);
      }
    }
  }, [searchedName, isShorts, currentUser._id]);

  // COMPLETE - ПОЛУЧЕНИЕ СОХРАНЁННЫХ ФИЛЬМОВ
  React.useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
    const jwt = localStorage.getItem("jwt");

    setSavedMoviesIsLoaded(LOADING_STATUS.LOADING);

    if (!savedMovies && jwt && currentUser._id) {
      mainApi
        .getSavedMovies()
        .then((allSavedMovies) => {
          const savedMovies = getMoviesOfCurrentUser(allSavedMovies);
          const filteredSavedMovies = filterMovies(savedMovies);

          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
          setSavedMovies(filteredSavedMovies);

          if (filteredSavedMovies.length) {
            setSavedMoviesIsLoaded(LOADING_STATUS.SUCCESSFULLY);
            return;
          }

          setSavedMoviesIsLoaded(LOADING_STATUS.NOT_FOUND);
        })
        .catch((error) => {
          setSavedMoviesIsLoaded(LOADING_STATUS.ERROR);
          console.log(error);
        });
      return;
    }

    if (savedMovies) {
      const filteredMovies =
        location.pathname === "/saved-movies"
          ? filterMovies(savedMovies)
          : savedMovies;
      setSavedMovies(filteredMovies);
      if (filteredMovies.length > 0) {
        setSavedMoviesIsLoaded(LOADING_STATUS.SUCCESSFULLY);
      } else {
        setSavedMoviesIsLoaded(LOADING_STATUS.NOT_FOUND);
      }
    }
  }, [searchedName, isShorts, currentUser._id]);

  // COMPLETE - ФУНКЦИЯ ФИЛЬТРАЦИИ ФИЛЬМОВ
  function filterMovies(movies) {
    return movies.filter(
      (movie) => isRightName(movie.nameRU) && isRightDuration(movie.duration)
    );
  }

  // COMPLETE - ФУНКЦИЯ ПРОВЕРЯЮЩАЯ ПОДХОДИТ-ЛИ НАЗВАНИЕ ФИЛЬМА
  function isRightName(name) {
    return name.toLowerCase().includes(searchedName.toLowerCase());
  }

  // COMPLETE - ФУНКЦИЯ ПРОВЕРЯЮЩАЯ ПОДХОДИТ-ЛИ ДЛИТЕЛЬНОСТЬ ФИЛЬМА
  function isRightDuration(duration) {
    return !isShorts || duration <= MAX_DURATION_OF_SHORT_FILM;
  }

  // COMPLETE - ФУНКЦИЯ ВОЗРАЩАЮЩАЯ СОХРАНЁННЫЕ ФИЛЬМЫ ТЕКУЩЕГО ПОЛЬЗОВАТЕЛЯ
  function getMoviesOfCurrentUser(savedMovies) {
    return savedMovies.filter(
      (savedMovie) => savedMovie.owner === currentUser._id
    );
  }

  // COMPLETE - ФУНКЦИЯ ПРОВЕРЯЮЩАЯ ТОКЕН ЛОКАЛЬКО. В СЛУЧАЕ ОТСУТСВИЯ - ВЫХОД ИЗ АККАУНТА
  React.useEffect(() => {
    if (!localStorage.getItem("jwt")) handleSignOut();
  }, []);

  // COMPLETE - МЕНЯЯ СТРАНИЦУ - ИЗМЕНЯЕМ СОСТОЯНИЯ ФИЛЬТРОВ
  React.useEffect(() => {
    switch (location.pathname) {
      case "/saved-movies":
        setSearchedName("");
        setIsShorts(false);
        break;
      case "/movies":
        setSearchedName(localStorage.getItem("searchedName") || "");
        setIsShorts(JSON.parse(localStorage.getItem("isShorts")) || false);
        break;
    }
  }, [location.pathname]);

  // COMPLETE - ФУНКЦИЯ ВЫХОДА ИЗ АККАУНТА
  function handleSignOut() {
    setLoggedIn(false);
    setCurrentUser({ isLoaded: true });
    setMovies([]);
    setSavedMovies([]);
    localStorage.clear();
    history.push("/");
  }

  // COMPELETE - ФУНКЦИЯ ОБНОВЛЕНИЯ СОСТОЯНИЙ И ЛОКАЛЬНОГО ХРАНИЛИЩА СТРОКИ ПОИСКА
  function searchMovie(searchedName) {
    if (!searchedName && location.pathname === "/movies") {
      return alert("Нужно ввести ключевое слово");
    }

    setSearchedName(searchedName);

    if (location.pathname === "/movies") {
      localStorage.setItem("searchedName", searchedName);
    }
  }

  function toggleIsShort() {
    setIsShorts(!isShorts);
    localStorage.setItem("isShorts", !isShorts);
  }

  // COMPLETE - ФУНКЦИЯ СОХРАНЕНИЯ ФИЛЬМА
  function saveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((savedMovie) => {
        setSavedMovies((savedMovies) => {
          const filteredMovies = [...savedMovies, savedMovie];
          localStorage.setItem("savedMovies", JSON.stringify(filteredMovies));
          alert("Фильм успешно сохранён!");
          return filteredMovies;
        });
      })
      .catch(() => alert("Не удалось получить сохранённые фильмы"));
  }

  // COMPLETE - ФУНКЦИЯ УДАЛЕНИЯ ФИЛЬМА ИЗ СПИСКА СОХРАНЁННЫХ
  function unsaveMovie(id) {
    mainApi
      .deleteMovie(id)
      .then((deletedMovie) => {
        setSavedMovies((savedMovies) => {
          const filteredMovies = savedMovies.filter(
            (movie) => movie._id !== deletedMovie._id
          );
          localStorage.setItem("savedMovies", JSON.stringify(filteredMovies));
          alert("Фильм успешно удалён из сохранённых");
          return filteredMovies;
        });
      })
      .catch(() => alert("Не удалось удалить данный фильм"));
  }

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  // COMPLETE - ФУНКЦИЯ ОБНОВЛЕНИЯ ПРОФИЛЯ
  function handleUpdateUser({ name, email }) {
    const token = localStorage.getItem("jwt");
    if (!token) return handleSignOut();
    mainApi
      .changeProfileData(name, email)
      .then((user) => {
        setCurrentUser((currentUser) => ({ ...currentUser, ...user }));
        alert("Данные успешно обновлены!");
      })
      .catch((err) => alert("Произошла ошибка во время обновления данных"))
      .finally(() =>
        setCurrentUser((currentUser) => ({ ...currentUser, isLoaded: true }))
      );
  }

  // COMPLETE - ФУНКЦИЯ ВЫХОДА
  function handleRegister({ name, email, password }) {
    mainApi
      .register(name, email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        handlePopupRegisterSuccessOpen();
        history.push("/movies");
      })
      .catch((err) => {
        switch (err) {
          case 400:
            alert("Одно из полей заполнено некорректно");
            break;
          case 409:
            alert("Пользователь с такой почтой уже зарегистрирован");
            break;
          default:
            handlePopupRegisterFailureOpen();
        }
      })
      .finally(() =>
        setCurrentUser((currentUser) => ({ ...currentUser, isLoaded: true }))
      );
  }

  // COMPLETE - ФУНКЦИЯ АВТОРИЗАЦИИ
  function handleLogin({ email, password }) {
    mainApi
      .authorize(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setLoggedIn(true);
        handlePopupAuthorizeOpen();
        history.push("/movies");
      })
      .catch(() => handlePopupRegisterFailureOpen())
      .finally(() =>
        setCurrentUser((currentUser) => ({ ...currentUser, isLoaded: true }))
      );
  }
  function handlePopupRegisterSuccessOpen() {
    setIsPopupRegisterSuccessOpen(!isPopupRegisterSuccessOpen);
  }

  function handlePopupRegisterFailureOpen() {
    setIsPopupRegisterFailureOpen(!isPopupRegisterFailureOpen);
  }
  function handlePopupAuthorizeOpen() {
    setIsPopupAuthorizeSuccessOpen(!isPopupAuthorizeSuccessOpen);
  }

  function closeAllPopups() {
    setIsPopupRegisterSuccessOpen(false);
    setIsPopupRegisterFailureOpen(false);
    setIsPopupAuthorizeSuccessOpen(false);
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route exact path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
          <Route exact path="/">
            <Main
              loggedIn={loggedIn}
              onBurgerMenuClick={handleBurgerMenuClick}
            />
          </Route>
          <ProtectedRoute
            component={Profile}
            loggedIn={loggedIn}
            path="/profile"
            onSignOut={handleSignOut}
            onUpdateUser={handleUpdateUser}
            onBurgerMenuClick={handleBurgerMenuClick}
          />
          <ProtectedRoute
            component={Movies}
            loggedIn={loggedIn}
            path="/movies"
            movies={movies}
            savedMovies={savedMovies}
            isShorts={isShorts}
            onBurgerMenuClick={handleBurgerMenuClick}
            onSeacrhedName={searchMovie}
            onToggleIsShorts={toggleIsShort}
            onSave={saveMovie}
            onUnsave={unsaveMovie}
            moviesIsLoaded={moviesIsLoaded}
          />
          <ProtectedRoute
            component={SavedMovies}
            loggedIn={loggedIn}
            path="/saved-movies"
            movies={savedMovies}
            savedMovies={savedMovies}
            isShorts={isShorts}
            onBurgerMenuClick={handleBurgerMenuClick}
            onSeacrhedName={searchMovie}
            onToggleIsShorts={toggleIsShort}
            onSave={saveMovie}
            onUnsave={unsaveMovie}
            moviesIsLoaded={savedMoviesIsLoaded}
          />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <BurgerMenu isOpen={isBurgerMenuOpen} onClose={handleBurgerMenuClick} />
      </CurrentUserContext.Provider>
      <InfoTooltip
        isOpen={isPopupRegisterSuccessOpen}
        onClose={closeAllPopups}
        image={success}
        sign={"Вы успешно зарегистрировались!"}
      />
      <InfoTooltip
        isOpen={isPopupAuthorizeSuccessOpen}
        onClose={closeAllPopups}
        image={success}
        sign={"Вы успешно авторизовались!"}
      />
      <InfoTooltip
        isOpen={isPopupRegisterFailureOpen}
        onClose={closeAllPopups}
        image={failure}
        sign={"Что-то пошло не так! Попробуйте ещё раз."}
      />
    </div>
  );
}

export default App;
