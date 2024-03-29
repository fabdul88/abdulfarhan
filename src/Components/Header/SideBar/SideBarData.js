import { v4 as uuidv4 } from 'uuid';

export const SideBarData = [
  {
    id: uuidv4(),
    listItemClassName: 'sidebar__list-item',
    linkClassName: 'sidebar__list-item-link',
    linkTo: 'home',
    iconClassName: 'sidebar__list-home',
    iconClassNameActive: 'sidebar__list-home-active',
    iconName: 'Home',
    descriptionClassName: 'sidebar__hover-home',
    description: 'HOME',
  },
  {
    id: uuidv4(),
    listItemClassName: 'sidebar__list-item',
    linkClassName: 'sidebar__list-item-link',
    linkTo: 'about',
    iconClassName: 'sidebar__list-about',
    iconClassNameActive: 'sidebar__list-about-active',
    iconName: 'About',
    descriptionClassName: 'sidebar__hover-about',
    description: 'ABOUT',
  },
  {
    id: uuidv4(),
    listItemClassName: 'sidebar__list-item',
    linkClassName: 'sidebar__list-item-link',
    linkTo: 'skills',
    iconClassName: 'sidebar__list-skills',
    iconClassNameActive: 'sidebar__list-skills-active',
    iconName: 'Skills',
    descriptionClassName: 'sidebar__hover-skills',
    description: 'SKILLS',
  },
  {
    id: uuidv4(),
    listItemClassName: 'sidebar__list-item',
    linkClassName: 'sidebar__list-item-link',
    linkTo: 'projects',
    iconClassName: 'sidebar__list-work',
    iconClassNameActive: 'sidebar__list-work-active',
    iconName: 'Projects',
    descriptionClassName: 'sidebar__hover-projects',
    description: 'PROJECTS',
  },
  {
    id: uuidv4(),
    listItemClassName: 'sidebar__list-item',
    linkClassName: 'sidebar__list-item-link',
    linkTo: 'contact',
    iconClassName: 'sidebar__list-contact',
    iconClassNameActive: 'sidebar__list-contact-active',
    iconName: 'Contact',
    descriptionClassName: 'sidebar__hover-contact',
    description: 'CONTACT',
  },
];
