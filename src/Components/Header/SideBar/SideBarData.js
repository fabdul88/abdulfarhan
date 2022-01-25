import { v4 as uuidv4 } from 'uuid';

export const SideBarData = [
  {
    id: uuidv4(),
    listItemClassName: 'sidebar__list-item',
    linkClassName: 'sidebar__list-item-link',
    linkTo: 'home',
    iconClassName: 'sidebar__list-home',
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
    iconName: 'Contact',
    descriptionClassName: 'sidebar__hover-contact',
    description: 'CONTACT',
  },
];