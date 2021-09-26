import React from "react";
import "./App.scss";
import NavBar from "./Components/Header/Navbar/NavBar";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
