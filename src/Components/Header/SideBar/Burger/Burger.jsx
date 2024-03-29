import React from 'react';
import { motion } from 'framer-motion';
import './burger.scss';

const Burger = ({ sidebar, display, navbar }) => {
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
      x: '-2vw',
      display: 'none',
    },
    closed: {
      x: 0,
      display: 'inline-flex',
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
        <div
          className="burger-container__menu-btn"
          onClick={() => {
            display();
          }}
        >
          <motion.div
            className={
              navbar
                ? 'burger-container__burger'
                : 'burger-container__burger-navbar'
            }
            initial={false}
            variants={topVariants}
            animate={sidebar ? 'opened' : 'closed'}
          ></motion.div>
          <motion.div
            className="burger-container__burger-center"
            initial={false}
            variants={centerVariants}
            animate={sidebar ? 'opened' : 'closed'}
          ></motion.div>
          <motion.div
            className={
              navbar
                ? 'burger-container__burger'
                : 'burger-container__burger-navbar'
            }
            initial={false}
            variants={bottomVariants}
            animate={sidebar ? 'opened' : 'closed'}
          ></motion.div>
        </div>
      </div>
    </>
  );
};
export { Burger };
