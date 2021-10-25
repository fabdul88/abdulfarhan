import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './sidebar.scss';
import Burger from './Burger/Burger';
import { Link } from 'react-scroll';
import { SideBarData } from './SideBarData';
import { Icon } from '../../Icon/Icon';

export default function SideBar() {
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
          {SideBarData.map((item) => (
            <motion.li
              key={item.id}
              className={item.listItemClassName}
              whileHover={hover}
            >
              <Link
                className={item.linkClassName}
                to={item.linkTo}
                smooth={true}
                offset={-95}
                duration={1000}
              >
                <Icon
                  name={item.iconName}
                  className={item.iconClassName}
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
              </Link>
            </motion.li>
          ))}
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
}
