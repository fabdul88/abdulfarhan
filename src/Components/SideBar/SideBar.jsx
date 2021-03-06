import React, { useState } from "react";
import { motion } from "framer-motion";
import "./sidebar.scss";
import Burger from "../Burger/Burger";
import Home from "../../assets/home.svg";
import About from "../../assets/about.svg";
import Skills from "../../assets/skills.svg";
import Projects from "../../assets/mywork.svg";
import Contact from "../../assets/contact.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import { Link } from "react-scroll";

export default function SideBar() {
  // Setting initial sidebar display state to be false
  const [sidebar, setSidebar] = useState(false);

  // Defining a function to toggle between false and true states
  const showSidebar = () => setSidebar(!sidebar);

  // Hover animations
  const hover = {
    scale: 1.15,
    textShadow: "0 0 8px rgb(0,0,0)",
    transition: { type: "spring", stiffness: 1000 },
  };
  return (
    <div className="sidebar-container__sidebar-width">
      <div
        // setting either one of the class depending on the sidebar state
        className={sidebar ? "sidebar-container--active" : "sidebar-container"}
      >
        <ul className="sidebar-container__list">
          <div className="sidebar-container__flex-list">
            <motion.li
              className="sidebar-container__list-item"
              whileHover={hover}
            >
              <Link
                className="sidebar-container__list-link"
                to="home"
                smooth={true}
                offset={-95}
                duration={1000}
              >
                <img
                  className="sidebar-container__list-home"
                  src={Home}
                  alt="Home"
                  onClick={() => {
                    // showSidebar();
                    setSidebar(false);
                  }}
                />
                <p
                  className="sidebar-container__hover-home"
                  onClick={() => {
                    // showSidebar();
                    setSidebar(false);
                  }}
                >
                  HOME
                </p>
              </Link>
            </motion.li>
            <motion.li
              className="sidebar-container__list-item"
              whileHover={hover}
            >
              <Link
                className="sidebar-container__list-link"
                to="about"
                smooth={true}
                offset={-95}
                duration={1000}
              >
                <img
                  className="sidebar-container__list-about"
                  src={About}
                  alt="About"
                  onClick={() => {
                    // showSidebar();
                    setSidebar(false);
                  }}
                />
                <span
                  className="sidebar-container__hover-about"
                  onClick={() => {
                    // showSidebar();
                    setSidebar(false);
                  }}
                >
                  ABOUT
                </span>
              </Link>
            </motion.li>
            <motion.li
              className="sidebar-container__list-item"
              whileHover={hover}
            >
              <Link
                className="sidebar-container__list-link"
                to="skills"
                smooth={true}
                offset={-95}
                duration={1000}
              >
                <img
                  className="sidebar-container__list-skills"
                  src={Skills}
                  alt="Skills"
                  onClick={() => {
                    // showSidebar();
                    setSidebar(false);
                  }}
                />
                <span
                  className="sidebar-container__hover-skills"
                  onClick={() => {
                    // showSidebar();
                    setSidebar(false);
                  }}
                >
                  SKILLS
                </span>
              </Link>
            </motion.li>
            <motion.li
              className="sidebar-container__list-item"
              whileHover={hover}
            >
              <Link
                className="sidebar-container__list-link"
                to="projects"
                smooth={true}
                offset={-95}
                duration={1000}
              >
                <img
                  className="sidebar-container__list-work"
                  src={Projects}
                  alt="Projects"
                  onClick={() => {
                    // showSidebar();
                    setSidebar(false);
                  }}
                />
                <span
                  className="sidebar-container__hover-projects"
                  onClick={() => {
                    // showSidebar();
                    setSidebar(false);
                  }}
                >
                  PROJECTS
                </span>
              </Link>
            </motion.li>
            <motion.li
              className="sidebar-container__list-item"
              whileHover={hover}
            >
              <Link
                className="sidebar-container__list-link"
                to="contact"
                smooth={true}
                offset={-95}
                duration={1000}
              >
                <img
                  className="sidebar-container__list-contact"
                  src={Contact}
                  alt="Contact"
                  onClick={() => {
                    // showSidebar();
                    setSidebar(false);
                  }}
                />
                <span
                  className="sidebar-container__hover-contact"
                  onClick={() => {
                    // showSidebar();
                    setSidebar(false);
                  }}
                >
                  CONTACT
                </span>
              </Link>
            </motion.li>
            <div className="sidebar-container__social-container">
              <hr className="sidebar-container__top-hr" />
              <a href="https://www.linkedin.com/in/abdul-farhan-9bba3b1b3">
                <motion.img
                  className="sidebar-container__linkedin-image"
                  whileHover={hover}
                  src={Linkedin}
                  alt="Linkedin"
                  onClick={() => {
                    // showSidebar();
                    setSidebar(false);
                  }}
                />
              </a>
              <a href="https://www.github.com/fabdul88">
                <motion.img
                  className="sidebar-container__github-image"
                  whileHover={hover}
                  src={Github}
                  alt="Linkedin"
                  onClick={() => {
                    // showSidebar();
                    setSidebar(false);
                  }}
                />
              </a>
            </div>
          </div>
        </ul>
      </div>
      <div
        className={
          sidebar
            ? "sidebar-container__backdrop"
            : "sidebar-container__backdrop-false"
        }
      />

      <Burger display={showSidebar} />
    </div>
  );
}
