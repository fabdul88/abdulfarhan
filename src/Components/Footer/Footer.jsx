import React from 'react';
import { motion } from 'framer-motion';
import './footer.scss';
import { Icon } from '../Icon/Icon';
import { FooterInfo } from './FooterInfo';

const Footer = () => {
  const hover = {
    scale: 1.1,
    transition: { type: 'spring', stiffness: 1000 },
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="footer-container">
      <div className="footer-container__sub-container">
        <section className="footer-container__copyright-container">
          <p className="footer-container__copyright">
            Designed and Built by Abdul Farhan
            <span className="footer-container__copyright-span">
              {' '}
              © 2020-{new Date().getFullYear()}{' '}
            </span>
            , All Rights Reserved
          </p>
        </section>
        <ul className="footer-container__social-list">
          {FooterInfo.map((info) => (
            <motion.li
              key={info.id}
              className={info.listItem}
              whileHover={hover}
            >
              <a
                className={info.listItemLink}
                href={info.listItemHref}
                target={info.target}
                rel={info.rel}
              >
                <Icon
                  name={info.iconName}
                  className={info.iconClassName}
                  width="35"
                  height="35"
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        className="footer-container__arrow-container"
        onClick={() => {
          scrollToTop();
        }}
        whileHover={hover}
      >
        <Icon
          name="arrow"
          className="footer-container__go-to-top"
          width="55"
          height="55"
        />
      </motion.div>
    </div>
  );
};

export { Footer };
