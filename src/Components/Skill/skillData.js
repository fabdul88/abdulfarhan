import { v4 as uuidv4 } from 'uuid';

export const skillData = [
  {
    id: uuidv4(),
    icon: 'html',
    progressBarClassName: 'skill__experience-progress-dynamic skill__html',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'html',
    title: 'HTML5',
    description:
      'Stands for Hyper Text Markup Language. It allows the modification of web pages, as well as making adjustments to their appearance. It is also used to structure and present content for the web.',
    projectNumber: 15,
    yearsExperience: 2,
  },
  {
    id: uuidv4(),
    icon: 'css',
    progressBarClassName: 'skill__experience-progress-dynamic skill__css',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'css',
    title: 'CSS3',
    description:
      'A language that is used to illustrate the look, style, and format of a document written in any markup language. It is used to style and organize the layout of Web pages. CSS3 is the latest version of CSS. ',
    projectNumber: 5,
    yearsExperience: 1.5,
  },
  {
    id: uuidv4(),
    icon: 'bem',
    progressBarClassName: 'skill__experience-progress-dynamic skill__bem',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'bem',
    title: 'BEM',
    description:
      'BEM is a highly useful, powerful, and simple naming convention that makes your front-end code easier to read and understand, easier to work with, easier to scale, more robust and explicit, and a lot more strict.',
    projectNumber: 10,
    yearsExperience: 1,
  },
  {
    id: uuidv4(),
    icon: 'sass',
    progressBarClassName: 'skill__experience-progress-dynamic skill__sass',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'sass',
    title: 'Sass',
    description:
      'An extension of CSS that enables the use of variables, nested rules, imports and more. It also helps to keep things organized and allows you to create style sheets faster. It is compatible with all versions of CSS.',
    projectNumber: 15,
    yearsExperience: 1,
  },
  {
    id: uuidv4(),
    icon: 'javascript',
    progressBarClassName:
      'skill__experience-progress-dynamic skill__javascript',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'javascript',
    title: 'Javascript',
    description:
      'JavaScript is commonly used to make dynamic pages, whose implementations allow client-side script to interact with the user. It is an interpreted programming language with object-oriented capabilities.',
    projectNumber: 18,
    yearsExperience: 1,
  },
  {
    id: uuidv4(),
    icon: 'react',
    progressBarClassName: 'skill__experience-progress-dynamic skill__react',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'react',
    title: 'React',
    description:
      "React is a JavaScript library that is used to build web applications rendered in the client's browser with JavaScript. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
    projectNumber: 15,
    yearsExperience: 1,
  },
  {
    id: uuidv4(),
    icon: 'redux',
    progressBarClassName: 'skill__experience-progress-dynamic skill__redux',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'redux',
    title: 'Redux',
    description:
      'Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test.',
    projectNumber: 2,
    yearsExperience: 0.5,
  },
  {
    id: uuidv4(),
    icon: 'nextjs',
    progressBarClassName: 'skill__experience-progress-dynamic skill__nextjs',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'nextjs',
    title: 'Next JS',
    description:
      'Next. js is a React framework that enables several extra features, including file based routing, server-side rendering and generating static websites, that has its own SEO benefits.',
    projectNumber: 2,
    yearsExperience: 0.25,
  },
  {
    id: uuidv4(),
    icon: 'node',
    progressBarClassName: 'skill__experience-progress-dynamic skill__node',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'node',
    title: 'Node JS',
    description:
      'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
    projectNumber: 5,
    yearsExperience: 1,
  },
  {
    id: uuidv4(),
    icon: 'express',
    progressBarClassName: 'skill__experience-progress-dynamic skill__express',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'express',
    title: 'Express',
    description:
      ' Express.js, is a back end web application framework for Node.js. It is designed for building web applications and APIs.',
    projectNumber: 5,
    yearsExperience: 1,
  },
  {
    id: uuidv4(),
    icon: 'mongodb',
    progressBarClassName: 'skill__experience-progress-dynamic skill__mongodb',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'mongodb',
    title: 'Mongo DB',
    description:
      'MongoDB is classified as a NoSQL database program. NoSQL is used as an alternative to traditional relational databases. MongoDB uses JSON-like documents with optional schemas.',
    projectNumber: 2,
    yearsExperience: 1,
  },
  {
    id: uuidv4(),
    icon: 'firebase',
    progressBarClassName: 'skill__experience-progress-dynamic skill__firebase',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'firebase',
    title: 'Firebase',
    description:
      'Firebase is a cloud platform that includes services like analytics, authentication, realtime databases, configuration and file storage.',
    projectNumber: 1,
    yearsExperience: 1,
  },
  {
    id: uuidv4(),
    icon: 'styledcomponents',
    progressBarClassName: 'skill__experience-progress-dynamic skill__styled',
    iconClassName: 'skill__icons-color ',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'styledcomponents',
    title: 'Styled Components',
    description:
      'styled-components is a library for React that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS using a technique called CSS-in-JS.',
    projectNumber: 2,
    yearsExperience: 0.25,
  },
  {
    id: uuidv4(),
    icon: 'materialui',
    progressBarClassName:
      'skill__experience-progress-dynamic skill__materialui',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'materialui',
    title: 'Material UI',
    description:
      'Material-UI is simply a library that allows us to import and use different components to create a user interface in our React applications.',
    projectNumber: 2,
    yearsExperience: 0.25,
  },
  {
    id: uuidv4(),
    icon: 'git',
    progressBarClassName: 'skill__experience-progress-dynamic skill__git',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['technical'],
    name: 'git',
    title: 'Git',
    description:
      'Git is the most commonly used version control system. Git tracks the changes you make to files, and also makes collaboration easier, allowing changes by multiple people to all be merged into one source.',
    projectNumber: 27,
    yearsExperience: 1,
  },
  {
    id: uuidv4(),
    icon: 'figma',
    progressBarClassName: 'skill__experience-progress-dynamic skill__figma',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['design'],
    name: 'figma',
    title: 'Figma',
    description:
      'Figma gives you all the tools you need for the design phase of the project, including vector tools which are capable of fully-fledged illustration, as well as prototyping capabilities.',
    projectNumber: 3,
    yearsExperience: 0.5,
  },
  {
    id: uuidv4(),
    icon: 'leader',
    progressBarClassName: 'skill__experience-progress-dynamic skill__leader',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['management'],
    name: 'leader',
    title: 'Leadership',
    description:
      'Leadership is a quality that not everyone takes up voluntarily. I have been leading teams to achieve organizational goals while maintaining a healthy, safe and friendly work environment.',
    projectNumber: '-',
    yearsExperience: 2,
  },
  {
    id: uuidv4(),
    icon: 'teamwork',
    progressBarClassName: 'skill__experience-progress-dynamic skill__teamwork',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['management'],
    name: 'teamwork',
    title: 'Teamwork/Collaborate',
    description:
      'There is no progress/growth without teamwork. I believe this is a crucial skill for success, and I effectively collaborate in a team setting.',
    projectNumber: '-',
    yearsExperience: 7,
  },
  {
    id: uuidv4(),
    icon: 'language',
    progressBarClassName: 'skill__experience-progress-dynamic skill__language',
    iconClassName: 'skill__icons-color',
    iconClassNameActive: 'skill__icons-color--active',
    case: ['management'],
    name: 'language',
    title: 'Bilingual',
    description: 'I am a native speaker in both English and Swahilli. ',
    projectNumber: '-',
    yearsExperience: 'Native',
  },
];

export const category = [
  {
    id: uuidv4(),
    containerClassName: 'skill__technical-container',
    containerClassNameActive: 'skill__technical-container--active',
    iconName: 'code',
    imageClassName: 'skill__technical-icon',
    spanClassName: 'skill__technical-description-hide',
    spanClassNameActive: 'skill__technical-description--active',
    description: 'Technical',
    active: 'technical',
  },
  {
    id: uuidv4(),
    containerClassName: 'skill__design-container',
    containerClassNameActive: 'skill__design-container--active',
    iconName: 'design',
    imageClassName: 'skill__design-icon',
    spanClassName: 'skill__design-description-hide',
    spanClassNameActive: 'skill__design-description--active',
    description: 'Design',
    active: 'design',
  },
  {
    id: uuidv4(),
    containerClassName: 'skill__management-container',
    containerClassNameActive: 'skill__management-container--active',
    iconName: 'management',
    imageClassName: 'skill__management-icon',
    spanClassName: 'skill__management-description-hide',
    spanClassNameActive: 'skill__management-description--active',
    description: 'Management',
    active: 'management',
  },
];
