import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./login.css";

function Login() {
  return (
    <div>
      <header className="register__header">
        <img src={logo} alt="Логотип" className="register__logo" />
        <h2 className="register__words">Рады видеть!</h2>
      </header>
      <form className="register__form">
        <p className="register__inscription">E-mail</p>
        <input className="register__field" type="email" />
        <p className="register__inscription">Пароль</p>
        <input className="register__field" type="password" />
        <footer className="register__footer">
          <button className="register__btn" type="submit">
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
