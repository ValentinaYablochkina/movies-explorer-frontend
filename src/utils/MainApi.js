    export const BASE_URL = "https://api.valentina92.films.nomoredomains.sbs";

const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(`Ошибка: ${response.statusText}`);
};

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("jwt"),
    },
  }).then(checkResponse);
};

export const saveMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("jwt"),
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: "https://api.nomoreparties.co" + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: "https://api.nomoreparties.co" + movie.thumbnail,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  }).then(checkResponse);
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("jwt"),
    },
  }).then(checkResponse);
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/profile`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "https://movies-explorer.Valentina.nomoredomains.icu",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
};

export const changeProfileData = (name, email) => {
  return fetch(`${BASE_URL}/profile`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "https://movies-explorer.Valentina.nomoredomains.icu",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then(checkResponse);
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "https://movies-explorer.Valentina.nomoredomains.icu",
    },
    body: JSON.stringify({
      name: name,
      password: password,
      email: email,
    }),
  }).then(checkResponse);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "https://movies-explorer.Valentina.nomoredomains.icu",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const checkToken = (jwt) => {
  return fetch(`${BASE_URL}/profile`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
      "Access-Control-Request-Headers": "https://movies-explorer.Valentina.nomoredomains.icu",
    },
  }).then(checkResponse);
};
