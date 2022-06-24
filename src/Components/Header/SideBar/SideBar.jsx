import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import './sidebar.scss';
import { Burger } from './Burger/Burger';
import { Link as Scroll } from 'react-scroll';
import { SideBarData } from './SideBarData';
import { Icon } from '../../Icon/Icon';

const SideBar = () => {
  const history = useHistory();
  // Setting initial sidebar display state to be false
  const [sidebar, setSidebar] = useState(false);

  // Defining a function to toggle between false and true states
  const showSidebar = () => setSidebar(!sidebar);

  // Hover animations
  const hover = {
    scale: 1.15,
    textShadow: '0 0 8px rgb(0,0,0)',
    transition: { type: 'spring', stiffness: 1000 },
  };

  return (
    <aside className="sidebar">
      <div
        // setting either one of the class depending on the sidebar state
        className={
          sidebar
            ? 'sidebar__sidebar-container--active'
            : 'sidebar__sidebar-container'
        }
      >
        <ul className="sidebar__list">
          {/* conditionally render navbar based on url path */}
          {history.location.pathname === '/' ? (
            <>
              {SideBarData.map((item) => (
                <motion.li
                  key={item.id}
                  className={item.listItemClassName}
                  whileHover={hover}
                >
                  <Scroll
                    className={item.linkClassName}
                    to={item.linkTo}
                    smooth={true}
                    spy={true}
                    hashSpy={true}
                    offset={-95}
                    duration={1000}
                  >
                    <Icon
                      name={item.iconName}
                      className={
                        item.iconName.toLowerCase() ===
                        window.location.hash.replace('#', '')
                          ? item.iconClassNameActive
                          : item.iconClassName
                      }
                      width="35"
                      height="35"
                    />
                    <span
                      className={item.descriptionClassName}
                      onClick={() => {
                        showSidebar();
                      }}
                    >
                      {item.description}
                    </span>
                  </Scroll>
                </motion.li>
              ))}
              <motion.li className="sidebar__list-item" whileHover={hover}>
                <Link className="sidebar__list-item-link" to="/blog">
                  <Icon
                    name="typewriter"
                    className="sidebar__list-contact"
                    width="35"
                    height="35"
                  />
                  <span
                    className="sidebar__hover-contact"
                    onClick={() => {
                      showSidebar();
                    }}
                  >
                    BLOG
                  </span>
                </Link>
              </motion.li>
            </>
          ) : (
            <>
              <motion.li className="sidebar__list-item" whileHover={hover}>
                <Link className="sidebar__list-item-link" to="/blog">
                  <Icon
                    name="typewriter"
                    className="sidebar__list-contact"
                    width="35"
                    height="35"
                  />
                  <span
                    className="sidebar__hover-contact"
                    onClick={() => {
                      showSidebar();
                    }}
                  >
                    BLOG
                  </span>
                </Link>
              </motion.li>
              <motion.li className="sidebar__list-item" whileHover={hover}>
                <Link className="sidebar__list-item-link" to="/">
                  <Icon
                    name="home"
                    className="sidebar__list-contact"
                    width="35"
                    height="35"
                  />
                  <span
                    className="sidebar__hover-contact"
                    onClick={() => {
                      showSidebar();
                    }}
                  >
                    HOME
                  </span>
                </Link>
              </motion.li>
            </>
          )}
        </ul>
      </div>
      <div
        onClick={() => {
          showSidebar();
        }}
        className={sidebar ? 'sidebar__backdrop' : 'sidebar__backdrop-false'}
      />
      <Burger sidebar={sidebar} display={showSidebar} />
    </aside>
  );
};

export { SideBar };
