import { v4 as uuidv4 } from "uuid";
import FiTrack from "../../assets/fitrack.png";
import InStock from "../../assets/instock.png";
import Brainflix from "../../assets/brainflix.png";
import Bandsite from "../../assets/bandsite.png";
import Travelsite from "../../assets/travelsite.png";
import Coffeeshop from "../../assets/coffeeshop.png";

// Dynamically setting project cards
export const ProjectsData = [
  {
    id: uuidv4(),
    name: "FITRACK",
    category: ["all", "REACT-JS", "FULL STACK"],
    image: FiTrack,
    description:
      "A CRUD MERN stack fitness app, based on the ongoing pandemic, FiTrack helps users spending most of their time at home keep up with their mental and physical health. Built in 10 days.",
    color: "work-container__card-hr-fitrack",
    github: "https://github.com/fabdul88/Abdul-Farhan-Capstone",
  },
  {
    id: uuidv4(),
    name: "INSTOCK",
    category: ["all", "REACT-JS", "FULL STACK"],
    image: InStock,
    description:
      "A CRUD App built by a team of 5 Full Stack developers. The stack used included React, SASS, Node.js, Expres.js along-side git, Jira/Atlassian Agile Board and Figma. Built in 1 week.",
    color: "work-container__card-hr-instock",
  },
  {
    id: uuidv4(),
    name: "BRAINFLIX",
    category: ["all", "REACT-JS"],
    image: Brainflix,
    description:
      "A YouTube-like remake with some of it's characteristics and functionality, using React, SASS, Node.js and Express.js . Built in 3 sprints within three weeks.",
    color: "work-container__card-hr-brainflix",
    github: "https://github.com/fabdul88/abdul-farhan-brainflix",
  },
  {
    id: uuidv4(),
    name: "BANDSITE",
    category: ["all", "OTHERS"],
    image: Bandsite,
    description:
      "A project demonstrating responsiveness by using HTML and SASS, as well as the use of Javascript and DOM manipulation. Built in 3 sprints within three weeks.",
    color: "work-container__card-hr-bandsite",
    github: "https://github.com/fabdul88/Abdul-Farhan-bandsite",
  },
  {
    id: uuidv4(),
    name: "TRAVELSITE",
    category: ["all", "REACT-JS"],
    image: Travelsite,
    description:
      "A multi-page travel destination site built using HTML and CSS, in 1 day, now converted into a React application",
    color: "work-container__card-hr-travelsite",
    github: "https://github.com/fabdul88/Travel-Site-React",
  },
  {
    id: uuidv4(),
    name: "COFFEESHOP",
    category: ["all", "REACT-JS"],
    image: Coffeeshop,
    description:
      "My very first project, a coffee shop webpage that used HTML and CSS, now converted to a React application. ",
    color: "work-container__card-hr-coffeeshop",
    github: "https://github.com/fabdul88/Coffee-Shop-React",
  },
];
