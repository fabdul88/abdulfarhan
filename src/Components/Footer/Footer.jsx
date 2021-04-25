import React from "react";
import { motion } from "framer-motion";
import "./footer.scss";
import { Icon } from "../Icon/Icon";
import GoToTop from "../../assets/go-to-top.svg";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const hover = {
    scale: 1.1,
    transition: { type: "spring", stiffness: 1000 },
  };

  return (
    <div className="footer-container">
      <div>
        <div className="footer-container__copyright-container">
          <p className="footer-container__copyright">
            ABDUL FARHAN
            <span className="footer-container__copyright-span"> © 2021</span>
          </p>
        </div>
        <ul className="footer-container__social-list">
          <li className="footer-container__social-list-item">
            <motion.a
              className="footer-container__social-list-linkedin-link"
              href="https://www.linkedin.com/in/abdul-farhan-9bba3b1b3"
              whileHover={hover}
            >
              <Icon
                name="linkedin"
                className="footer-container__social-list-linkedin"
                width="35"
                height="35"
              />
              <p className="footer-container__social-list-text">
                CONNECT WITH ME ON LINKEDIN
              </p>
            </motion.a>
          </li>

          <li className="footer-container__social-list-item">
            <motion.a
              className="footer-container__social-list-github-link"
              href="https://www.github.com/fabdul88"
              whileHover={hover}
            >
              <Icon
                name="github"
                className="footer-container__social-list-github"
                width="35"
                height="35"
              />
              <p className="footer-container__social-list-text">
                VIEW MY CODE ON GITHUB
              </p>
            </motion.a>
          </li>
        </ul>
      </div>
      <motion.img
        whileHover={hover}
        className="footer-container__go-to-top"
        src={GoToTop}
        alt="Go to top of page"
        onClick={() => {
          scroll.scrollToTop();
        }}
      />
    </div>
  );
}
