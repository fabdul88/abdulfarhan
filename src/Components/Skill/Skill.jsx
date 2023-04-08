import React, { Fragment, useEffect, useState } from 'react';
import './skill.scss';
import { skillData, category } from './skillData';
import { Icon } from '../Icon/Icon';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkillDetail from './SkillDetail';
AOS.init();

const Skill = () => {
  // useState for filtering category
  const [filter, setFilter] = useState('technical');
  const [skillCategory, setSkillCategory] = useState([]);
  const [activeTab, setActiveTab] = useState('technical');
  const [activeIcon, setActiveIcon] = useState('react');

  // useState for filtering icon
  const [skillDetailFilter, setSkillDetailFilter] = useState('react');
  const [skillDetail, setSkillDetail] = useState([]);

  // useEffect for filtering category
  useEffect(() => {
    const filtered = skillData.map((skill) => ({
      ...skill,
      filtered: skill.case.includes(filter),
    }));
    setSkillCategory(filtered);
  }, [filter]);

  // useEffect for filtering icon
  useEffect(() => {
    const filteredIcon = skillData.map((skill) => ({
      ...skill,
      filteredIcon: skill.icon.includes(skillDetailFilter),
    }));
    setSkillDetail(filteredIcon);
  }, [skillDetailFilter]);

  return (
    <div id="skills" className="skill">
      <div className="skill__stars"></div>
      <div className="skill__stars-two"></div>
      <div className="skill__stars-three"></div>
      <div className="skill__title-container">
        <h1 data-aos="fade-up" data-aos-once className="skill__title">
          SKILL
          <span className="skill__title-letter">S</span>
        </h1>
        <hr data-aos="fade-down" data-aos-once className="skill__title-hr" />
      </div>
      <section className="skill__section-one">
        <section className="skill__wrapper">
          {category.map((skillCategory) => (
            <a
              href="/#"
              key={skillCategory.id}
              className={
                activeTab === skillCategory.active
                  ? skillCategory.containerClassNameActive
                  : skillCategory.containerClassName
              }
              active={
                filter === skillCategory.active ? skillCategory.active : ''
              }
              onClick={(e) => {
                e.preventDefault();
                setFilter(skillCategory.active);
                setActiveTab(skillCategory.active);
              }}
            >
              <Icon
                className={skillCategory.imageClassName}
                name={skillCategory.iconName}
              />
              <span className={skillCategory.spanClassNameActive}>
                {skillCategory.description}
              </span>
            </a>
          ))}
        </section>
        <section className="skill__icon-wrapper">
          {skillCategory.map((skill) =>
            skill.filtered ? (
              <Fragment key={skill.id}>
                <div
                  className="skill__icon-container"
                  onClick={(e) => {
                    e.preventDefault();
                    setSkillDetailFilter(skill.name);
                    setActiveIcon(skill.name);
                  }}
                >
                  <Icon
                    name={skill.name}
                    className={
                      activeIcon === skill.name
                        ? skill.iconClassNameActive
                        : skill.iconClassName
                    }
                  />
                </div>
              </Fragment>
            ) : (
              ''
            )
          )}
        </section>
      </section>
      <section className="skill__section-two">
        <div className="skill__wrapper-two">
          <SkillDetail skillDetail={skillDetail} />
        </div>
      </section>
    </div>
  );
};

export { Skill };
