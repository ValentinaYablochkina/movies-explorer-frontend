import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <div className="navtab">
      <p className="navtab__section">
        <a href="#aboutProject" className="navtab__section">
          О проекте
        </a>
      </p>
      <p className="navtab__section">
        <a href="#technology" className="navtab__section">
          Технологии
        </a>
      </p>
      <p className="navtab__section">
        <a href="#student" className="navtab__section">
          Студент
        </a>
      </p>
    </div>
  );
}

export default NavTab;
