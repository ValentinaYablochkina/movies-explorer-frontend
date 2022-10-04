import React from "react";
import "./portfolio.css";
import Arrow from "../../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__header">Портфолио</p>
      <ul className="portfolio__works">
        <li className="portfolio__group">
          <a
            className="portfolio__link"
            href="https://disk.yandex.ru/d/eKapCVpZvsFTeA"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__website">Статичный сайт</p>
            <img src={Arrow} alt="Стрелка" className="portfolio__arrow" />
          </a>
        </li>
        <li className="portfolio__group">
          <a
            className="portfolio__link"
            href="https://disk.yandex.ru/d/PDRcLkMaMqlhhg"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__website">Адаптивный сайт</p>
            <img src={Arrow} alt="Стрелка" className="portfolio__arrow" />
          </a>
        </li>
        <li className="portfolio__group">
          <a
            className="portfolio__link"
            href="https://proektmesto.students.nomoredomains.sbs/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__website">Одностраничное приложение</p>
            <img
              src={Arrow}
              alt="Стрелка"
              className="portfolio__arrow"
              href="https://proektmesto.students.nomoredomains.sbs/"
              target="_blank"
              rel="noreferrer"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
