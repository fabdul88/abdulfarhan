import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Profile from "../../assets/profile.png";
import Hexagon from "../../assets/hexagon_monochrome.png";
import "./about.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

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
          whileHover={{ scale: 1.2 }}
        >
          <img
            data-aos="flip-left"
            className="about-container__profile-background"
            src={Hexagon}
            alt="Hexagon Background"
          />
          <motion.img
            className="about-container__profile"
            whileHover={{ scale: 1.05, ease: 100, rotate: -5 }}
            src={Profile}
            alt="Profile"
          />
        </motion.div>
        <div
          data-aos="flip-left"
          data-aos-duration="4000"
          className="about-container__profile-text-container"
        >
          <p className="about-container__profile-text">
            I'm Abdul Farhan, a
            <span
              aos-data="ease-in-cubic"
              className="about-container__profile-text-career"
            >
              {" "}
              full stack Web Developer{" "}
            </span>
            in Vancouver, CA. I have a serious passion for creating interactive
            web based applications that makes a difference to the lives of those
            around me !!
          </p>
          <p className="about-container__profile-text">
            When I'm not coding, you'll find me gaming, playing sports or
            experimenting with YouTube food recipes.
          </p>
        </div>
      </div>
    </div>
  );
}
