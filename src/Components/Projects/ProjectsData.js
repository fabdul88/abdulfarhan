import { v4 as uuidv4 } from "uuid";
import FiTrack from "../../assets/fitrack.png";
import Brainflix from "../../assets/brainflix.png";
import Bandsite from "../../assets/bandsite.png";
import Travelog from "../../assets/travelog.png";
import html from "../../assets/HTML5-icon.svg";
import sass from "../../assets/Sass-icon.svg";
import javascript from "../../assets/javascript-icon.svg";
import react from "../../assets/react-icon.svg";
import node from "../../assets/node-icon.svg";
import mongodb from "../../assets/mongodb-icon.svg";
import express from "../../assets/expressjs-icon.svg";

// Dynamically setting project cards
export const ProjectsData = [
  {
    id: uuidv4(),
    name: "FITRACK",
    category: ["all", "REACT-JS", "FULL STACK"],
    image: FiTrack,
    description:
      "A MERN stack, CRUD operations, SPA, based on the ongoing pandemic, FiTrack is a fitness application that helps users spending most of their time at home keep up with their mental and physical health. Built in 10 days.",
    htmlIcon: html,
    sassIcon: sass,
    javascriptIcon: javascript,
    reactIcon: react,
    nodeIcon: node,
    expressIcon: express,
    mongodbIcon: mongodb,
    color: "card-container__card-hr-fitrack",
    github: "https://github.com/fabdul88/fitrack-mern",

    demo: "https://fitrack-mern.herokuapp.com/",
  },
  {
    id: uuidv4(),
    name: "BRAINFLIX",
    category: ["all", "REACT-JS"],
    image: Brainflix,
    description:
      "A YouTube-like remake with some of it's characteristics and functionality, using React, SASS, Node.js and Express.js . Built in 3 sprints within three weeks.",
    htmlIcon: html,
    sassIcon: sass,
    javascriptIcon: javascript,
    reactIcon: react,
    nodeIcon: node,
    expressIcon: express,
    color: "card-container__card-hr-brainflix",
    github: "https://github.com/fabdul88/abdul-farhan-brainflix",
    demo: "https://brainflix-react.herokuapp.com/",
  },
  {
    id: uuidv4(),
    name: "BANDSITE",
    category: ["all", "OTHERS"],
    image: Bandsite,
    description:
      "A project demonstrating responsiveness by using HTML and SASS, as well as the use of Javascript and DOM manipulation. Built in 3 sprints within three weeks.",
    htmlIcon: html,
    sassIcon: sass,
    javascriptIcon: javascript,
    color: "card-container__card-hr-bandsite",
    github: "https://github.com/fabdul88/Abdul-Farhan-bandsite",
    demo: "https://bandsite-pro.herokuapp.com/",
  },
  {
    id: uuidv4(),
    name: "TRAVELOG",
    category: ["all", "REACT-JS", "FULL STACK"],
    image: Travelog,
    description:
      "A MERN stack travel log where the user can keep track of their travel locations. Using authorization and react hook form to log entries, mapbox and react map GL wrapper for mapbox. ",
    htmlIcon: html,
    sassIcon: sass,
    javascriptIcon: javascript,
    reactIcon: react,
    nodeIcon: node,
    expressIcon: express,
    mongodbIcon: mongodb,
    color: "card-container__card-hr-travelog",
    github: "https://github.com/fabdul88/MERN-Travel-log",
    demo: "https://travelog-live.herokuapp.com/",
  },
];
