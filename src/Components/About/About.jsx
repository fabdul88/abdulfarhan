import React, { useState, useEffect } from 'react';
import './about.scss';
import { aboutData } from './aboutData';
import Profile from '../../assets/profile.webp';
import Hexagon from '../../assets/hexagon_monochrome.webp';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import useMeasure from 'react-use-measure';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
  const [filter, setFilter] = useState('long');
  const [about, setAbout] = useState([]);
  const [activeTab, setActiveTab] = useState('long');
  let [ref, { height }] = useMeasure();

  useEffect(() => {
    const filtered = aboutData.map((version) => ({
      ...version,
      filtered: version.activeFilter.includes(filter),
    }));
    setAbout(filtered);
  }, [filter]);

  return (
    <MotionConfig transition={{ duration: 0.35 }}>
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
          <div className="about-container__profile-container">
            <img
              data-aos="flip-left"
              className="about-container__profile-background"
              src={Hexagon}
              alt="Hexagon Background"
            />
            <img
              className="about-container__profile"
              src={Profile}
              alt="Profile"
            />
          </div>
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
                    filter === version.categoryTitle
                      ? version.categoryTitle
                      : ''
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

            <motion.div
              className="about-container__profile-text-animation-container"
              animate={{ height: height || 'auto' }}
            >
              <AnimatePresence initial={false}>
                {about.map((version) =>
                  version.filtered ? (
                    <motion.div
                      key={version.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={
                        height
                          ? 'about-container__profile-text-wrapper'
                          : 'about-container__profile-text-wrapper-relative'
                      }
                      ref={ref}
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
                        <a
                          className={version.listItemLink}
                          href={version.listItemHref}
                          target={version.target}
                          rel={version.rel}
                        >
                          {' '}
                          Download resume
                        </a>
                      </p>
                    </motion.div>
                  ) : (
                    ''
                  )
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};

export { About };
