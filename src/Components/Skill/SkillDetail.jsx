import React, { Fragment } from 'react';
import './skillDetail.scss';
import { Icon } from '../Icon/Icon';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export { category } from './skillData';

const SkillDetail = ({ skillDetail }) => {
  return (
    <Fragment>
      {skillDetail.map((skill) =>
        skill.filteredIcon ? (
          <Fragment key={skill.id}>
            <section className="skill__stats-container-one">
              <div className="skill__image-container">
                <Icon name={skill.name} className="skill__icons-color-two" />
              </div>
              <div className="skill__image-title-container">
                <h2 data-aos="zoom-out" className="skill__image-title">
                  {skill.title}
                </h2>
              </div>
              <div className="skill__image-description-container">
                <p
                  data-aos="fade-in"
                  data-aos-delay="900"
                  className="skill__image-description"
                >
                  {skill.description}
                </p>
              </div>
            </section>
            <section className="skill__stats-container-two">
              <div className="skill__projects-completed-container">
                <span
                  data-aos="fade-right"
                  data-aos-delay="930"
                  className="skill__projects-completed"
                >
                  Number of Projects
                </span>
                <span
                  data-aos="fade-left"
                  data-aos-delay="930"
                  className="skill__projects-completed-num"
                >
                  {skill.projectNumber}
                </span>
              </div>
              <div className="skill__years-experience-container">
                <span
                  data-aos="fade-right"
                  data-aos-delay="930"
                  className="skill__years-experience"
                >
                  Experience (Years)
                </span>
                <span
                  data-aos="fade-left"
                  data-aos-delay="930"
                  className="skill__years-experience-num"
                >
                  {skill.yearsExperience}
                </span>
              </div>
              <div className="skill__experience-level-container">
                <div className="skill__experience-progress-base">
                  <span
                    className={skill.progressBarClassName}
                    data-aos="slide-right"
                    data-aos-delay="930"
                    data-aos-easing="ease-in-out"
                  ></span>
                </div>
                <div className="skill__progress-bar-icon-wrapper">
                  <div className="skill__beginner-wrapper">
                    <div className="skill__beginner-circle" />
                    <p className="skill__beginner">Beginner</p>
                  </div>
                  <div className="skill__intermediate-wrapper">
                    <div className="skill__intermediate-circle" />
                    <p className="skill__intermediate">Intermediate</p>
                  </div>
                  <div className="skill__expert-wrapper">
                    <div className="skill__expert-circle" />
                    <p className="skill__expert">Expert</p>
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        ) : (
          ''
        )
      )}
    </Fragment>
  );
};

export default SkillDetail;
