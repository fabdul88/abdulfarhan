import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './footer.scss';
import { Icon } from '../Icon/Icon';
import { FooterInfo } from './FooterInfo';
import ScrollButton from '../ScrollButton/ScrollButton';

const Footer = () => {
  const [githubStats, setGithubStats] = useState({
    forks: null,
    stars: null,
  });

  const hover = {
    scale: 1.1,
    transition: { type: 'spring', stiffness: 1000 },
  };

  useEffect(() => {
    fetch('https://api.github.com/repos/fabdul88/abdulfarhan')
      .then((response) => response.json())
      .then((data) =>
        setGithubStats({
          forks: data.forks_count,
          stars: data.stargazers_count,
        })
      )
      .catch((e) => console.error(e));
  }, []);

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

        <div
          className="
        footer-container__github-stat-container"
        >
          <a
            href="https://github.com/fabdul88/abdulfarhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer-container__github-star-span">
              <Icon
                name="star"
                className="footer-container__star"
                width="11"
                height="11"
              />
              {githubStats.stars}
            </span>
          </a>
          <a
            href="https://github.com/fabdul88/abdulfarhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer-container__github-forked-span">
              <Icon
                name="forked"
                className="footer-container__forked"
                width="11"
                height="11"
              />
              {githubStats.forks}
            </span>
          </a>
        </div>
      </div>
      <div className="footer-container__arrow-container">
        <ScrollButton />
      </div>
    </div>
  );
};

export { Footer };
