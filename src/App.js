import React, { useEffect, useState } from 'react';
import './App.scss';
import NavBar from './Components/Header/Navbar/NavBar';
import Home from './Components/Home/Home';

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div id="progressBarWrapper" className="App__progress-bar-wrapper">
        <div
          id="progressBar"
          className="App__progress-bar"
          style={{ width: `${scrollTop}%` }}
        />
      </div>
      <Home />
    </div>
  );
}

export default App;
