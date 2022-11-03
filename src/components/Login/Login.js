import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./login.css";

function Login({ onLogin }) {
  const history = useHistory();
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  const [data, setData] = React.useState({
    email: "",
    password: "",
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
    const { email, password } = data;
    onLogin({ email, password });
  }

  function userDataIsValid() {
    const isEmpty = !data.email || !data.password;
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
    <div>
      <header className="register__header">
        <img src={logo} alt="Логотип" className="register__logo" />
        <h2 className="register__words">Рады видеть!</h2>
      </header>
      <form className="register__form" onSubmit={handleSubmit}>
        <p className="register__inscription">E-mail</p>
        <input
          className="register__field"
          type="email"
          value={data.email}
          name={"email"}
          {...register("email", {
            required: "поле для обязательного заполнения",
            onChange: handleChange,
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
              message: "Введите валидный email",
            },
          })}
        />
        <span id="error-email" className="error" />
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
        <span id="error-password" className="error" />
        <footer className="register__footer">
          <button
            className="register__btn"
            type="submit"
            disabled={userDataIsValid()}
          >
            Войти
          </button>
          <p className="register__sign">
            Ещё не зарегистрированы?{" "}
            <Link
              to="/signup"
              className="register__sign register__sign_register"
            >
              Регистрация
            </Link>
          </p>
        </footer>
      </form>
    </div>
  );
}

export default Login;
