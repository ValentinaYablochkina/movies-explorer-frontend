import React from "react";
import Header from "./Header.js";
import "./profile.css";

function Profile() {
  return (
    <section>
      <Header />
      <div className="profile">
        <h2 className="profile__greetings">Привет, Валентина!</h2>
        <div className="profile__info">
          <p className="profile__standart">Имя</p>
          <p className="profile__user">Валентина</p>
        </div>
        <div className="profile__info">
          <p className="profile__standart">E-mail</p>
          <p className="profile__user">tino4ka9215@mail.ru</p>
        </div>
        <footer className="profile__footer">
          <button className="profile__edit">Редактировать</button>
          <button className="profile__out">Выйти из аккаунта</button>
        </footer>
      </div>
    </section>
  );
}

export default Profile;
