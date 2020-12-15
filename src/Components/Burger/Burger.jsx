import React, { useState } from "react";
import { motion } from "framer-motion";
import "./burger.scss";
export default function Burger({ display }) {
  const [isOpen, setIsOpen] = useState(false);

  const topVariants = {
    opened: {
      rotate: 45,
      y: 5,
    },
    closed: {
      rotate: 0,
    },
  };

  const centerVariants = {
    opened: {
      x: "-100vw",
      display: "none",
    },
    closed: {
      x: 0,
      display: "inline-flex",
    },
  };

  const bottomVariants = {
    opened: {
      rotate: -45,
      y: 0,
    },
    closed: {
      rotate: 0,
    },
  };

  return (
    <>
      <div className="burger-container">
        <div className="burger-container__menu-btn">
          <motion.div
            className="burger-container__burger"
            initial={false}
            variants={topVariants}
            animate={isOpen ? "opened" : "closed"}
            onClick={() => {
              display();
              setIsOpen((state) => !state);
            }}
          ></motion.div>
          <motion.div
            className="burger-container__burger-center"
            initial={false}
            variants={centerVariants}
            animate={isOpen ? "opened" : "closed"}
            onClick={() => {
              display();
              setIsOpen((state) => !state);
            }}
          ></motion.div>
          <motion.div
            className="burger-container__burger"
            initial={false}
            variants={bottomVariants}
            animate={isOpen ? "opened" : "closed"}
            onClick={() => {
              display();
              setIsOpen((state) => !state);
            }}
          ></motion.div>
        </div>
      </div>
    </>
  );
}
