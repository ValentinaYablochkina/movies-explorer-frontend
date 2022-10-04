import React from "react";
import "./aboutMe.css";
import Foto from "../../../images/student.svg";

function AboutMe() {
  return (
    <section className="student">
      <p className="student__header" id="student">
        Студент
      </p>
      <div className="student__about">
        <div>
          <h2 className="student__name">Валентина</h2>
          <h5 className="student__profession">Фронтенд-разработчик, 29 лет</h5>
          <p className="student__story">
            Я родилась и живу в Санкт-Петербурге, закончила РГПУ им.Герцена по
            направлению управление персоналом. Работаю в IT-компании Первый бит
            менеджером по сопровождению клиентов. В прошлом году я решила
            освоить профессию Web-разработчик. Этот курс помог мне понять, что
            писать код - это крайне творческая и увлекательная профессия.
          </p>
          <p className="student__github">
            <a
              href="https://github.com/ValentinaYablochkina"
              className="student__github"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </p>
        </div>
        <img src={Foto} alt="Фото" className="student__foto" />
      </div>
    </section>
  );
}

export default AboutMe;
