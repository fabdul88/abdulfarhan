import { v4 as uuidv4 } from "uuid";
import FiTrack from "../../assets/fitrack.png";
import Brainflix from "../../assets/brainflix.png";
import Travelog from "../../assets/travelog.png";
import Covid from "../../assets/covid.png";

// Dynamically setting project cards
export const ProjectsData = [
  {
    id: uuidv4(),
    name: "FITRACK",
    category: ["all", "REACT-JS", "FULL STACK"],
    image: FiTrack,
    description:
      "A MERN stack, CRUD operations, SPA, based on the ongoing pandemic, FiTrack is a fitness application that helps users spending most of their time at home keep up with their mental and physical health. Built in 10 days.",
    icon: ["html", "sass", "javascript", "react", "node", "express", "mongodb"],
    color: "card-container__card-hr-fitrack",
    github: "https://github.com/fabdul88/FiTrack",

    demo: "https://fitrack-mern.herokuapp.com/",
  },
  {
    id: uuidv4(),
    name: "BRAINFLIX",
    category: ["all", "REACT-JS"],
    image: Brainflix,
    description:
      "A YouTube-like remake with some of it's characteristics and functionality, using React, SASS, Node.js and Express.js . Built in 3 sprints within three weeks.",
    icon: ["html", "sass", "javascript", "react", "node", "express"],
    color: "card-container__card-hr-brainflix",
    github: "https://github.com/fabdul88/Brainflix",
    demo: "https://brainflix-react.herokuapp.com/",
  },
  {
    id: uuidv4(),
    name: "TRAVELOG",
    category: ["all", "REACT-JS", "FULL STACK"],
    image: Travelog,
    description:
      "A MERN stack travel log where the user can keep track of their travel locations. Using authorization and react hook form to log entries, mapbox and react map GL wrapper for mapbox. ",
    icon: ["html", "sass", "javascript", "react", "mapbox", "node", "mongodb"],
    color: "card-container__card-hr-travelog",
    github: "https://github.com/fabdul88/TraveLog",
    demo: "https://travelog-live.herokuapp.com/",
  },
  {
    id: uuidv4(),
    name: "COVID-19 DASHBOARD",
    category: ["all", "REACT-JS"],
    image: Covid,
    description:
      " A covid-19 dashboard displaying live cases, total cases, recoveries and deaths. Built with React js library, Material-UI, chart js, react-leaflet and disease.sh API for covid-19 data. ",
    icon: [
      "html",
      "css",
      "materialui",
      "javascript",
      "chartjs",
      "reactleaflet",
      "react",
    ],
    color: "card-container__card-hr-covid",
    github: "https://github.com/fabdul88/COVID-19-TRACKER",
    demo: "https://covid-19-tracker-live.herokuapp.com/",
  },
];
