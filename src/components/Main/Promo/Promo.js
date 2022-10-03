import React from "react";
import "./promo.css";
import BackLogo from "../../../images/landing-logo.svg";

function Promo() {
  return (
    <div className="promo">
      <p className="promo__about">
        Учебный проект студента факультета Веб-разработки.
      </p>
      <img src={BackLogo} alt="Логотип" className="promo__logo" />
    </div>
  );
}

export default Promo;
