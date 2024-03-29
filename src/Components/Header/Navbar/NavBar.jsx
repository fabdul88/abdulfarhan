import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SideBar } from '../SideBar/SideBar';
import './navbar.scss';
import LogoLight from '../../../assets/white_transparent.svg';
import LogoDark from '../../../assets/black_transparent_copy.svg';

const NavBar = () => {
  const history = useHistory();
  // setting the scroll Y on navigation to change background color at 95px
  const [navbar, setNavbar] = useState(false);
  const [deskViewport, setDeskViewport] = useState(false);

  const navPosition = 95;

  const changeBackground = useCallback(() => {
    window.scrollY >= navPosition ? setNavbar(true) : setNavbar(false);
  }, []);

  const windowSize = useCallback(() => {
    window.innerWidth >= 1280 ? setDeskViewport(true) : setDeskViewport(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, [changeBackground]);

  useEffect(() => {
    window.innerWidth >= 1280 && setDeskViewport(true);
    window.addEventListener('resize', windowSize);
    return () => window.removeEventListener('resize', windowSize);
  }, [windowSize]);

  // Scroll to top for logo
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // Switch component to home if pathname is not '/'
  function switchToHome() {
    if (history.location.pathname !== '/') {
      history.push('/');
    }
    return;
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
              switchToHome();
            }}
          >
            {!deskViewport && (
              <img
                className="nav-container__logo"
                src={navbar ? LogoDark : LogoLight}
                alt="navigation home logo"
              />
            )}
            {deskViewport && (
              <img
                className="nav-container__logo"
                src={LogoDark}
                alt="navigation home logo"
              />
            )}
          </div>
        </nav>
        <SideBar navbar={navbar} />
      </header>
    </>
  );
};

export { NavBar };
