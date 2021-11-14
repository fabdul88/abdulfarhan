import { v4 as uuidv4 } from 'uuid';

export const FooterInfo = [
  {
    id: uuidv4(),
    listItem: 'footer-container__social-list-item',
    listItemLink:
      'footer-container__social-list-linkedin-link footer-container__social-list-link',
    listItemHref: 'https://www.linkedin.com/in/abdul-farhan/',
    iconName: 'linkedin',
    iconClassName: 'footer-container__social-list-linkedin',
  },
  {
    id: uuidv4(),
    listItem: 'footer-container__social-list-item',
    listItemLink:
      'footer-container__social-list-twitter-link footer-container__social-list-link',
    listItemHref: 'https://twitter.com/F__Abdul',
    iconName: 'twitter',
    iconClassName: 'footer-container__social-list-twitter',
  },
  {
    id: uuidv4(),
    listItem: 'footer-container__social-list-item',
    listItemLink:
      'footer-container__social-list-github-link footer-container__social-list-link',
    listItemHref: 'https://www.github.com/fabdul88',
    iconName: 'github',
    iconClassName: 'footer-container__social-list-github',
  },
  {
    id: uuidv4(),
    listItem: 'footer-container__social-list-item',
    listItemLink:
      'footer-container__social-list-resume-link footer-container__social-list-link',
    listItemHref:
      'https://drive.google.com/uc?id=18zTY31s2bAMwhd9ZAypZd2xlWNCrr4jw&export=download',
    target: '_blank',
    rel: 'noopener noreferrer',
    iconName: 'download',
    iconClassName: 'footer-container__social-list-download',
  },
];
