import { v4 as uuidv4 } from 'uuid';
import FiTrackTablet from '../../assets/tabletFitrack.webp';
import DisneyPlusTablet from '../../assets/tabletDisneyPlus.webp';
import CovidTrackerTablet from '../../assets/tabletCovidTracker.webp';
import TraveLogTablet from '../../assets/tabletTraveLog.webp';

// Project Category Data
export const ProjectCategory = [
  {
    id: uuidv4(),
    categoryClassName: 'work-container__work-labels',
    categoryClassNameActive: 'work-container__work-labels--active',
    active: 'all',
    categoryDescription: 'All',
  },
  {
    id: uuidv4(),
    categoryClassName: 'work-container__work-labels',
    categoryClassNameActive: 'work-container__work-labels--active',
    active: 'REACT-JS',
    categoryDescription: 'React Js',
  },
  {
    id: uuidv4(),
    categoryClassName: 'work-container__work-labels',
    categoryClassNameActive: 'work-container__work-labels--active',
    active: 'NEXT-JS',
    categoryDescription: 'Next Js',
  },
  {
    id: uuidv4(),
    categoryClassName: 'work-container__work-labels',
    categoryClassNameActive: 'work-container__work-labels--active',
    active: 'FULL-STACK',
    categoryDescription: 'Full-Stack',
  },
];

// Dynamically setting project cards
export const ProjectsData = [
  {
    id: uuidv4(),
    name: 'COVID-19 DASHBOARD',
    featured: false,
    category: ['all', 'REACT-JS'],
    image: CovidTrackerTablet,
    description:
      ' A covid-19 dashboard displaying live cases, total cases, recoveries and deaths. Built with React js library, Material-UI, chart js, react-leaflet and disease.sh API for covid-19 data. ',
    icon: [
      'html',
      'css',
      'materialui',
      'javascript',
      'chartjs',
      'reactleaflet',
      'react',
    ],
    color: 'card-container__card-hr-covid',
    github: 'https://github.com/fabdul88/COVID-19-TRACKER',
    demo: 'https://covid-19-tracker-live.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Disney+',
    featured: false,
    category: ['all', 'REACT-JS'],
    image: DisneyPlusTablet,
    description:
      'A Front End React Disney plus clone using Redux and Redux toolkit for state management, styled components, and both user authentication and deployment done with Firebase.',
    icon: [
      'html',
      'styledcomponents',
      'javascript',
      'react',
      'redux',
      'firebase',
    ],
    color: 'card-container__card-hr-disneyplus',
    github: 'https://github.com/fabdul88/Redux-toolkit-Firebase',
    demo: 'https://disneyplus-live.web.app/',
  },
  {
    id: uuidv4(),
    name: 'TRAVELOG',
    featured: false,
    category: ['all', 'REACT-JS', 'FULL-STACK'],
    image: TraveLogTablet,
    description:
      'MERN stack app that enables users to keep track of their travel locations. Using authorization and react hook form with CRUD functionality, and Mapbox to display user entries as pins and information popups. ',
    icon: ['html', 'sass', 'javascript', 'react', 'mapbox', 'node', 'mongodb'],
    color: 'card-container__card-hr-travelog',
    github: 'https://github.com/fabdul88/TraveLog',
    demo: 'https://travel-log-mern.vercel.app/',
  },
  {
    id: uuidv4(),
    name: 'FITRACK',
    featured: true,
    category: ['all', 'REACT-JS', 'FULL-STACK'],
    image: FiTrackTablet,
    description:
      'A personal workout routine planner, built as a RESTful API in Node.js using express and mongoose for the backend, and react.js and redux toolkit for the frontend. The personal workout routine planner has authentication implemented with JWT and cookies, and password hashing with bcrypt.js. The database of choice was Mongo DB Atlas cloud service.',
    icon: ['html', 'sass', 'javascript', 'react', 'node', 'express', 'mongodb'],
    color: 'card-container__card-hr-fitrack',
    github: 'https://github.com/fabdul88/FiTrack',

    demo: 'https://real-red-squid-tutu.cyclic.cloud/',
  },
];
