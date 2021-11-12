import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Profile from '../../assets/profile.webp';
import Hexagon from '../../assets/hexagon_monochrome.webp';
import './about.scss';
import { aboutData } from './aboutData';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function About() {
  const [filter, setFilter] = useState('long');
  const [about, setAbout] = useState([]);
  const [activeTab, setActiveTab] = useState('long');

  useEffect(() => {
    const filtered = aboutData.map((version) => ({
      ...version,
      filtered: version.activeFilter.includes(filter),
    }));
    setAbout(filtered);
  }, [filter]);

  return (
    <div id="about" className="about-container">
      <img
        data-aos="slide-down"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        className="about-container__hexagon-top"
        src={Hexagon}
        alt="Hexagon Top"
      />
      <img
        data-aos="slide-up"
        data-aos-duration="3000"
        className="about-container__hexagon-bottom"
        src={Hexagon}
        alt="Hexagon Bottom"
      />
      <div className="about-container__title-container">
        <h1 data-aos="fade-up" className="about-container__title">
          <span className="about-container__title-letter">A</span>BOUT
        </h1>
        <hr data-aos="fade-down" className="about-container__title-hr" />
      </div>
      <div className="about-container__column-container">
        <motion.div
          className="about-container__profile-container"
          whileHover={{ scale: 1.2, rotate: -5, ease: 100 }}
        >
          <img
            data-aos="flip-left"
            className="about-container__profile-background"
            src={Hexagon}
            alt="Hexagon Background"
          />
          <motion.img
            className="about-container__profile"
            src={Profile}
            alt="Profile"
          />
        </motion.div>
        <div className="about-container__profile-text-container">
          <div className="about-container__version-filter-container">
            {aboutData.map((version) => (
              <a
                className={
                  activeTab === version.categoryTitle
                    ? 'about-container__version-filter--active'
                    : 'about-container__version-filter'
                }
                key={version.id}
                href="/#"
                active={
                  filter === version.categoryTitle ? version.categoryTitle : ''
                }
                onClick={(e) => {
                  e.preventDefault();
                  setFilter(version.categoryTitle);
                  setActiveTab(version.categoryTitle);
                }}
              >
                {version.categoryTitle}
              </a>
            ))}
          </div>
          {about.map((version) =>
            version.filtered ? (
              <div
                className="about-container__profile-text-wrapper"
                key={version.id}
                data-aos="flip-left"
                data-aos-duration="3000"
              >
                <p className="about-container__profile-text">
                  {version.aboutVersionTop}
                  <span
                    aos-data="ease-in-cubic"
                    className="about-container__profile-text-career"
                  >
                    {' '}
                    {version.aboutVersionSpan}{' '}
                  </span>
                  {version.aboutVersionBottom}
                </p>
                <p className="about-container__profile-text-bottom">
                  {version.aboutVersionBottomTwo}
                </p>
              </div>
            ) : (
              ''
            )
          )}
        </div>
      </div>
    </div>
  );
}
