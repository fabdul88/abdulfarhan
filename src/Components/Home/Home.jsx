import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import { About, Skill, Projects, Contact, Footer } from '../index';
// import Blog from '../Blog/Blog';
import { Icon } from '../Icon/Icon';
import './home.scss';

const Home = () => {
  const hover = {
    scale: 1.1,
    transition: { type: 'spring', stiffness: 1000 },
  };

  return (
    <>
      <main id="home">
        {/* <Switch> */}
        {/* <Route exact path="/"> */}
        <section className="home-container">
          <div className="home-container__hero-image">
            <div className="home-container__stars"></div>
            <div className="home-container__stars-two"></div>
            <div className="home-container__stars-three"></div>
            <div className="home-container__text-container">
              <h1 className="home-container__text-container-title">
                <span className="home-container__first-name">Abdul </span>
                <span className="home-container__last-name">Farhan</span>
              </h1>

              <p className="home-container__text-container-description">
                <span className="home-container__text-container-description-span">
                  Full
                </span>
                <span className="home-container__text-container-description-span">
                  Stack
                </span>
                <span className="home-container__text-container-description-span">
                  Web
                </span>
                <span className="home-container__text-container-description-span">
                  Developer
                </span>
              </p>
              <div className="home-container__down-container">
                <Scroll to="about" smooth={true} offset={-95} duration={1000}>
                  <motion.div
                    className="home-container__down-icon-container"
                    whileHover={hover}
                  >
                    <Icon
                      name="arrow"
                      className="home-container__down"
                      width="55"
                      height="55"
                    />
                  </motion.div>
                </Scroll>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Skill />
        <Projects />
        <Contact />
        {/* </Route> */}
        {/* <Route
            path="/blog"
            render={() => {
              return <Blog />;
            }}
          /> */}
        {/* </Switch> */}
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
};
export { Home };
