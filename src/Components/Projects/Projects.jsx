import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectsData } from "./ProjectsData";
import Card from "../Card/Card";
import "./projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Projects() {
  const hover = {
    scale: 1.05,
  };

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(ProjectsData);
  }, []);

  useEffect(() => {
    // setProjects([]);

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
          <motion.a
            data-aos="flip-right"
            duration="3000"
            whileHover={hover}
            className="work-container__work-labels"
            href="/#"
            active={filter === "all"}
            onClick={(e) => {
              e.preventDefault();
              setFilter("all");
            }}
          >
            ALL
          </motion.a>
          <motion.a
            data-aos="flip-right"
            duration="3000"
            whileHover={hover}
            className="work-container__work-labels"
            href="/#"
            active={filter === "REACT-JS"}
            onClick={(e) => {
              e.preventDefault();
              setFilter("REACT-JS");
            }}
          >
            REACT-JS
          </motion.a>
          <motion.a
            data-aos="flip-right"
            duration="3000"
            whileHover={hover}
            className="work-container__work-labels"
            href="/#"
            active={filter === "REACT NATIVE"}
            onClick={(e) => {
              e.preventDefault();
              setFilter("REACT NATIVE");
            }}
          >
            REACT NATIVE
          </motion.a>
          <motion.a
            data-aos="flip-right"
            duration="3000"
            whileHover={hover}
            className="work-container__work-labels"
            href="/#"
            active={filter === "FULL STACK"}
            onClick={(e) => {
              e.preventDefault();
              setFilter("FULL STACK");
            }}
          >
            FULL STACK
          </motion.a>
          <motion.a
            data-aos="flip-right"
            duration="3000"
            whileHover={hover}
            className="work-container__work-labels"
            href="/#"
            active={filter === "OTHERS"}
            onClick={(e) => {
              e.preventDefault();
              setFilter("OTHERS");
            }}
          >
            OTHERS
          </motion.a>
        </div>
      </div>

      <div className="work-container__cards-container">
        <Card projectCard={projects} />
      </div>
    </div>
  );
}
