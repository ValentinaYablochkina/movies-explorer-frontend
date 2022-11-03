import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./register.css";

function Register({ onRegister }) {
  const history = useHistory();
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  const [data, setData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) history.push("/movies");
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = data;
    onRegister({ name, email, password });
  }

  function userDataIsValid() {
    const isEmpty = !data.name || !data.email || !data.password;
    if (isEmpty) {
      return true;
    }

    const isErrors = errors.name || errors.email || errors.password;
    if (isErrors) {
      return true;
    }

    return false;
  }

  return (
    <section>
      <header className="register__header">
        <img src={logo} alt="Логотип" className="register__logo" />
        <h2 className="register__words">Добро пожаловать!</h2>
      </header>
      <form className="register__form" onSubmit={handleSubmit}>
        <p className="register__inscription">Имя</p>
        <input
          className="register__field"
          type="text"
          name={"name"}
          value={data.name}
          {...register("name", {
            required: "поле для обязательного заполнения",
            onChange: handleChange,
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
        <span id="error-name" className="error">{errors.name?.message}</span>
        <p className="register__inscription">E-mail</p>
        <input
          className="register__field"
          type="email"
          name={"email"}
          value={data.email}
          {...register("email", {
            required: "поле для обязательного заполнения",
            onChange: handleChange,
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
              message: "Введите валидный email",
            },
          })}
        />
        <span id="error-email" className="error">{errors.email?.message}</span>
        <p className="register__inscription">Пароль</p>
        <input
          className="register__field"
          type="password"
          value={data.password}
          name={"password"}
          {...register("password", {
            required: "поле для обязательного заполнения",
            onChange: handleChange,
            minLength: {
              value: 4,
              message: "пароль должен быть минимун 4 символа",
            },
          })}
        />
        <span id="error-password" className="error">{errors.password?.message}</span>
      <footer className="register__footer">
        <button className="register__btn" type="submit" disabled={userDataIsValid()}>
          Зарегистрироваться
        </button>
        <p className="register__sign">
          Уже зарегистрированы?{" "}
          <Link to="/signin" className="register__sign register__sign_register">
            Войти
          </Link>
        </p>
      </footer>
      </form>
    </section>
  );
}

export default Register;
