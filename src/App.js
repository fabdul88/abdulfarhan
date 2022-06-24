import React, { useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './Components/Header/Navbar/NavBar';
import { Home } from './Components/Home/Home';
import { Blog } from './Components/Blog/Blog';
import { CaseStudy } from './Components/CaseStudy/CaseStudy';

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
      <Router>
        <NavBar />
        <div id="progressBarWrapper" className="App__progress-bar-wrapper">
          <div
            id="progressBar"
            className="App__progress-bar"
            style={{ width: `${scrollTop}%` }}
          />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/projects/:projectname/case-study"
            component={CaseStudy}
          />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
