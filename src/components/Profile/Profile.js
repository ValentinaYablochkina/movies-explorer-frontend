import React from "react";
import "./profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from 'react-hook-form';
import Header from "../Main/Header/Header";

function Profile({ loggedIn, onBurgerMenuClick, onUpdateUser, onSignOut }) {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });
  
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  React.useEffect(() => {
    if (currentUser.name !== name) {
      setName(currentUser.name);
    } else {
      setEmail(currentUser.email);
    }
  }, [currentUser.name, currentUser.email]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({ name, email });
  }

  function isEmptyFields() {
    return !name && !email;
  }

  function validateFields() {
    const fieldsIsEmpty = !name && !email;
    const fieldsIsNotChanged = name === currentUser.name && email === currentUser.email;
    return fieldsIsEmpty || fieldsIsNotChanged;
  }

  return (
    <section>
      <Header loggedIn={loggedIn} onBurgerMenuClick={onBurgerMenuClick} />
      <form className="profile" onSubmit={handleSubmit}>
        <h2 className="profile__greetings">Привет, {currentUser.name}!</h2>
        <div className="profile__info">
          <label className="profile__standart" htmlFor="name">
            Имя
          </label>
          <input
            type="text"
            className="profile__input"
            id="name"
            value={name}
            {...register("name", {
              required: "поле для обязательного заполнения",
              onChange: handleChangeName,
              minLength: {
                value: 2,
                message: "Минимум 2 символа",
              },
              maxLength: {
                value: 30,
                message: "Максимум 30 символа",
              },
            })}
          />
        </div>
        <div className="profile__info">
          <label className="profile__standart" htmlFor="email">
            E-mail
          </label>
          <input
            type="text"
            className="profile__input"
            id="email"
            value={email}
            {...register("email", {
              required: "поле для обязательного заполнения",
              onChange: handleChangeEmail,
              pattern: {
                value:
                  /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                message: "Введите валидный email",
              },
            })}
          />
        </div>
        <footer className="profile__footer">
          <button className="profile__edit" disabled={validateFields()}>
            Редактировать
          </button>
          <button className="profile__out" onClick={onSignOut}>
            Выйти из аккаунта
          </button>
        </footer>
      </form>
    </section>
  );
}

export default Profile;
