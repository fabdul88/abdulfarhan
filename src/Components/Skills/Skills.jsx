import React from "react";
import "./skills.scss";
import { SkillsData } from "./SkillsData";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Skills() {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-container__title-container">
        <h1 data-aos="fade-up" className="skills-container__title">
          SKILL
          <span className="skills-container__title-letter">S</span>
        </h1>
        <hr data-aos="fade-down" className="skills-container__title-hr" />
      </div>

      {SkillsData.map((skill) => {
        return (
          <div className="skills-container__skills" key={skill.id}>
            <div className="skills-container__skills-sub">
              <ul className="skills-container__list">
                <li data-aos="fade-up" className="skills-container__list-item">
                  <h3 className="skills-container__skill-type">
                    {skill.skillType}
                  </h3>
                  <div className="skills-container__loading-bar-container">
                    <span className="skills-container__bar">
                      <span
                        data-aos="slide-right"
                        data-aos-delay="50"
                        data-aos-easing="ease-in-out"
                        className={skill.percentageBarColor}
                      ></span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
