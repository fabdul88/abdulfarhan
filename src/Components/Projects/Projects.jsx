import React, { useState, useEffect } from 'react';
import { ProjectCategory, ProjectsData } from './ProjectsData';
import { FeaturedProj } from '../Proj/FeaturedProj';
import Card from '../Projects/Card/Card';
import './projects.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setProjects(ProjectsData);
  }, []);

  useEffect(() => {
    const filtered = ProjectsData.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  return (
    <div id="projects" className="work-container">
      <div className="work-container__stars"></div>
      <div className="work-container__stars-two"></div>
      <div className="work-container__stars-three"></div>
      <div className="work-container__title-container">
        <h1 data-aos="fade-up" className="work-container__title">
          PRO
          <span className="work-container__title-letter">JECTS</span>
        </h1>
        <hr data-aos="fade-down" className="work-container__title-hr" />
      </div>
      <FeaturedProj />
      <div className="work-container__work-labels-container">
        <div className="work-container__work-labels-container-sub">
          {ProjectCategory.map((category) => (
            <a
              key={category.id}
              className={
                activeTab === category.active
                  ? category.categoryClassNameActive
                  : category.categoryClassName
              }
              href="/#"
              active={filter === category.active ? category.active : ''}
              onClick={(e) => {
                e.preventDefault();
                setFilter(category.active);
                setActiveTab(category.active);
              }}
            >
              {category.categoryDescription}
            </a>
          ))}
        </div>
      </div>

      <div className="work-container__cards-container">
        <Card projectCard={projects} />
      </div>
    </div>
  );
};

export { Projects };
