import React, { useState } from "react";
import { motion } from "framer-motion";
import "./sidebar.scss";
import Burger from "../Burger/Burger";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import { Link } from "react-scroll";
import { SideBarData } from "./SideBarData";

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
            {SideBarData.map((item) => (
              <motion.li
                key={item.id}
                className={item.listItemClassName}
                whileHover={hover}
              >
                <Link
                  className={item.linkClassName}
                  to={item.linkTo}
                  smooth={true}
                  offset={-95}
                  duration={1000}
                >
                  <img
                    className={item.imgClassName}
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    onClick={() => {
                      // showSidebar();
                      setSidebar(false);
                    }}
                  />
                  <span
                    className={item.descriptionClassName}
                    onClick={() => {
                      // showSidebar();
                      setSidebar(false);
                    }}
                  >
                    {item.description}
                  </span>
                </Link>
              </motion.li>
            ))}
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
