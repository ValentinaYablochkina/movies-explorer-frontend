import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__elements">
        <p className="footer__date">© 2022</p>
        <div className="footers__links">
          <p>
            <a
              className="footer_link"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </p>
          <p>
            <a
              className="footer_link"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
