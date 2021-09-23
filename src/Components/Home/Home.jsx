import React, { useEffect } from "react";
import { Link as Scroll } from "react-scroll";
import { motion } from "framer-motion";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Down from "../../assets/down.svg";
import "./home.scss";

import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const hover = {
    scale: 1.1,
    transition: { type: "spring", stiffness: 1000 },
  };

  let t1 = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    t1.from(
      ".home-container__first-name",
      { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      "Start"
    );

    t1.staggerFrom(
      ".home-container__text-container-description-span",
      1,
      { y: 30, ease: Power3.easeOut, opacity: 0 },
      0.15,
      "Start"
    )
      .from(".home-container__down", {
        y: 20,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.2,
      })
      .from(
        ".home-container__last-name",
        { y: 10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
        0.35
      );
    gsap.from(".home-container__text-container-title", {
      duration: 3,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".home-container__first-name",
        start: "top 90%",
        end: "bottom 60%",

        toggleActions: "restart complete reverse reset",
      },
    });
  });

  return (
    <div id="home">
      <div className="home-container">
        <div className="home-container__hero-image">
          <div className="home-container__stars"></div>
          <div className="home-container__stars-two"></div>
          <div className="home-container__stars-three"></div>
          <div className="home-container__text-container">
            <h1 className="home-container__text-container-title">
              <span className="home-container__first-name">Abdul </span>
              <span className="home-container__last-name">Farhan</span>

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
            </h1>
            <div className="home-container__down-container">
              <Scroll to="about" smooth={true} offset={-95} duration={1000}>
                <motion.img
                  whileHover={hover}
                  className="home-container__down"
                  src={Down}
                  alt="About Scroll Button"
                />
              </Scroll>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
