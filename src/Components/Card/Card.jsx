import React from "react";
import { motion } from "framer-motion";
import "./card.scss";

export default function Card({ projectCard }) {
  const hover = {
    scale: 1.1,
    transition: { type: "spring", stiffness: 1000 },
  };
  const transition = { duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <div className="card-container">
      {projectCard.map((item) =>
        item.filtered === true ? (
          <motion.div
            className="card-container__con"
            key={item.id}
            initial={{ opacity: 0, y: "-10vw" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "-100vw", duration: 0.7 }}
            transition={transition}
          >
            <div className="card-container__card">
              <div className="card-container__front">
                <img
                  className="card-container__image-front"
                  src={item.image}
                  alt=""
                />
                <p className="card-container__name">{item.name}</p>
                <hr className={item.color} />
              </div>
              <div className="card-container__back">
                <p className="card-container__description">
                  {item.description}
                </p>
                <div className="card-container__icons">
                  <img
                    className="card-container__icons-html"
                    src={item.htmlIcon}
                    alt=""
                  />
                  <img
                    className="card-container__icons-sass"
                    src={item.sassIcon}
                    alt=""
                  />
                  <img
                    className="card-container__icons-javascript"
                    src={item.javascriptIcon}
                    alt=""
                  />
                  <img
                    className="card-container__icons-react"
                    src={item.reactIcon}
                    alt=""
                  />
                  <img
                    className="card-container__icons-node"
                    src={item.nodeIcon}
                    alt=""
                  />
                  <img
                    className="card-container__icons-express"
                    src={item.expressIcon}
                    alt=""
                  />
                  <img
                    className="card-container__icons-mongo"
                    src={item.mongodbIcon}
                    alt=""
                  />
                </div>
                <p className="card-container__inprocess">{item.inprocess}</p>
                <motion.a
                  className="card-container__demo"
                  href={item.demo}
                  whileHover={hover}
                >
                  VIEW DEMO
                </motion.a>
                <motion.a
                  className="card-container__code"
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
  );
}
