import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProjectCategory, ProjectsData } from './ProjectsData';
import Card from '../Projects/Card/Card';
import './projects.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Projects() {
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

      <div className="work-container__work-labels-container">
        <div className="work-container__work-labels-container-sub">
          {ProjectCategory.map((category) => (
            <motion.a
              key={category.id}
              className={
                activeTab === category.active
                  ? category.categoryClassNameActive
                  : category.categoryClassName
              }
              href="/#"
              active={filter === category.active}
              onClick={(e) => {
                e.preventDefault();
                setFilter(category.active);
                setActiveTab(category.active);
              }}
            >
              {category.categoryDescription}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="work-container__cards-container">
        <Card projectCard={projects} />
      </div>
    </div>
  );
}
