import { v4 as uuidv4 } from "uuid";
import Home from "../../../assets/home.svg";
import About from "../../../assets/about.svg";
import Skills from "../../../assets/skills.svg";
import Projects from "../../../assets/mywork.svg";
import Contact from "../../../assets/contact.svg";

export const SideBarData = [
  {
    id: uuidv4(),
    listItemClassName: "sidebar-container__list-item",
    linkClassName: "sidebar-container__list-link",
    linkTo: "home",
    imgClassName: "sidebar-container__list-home",
    imgSrc: Home,
    imgAlt: "Home",
    descriptionClassName: "sidebar-container__hover-home",
    description: "HOME",
  },
  {
    id: uuidv4(),
    listItemClassName: "sidebar-container__list-item",
    linkClassName: "sidebar-container__list-link",
    linkTo: "about",
    imgClassName: "sidebar-container__list-about",
    imgSrc: About,
    imgAlt: "About",
    descriptionClassName: "sidebar-container__hover-about",
    description: "ABOUT",
  },
  {
    id: uuidv4(),
    listItemClassName: "sidebar-container__list-item",
    linkClassName: "sidebar-container__list-link",
    linkTo: "skills",
    imgClassName: "sidebar-container__list-skills",
    imgSrc: Skills,
    imgAlt: "Skills",
    descriptionClassName: "sidebar-container__hover-skills",
    description: "SKILLS",
  },
  {
    id: uuidv4(),
    listItemClassName: "sidebar-container__list-item",
    linkClassName: "sidebar-container__list-link",
    linkTo: "projects",
    imgClassName: "sidebar-container__list-work",
    imgSrc: Projects,
    imgAlt: "Projects",
    descriptionClassName: "sidebar-container__hover-projects",
    description: "PROJECTS",
  },
  {
    id: uuidv4(),
    listItemClassName: "sidebar-container__list-item",
    linkClassName: "sidebar-container__list-link",
    linkTo: "contact",
    imgClassName: "sidebar-container__list-contact",
    imgSrc: Contact,
    imgAlt: "Contact",
    descriptionClassName: "sidebar-container__hover-contact",
    description: "CONTACT",
  },
];
