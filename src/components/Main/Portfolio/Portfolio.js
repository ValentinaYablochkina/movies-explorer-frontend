import React from "react";
import "./portfolio.css";
import Arrow from "../../../images/arrow.svg";

function Portfolio() {
  return (
    <div className="portfolio">
      <p className="portfolio__header">Портфолио</p>
      <div className="portfolio__works">
        <div className="portfolio__group">
          <p className="portfolio__website">
            <a
              className="portfolio__link"
              href="https://disk.yandex.ru/d/eKapCVpZvsFTeA"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
            </a>
          </p>
          <img src={Arrow} alt="Стрелка" className="portfolio__arrow" />
        </div>
        <div className="portfolio__group">
          <p className="portfolio__website">
            <a
              className="portfolio__link"
              href="https://disk.yandex.ru/d/PDRcLkMaMqlhhg"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
            </a>
          </p>
          <img src={Arrow} alt="Стрелка" className="portfolio__arrow" />
        </div>
        <div className="portfolio__group">
          <p className="portfolio__website">
            <a
              href="https://proektmesto.students.nomoredomains.sbs/"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
            </a>
          </p>
          <img src={Arrow} alt="Стрелка" className="portfolio__arrow" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
