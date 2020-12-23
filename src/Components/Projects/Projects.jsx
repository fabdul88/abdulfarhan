import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectsData } from "./ProjectsData";
import "./projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Projects() {
  const hover = {
    scale: 1.1,
    transition: { type: "spring", stiffness: 1000 },
  };
  const transition = { duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] };

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(ProjectsData);
  }, []);

  useEffect(() => {
    setProjects([]);

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
            All
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
        <div className="work-container__cards-container-sub">
          {projects.map((item) =>
            item.filtered === true ? (
              <motion.div
                className="work-container__con"
                key={item.id}
                initial={{ opacity: 0, y: "-10vw" }}
                animate={{ opacity: 1, y: "0" }}
                exit={{ opacity: 0, y: "-100vw", duration: 0.7 }}
                transition={transition}
              >
                <div className="work-container__card">
                  <div className="work-container__front">
                    <img
                      className="work-container__image-front"
                      src={item.image}
                      alt=""
                    />
                    <p className="work-container__name">{item.name}</p>
                    <hr className={item.color} />
                  </div>
                  <div className="work-container__back">
                    <p className="work-container__description">
                      {item.description}
                    </p>
                    <p className="work-container__inprocess">
                      {item.inprocess}
                    </p>
                    <motion.a
                      className="work-container__demo"
                      href={item.demo}
                      whileHover={hover}
                    >
                      VIEW DEMO
                    </motion.a>
                    <motion.a
                      className="work-container__code"
                      href={item.github}
                      whileHover={hover}
                    >
                      VIEW CODE
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}
