import React from "react";
import { Html } from "./Html";
import { Sass } from "./Sass";
import { Javascript } from "./Javascript";
import { Reactjs } from "./Reactjs";
import { Expressjs } from "./Expressjs";
import { Nodejs } from "./Nodejs";
import { Mongodb } from "./Mongodb";

const Icon = (props) => {
  // using a switch statement to add icons
  switch (props.name.toLowerCase()) {
    case "html":
      return <Html {...props} />;
    case "sass":
      return <Sass {...props} />;
    case "javascript":
      return <Javascript {...props} />;
    case "react":
      return <Reactjs {...props} />;
    case "express":
      return <Expressjs {...props} />;
    case "node":
      return <Nodejs {...props} />;
    case "mongodb":
      return <Mongodb {...props} />;
    default:
      <div />;
  }
};

export { Icon };
