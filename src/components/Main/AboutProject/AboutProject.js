import React from "react";
import "./aboutProject.css";

function AboutProject() {
  return (
    <section>
      <p className="aboutProject" id="aboutProject">
        О проекте
      </p>
      <div className="aboutProject__levels">
        <div className="aboutProject__level">
          <p className="aboutProject__levels_first">
            Дипломный проект включал 5 этапов
          </p>
          <p className="aboutProject__levels_second">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__level">
          <p className="aboutProject__levels_first">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="aboutProject__levels_second">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutProject__weeks">
        <p className="aboutProject__weeks_one">1 неделя</p>
        <p className="aboutProject__weeks_four">4 недели</p>
      </div>
      <div className="aboutProject__end">
        <p className="aboutProject__end_back">Back-end</p>
        <p className="aboutProject__end_front">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
