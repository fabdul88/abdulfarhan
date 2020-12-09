import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./Components/Header/NavBar";
import Home from "./Components/Home/Home";
// import About from "./Components/About/About";
// import Skills from "./Components/Skills/Skills";
// import Projects from "./Components/Projects/Projects";
// import Contact from "./Components/Contact/Contact";
// // import Footer from "./Components/Footer/Footer";
// import { AnimatePresence } from "framer-motion";
// import ScrollToTop from "./Components/ScrollToTop/scrollToTop";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
