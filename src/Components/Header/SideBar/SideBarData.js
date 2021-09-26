import { v4 as uuidv4 } from "uuid";
import Home from "../../../assets/home.svg";
import About from "../../../assets/about.svg";
import Skills from "../../../assets/skills.svg";
import Projects from "../../../assets/mywork.svg";
import Contact from "../../../assets/contact.svg";

export const SideBarData = [
  {
    id: uuidv4(),
    listItemClassName: "sidebar__list-item",
    linkClassName: "sidebar__list-item-link",
    linkTo: "home",
    imgClassName: "sidebar__list-home",
    imgSrc: Home,
    imgAlt: "Home",
    descriptionClassName: "sidebar__hover-home",
    description: "HOME",
  },
  {
    id: uuidv4(),
    listItemClassName: "sidebar__list-item",
    linkClassName: "sidebar__list-item-link",
    linkTo: "about",
    imgClassName: "sidebar__list-about",
    imgSrc: About,
    imgAlt: "About",
    descriptionClassName: "sidebar__hover-about",
    description: "ABOUT",
  },
  {
    id: uuidv4(),
    listItemClassName: "sidebar__list-item",
    linkClassName: "sidebar__list-item-link",
    linkTo: "skills",
    imgClassName: "sidebar__list-skills",
    imgSrc: Skills,
    imgAlt: "Skills",
    descriptionClassName: "sidebar__hover-skills",
    description: "SKILLS",
  },
  {
    id: uuidv4(),
    listItemClassName: "sidebar__list-item",
    linkClassName: "sidebar__list-item-link",
    linkTo: "projects",
    imgClassName: "sidebar__list-work",
    imgSrc: Projects,
    imgAlt: "Projects",
    descriptionClassName: "sidebar__hover-projects",
    description: "PROJECTS",
  },
  {
    id: uuidv4(),
    listItemClassName: "sidebar__list-item",
    linkClassName: "sidebar__list-item-link",
    linkTo: "contact",
    imgClassName: "sidebar__list-contact",
    imgSrc: Contact,
    imgAlt: "Contact",
    descriptionClassName: "sidebar__hover-contact",
    description: "CONTACT",
  },
];
