import { v4 as uuidv4 } from "uuid";

export const FooterInfo = [
  {
    id: uuidv4(),
    listItem: "footer-container__social-list-item",
    listItemLink: "footer-container__social-list-linkedin-link",
    listItemHref: "https://www.linkedin.com/in/abdul-farhan/",
    iconName: "linkedin",
    iconClassName: "footer-container__social-list-linkedin",
    descriptionClassName: "footer-container__social-list-text",
    description: "CONNECT WITH ME ON LINKEDIN",
  },
  {
    id: uuidv4(),
    listItem: "footer-container__social-list-item",
    listItemLink: "footer-container__social-list-github-link",
    listItemHref: "https://www.github.com/fabdul88",
    iconName: "github",
    iconClassName: "footer-container__social-list-github",
    descriptionClassName: "footer-container__social-list-text",
    description: "VIEW MY CODE ON GITHUB",
  },
  {
    id: uuidv4(),
    listItem: "footer-container__social-list-item",
    listItemLink: "footer-container__social-list-resume-link",
    listItemHref:
      "https://drive.google.com/uc?id=18zTY31s2bAMwhd9ZAypZd2xlWNCrr4jw&export=download",
    target: "_blank",
    rel: "noopener noreferrer",
    iconName: "download",
    iconClassName: "footer-container__social-list-download",
    descriptionClassName: "footer-container__social-list-text",
    description: "DOWNLOAD MY RESUME",
  },
];