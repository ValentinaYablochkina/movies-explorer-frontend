import React from "react";
import "./techs.css";

function Techs() {
  return (
    <section className="techs">
      <p className="techs__header" id="technology">
        Технологии
      </p>
      <h2 className="techs__seven">7 технологий</h2>
      <p className="techs__about">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__examples">
        <p className="techs__examples_element">HTML</p>
        <p className="techs__examples_element">CSS</p>
        <p className="techs__examples_element">JS</p>
        <p className="techs__examples_element">React</p>
        <p className="techs__examples_element">Git</p>
        <p className="techs__examples_element">Express.js</p>
        <p className="techs__examples_element">mongoDB</p>
      </div>
    </section>
  );
}

export default Techs;
