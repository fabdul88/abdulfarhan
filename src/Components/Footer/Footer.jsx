import React from "react";
import { motion } from "framer-motion";
import "./footer.scss";
import { Icon } from "../Icon/Icon";
import { FooterInfo } from "./FooterInfo";
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
            Abdul Farhan
            <span className="footer-container__copyright-span"> © 2021 </span>,
            All Rights Reserved
          </p>
        </div>
        <ul className="footer-container__social-list">
          {FooterInfo.map((info) => (
            <li key={info.id} className={info.listItem}>
              <motion.a
                className={info.listItemLink}
                href={info.listItemHref}
                whileHover={hover}
                target={info.target}
                rel={info.rel}
              >
                <Icon
                  name={info.iconName}
                  className={info.iconClassName}
                  width="35"
                  height="35"
                />
                <p className={info.descriptionClassName}>{info.description}</p>
              </motion.a>
            </li>
          ))}
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
