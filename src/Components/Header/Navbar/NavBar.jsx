import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import "./navbar.scss";
import Logo from "../../../assets/black_transparent.svg";
import { animateScroll as scroll } from "react-scroll";

export default function NavBar() {
  // setting the scroll Y on navigation to change background color at 95px
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    window.scrollY >= 95 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <header className="nav-container">
        <nav
          className={
            navbar ? "nav-container__nav-active" : "nav-container__nav"
          }
        >
          <div
            className="nav-container__logo-container"
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <img
              className="nav-container__logo"
              src={Logo}
              alt="navigation home logo"
            />
          </div>
        </nav>
        <SideBar />
      </header>
    </>
  );
}
