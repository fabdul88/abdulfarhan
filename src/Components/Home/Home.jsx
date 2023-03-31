import React, { useEffect } from 'react';
import { Link as Scroll } from 'react-scroll';
import { About, Skill, Projects, Contact, Footer } from '../index';
import './home.scss';
import CircularText from '../CircularText/CircularText';

const Home = () => {
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
      });
    }
    return scrollToTop;
  }, []);

  return (
    <>
      <main>
        <section id="home" className="home-container">
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
                  <div>
                    <CircularText />
                  </div>
                </Scroll>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
};
export { Home };
