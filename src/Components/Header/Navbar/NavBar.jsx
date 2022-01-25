import React, { useState } from 'react';
import { SideBar } from '../SideBar/SideBar';
import './navbar.scss';
import Logo from '../../../assets/black_transparent.svg';

const NavBar = () => {
  // setting the scroll Y on navigation to change background color at 95px
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    window.scrollY >= 95 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener('scroll', changeBackground);

  // Scroll to top for logo
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <header className="nav-container">
        <nav
          className={
            navbar ? 'nav-container__nav-active' : 'nav-container__nav'
          }
        >
          <div
            className="nav-container__logo-container"
            onClick={() => {
              scrollToTop();
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
};

export { NavBar };
