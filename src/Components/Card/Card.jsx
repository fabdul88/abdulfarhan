import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./card.scss";

export default function Card({ projectCard }) {
  const hover = {
    scale: 1.1,
    transition: { type: "spring", stiffness: 1000 },
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: "-10vh",
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "-10vh",
    },
  };
  const cardTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8,
  };
  return (
    <div className="card-container">
      {" "}
      <AnimatePresence>
        {projectCard.map((project) =>
          project.filtered === true ? (
            <motion.div
              key={project.id}
              className="card-container__con"
              initial="initial"
              animate="in"
              exit="out"
              variants={cardVariants}
              transition={cardTransition}
            >
              <div className="card-container__card">
                <div className="card-container__front">
                  <img
                    className="card-container__image-front"
                    src={project.image}
                    alt=""
                  />
                  <p className="card-container__name">{project.name}</p>
                  <hr className={project.color} />
                </div>
                <div className="card-container__back">
                  <p className="card-container__description">
                    {project.description}
                  </p>
                  <div className="card-container__icons">
                    <img
                      className="card-container__icons-html"
                      src={project.htmlIcon}
                      alt=""
                    />

                    <img
                      className="card-container__icons-sass"
                      src={project.sassIcon}
                      alt=""
                    />
                    <img
                      className="card-container__icons-javascript"
                      src={project.javascriptIcon}
                      alt=""
                    />
                    <img
                      className="card-container__icons-react"
                      src={project.reactIcon}
                      alt=""
                    />
                    <img
                      className="card-container__icons-node"
                      src={project.nodeIcon}
                      alt=""
                    />
                    <img
                      className="card-container__icons-express"
                      src={project.expressIcon}
                      alt=""
                    />
                    <img
                      className="card-container__icons-mongo"
                      src={project.mongodbIcon}
                      alt=""
                    />
                  </div>
                  <p className="card-container__inprocess">
                    {project.inprocess}
                  </p>
                  <motion.a
                    className="card-container__demo"
                    href={project.demo}
                    whileHover={hover}
                  >
                    VIEW DEMO
                  </motion.a>
                  <motion.a
                    className="card-container__code"
                    href={project.github}
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
        )}{" "}
      </AnimatePresence>
    </div>
  );
}
