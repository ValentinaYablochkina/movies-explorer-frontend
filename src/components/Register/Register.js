import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  return (
    <div>
      <header className="register__header">
        <img src={logo} alt="Логотип" className="register__logo" />
        <h2 className="register__words">Добро пожаловать!</h2>
      </header>
      <form className="register__form">
        <p className="register__inscription">Имя</p>
        <input className="register__field" type="text" />
        <p className="register__inscription">E-mail</p>
        <input className="register__field" type="email" />
        <p className="register__inscription">Пароль</p>
        <input className="register__field" type="password" />
        <span id="error" className="error" />
        <footer className="register__footer">
          <button className="register__btn" type="submit">
            Зарегистрироваться
          </button>
          <p className="register__sign">
            Уже зарегистрированы?{" "}
            <Link
              to="/signin"
              className="register__sign register__sign_register"
            >
              Войти
            </Link>
          </p>
        </footer>
      </form>
    </div>
  );
}

export default Register;
