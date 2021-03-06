import React from "react";
import { Html } from "./Html";
import { Sass } from "./Sass";
import { Javascript } from "./Javascript";
import { Reactjs } from "./Reactjs";
import { Expressjs } from "./Expressjs";
import { Nodejs } from "./Nodejs";
import { Mongodb } from "./Mongodb";
import { Github } from "./Github";
import { LinkedIn } from "./LinkedIn";
import { MaterialUI } from "./Material";
import { Bem } from "./Bem";
import { ChartJS } from "./ChartJS";
import { Mapbox } from "./Mapbox";
import { ReactLeaflet } from "./ReactLeaflet";
import { Css } from "./Css";

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
    case "github":
      return <Github {...props} />;
    case "linkedin":
      return <LinkedIn {...props} />;
    case "materialui":
      return <MaterialUI {...props} />;
    case "bem":
      return <Bem {...props} />;
    case "chartjs":
      return <ChartJS {...props} />;
    case "mapbox":
      return <Mapbox {...props} />;
    case "reactleaflet":
      return <ReactLeaflet {...props} />;
    case "css":
      return <Css {...props} />;
    default:
      <div />;
  }
};

export { Icon };
