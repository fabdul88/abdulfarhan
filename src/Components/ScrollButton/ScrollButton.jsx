import React, { useState, useEffect, useCallback } from 'react';
import './scrollButton.scss';
import { Icon } from '../Icon/Icon';

const ScrollButton = () => {
  const [scrollState, setScrollState] = useState(null);

  const headerPosition = 400;

  // Memoizing the position of the scrollY axis
  const position = useCallback(() => {
    if (!scrollState && window.scrollY > headerPosition) {
      setScrollState(true);
    } else if (scrollState && window.scrollY <= headerPosition) {
      setScrollState(false);
    }
  }, [scrollState]);

  useEffect(() => {
    window.addEventListener('scroll', position);
    return () => window.removeEventListener('scroll', position);
  }, [position]);

  const btnFunction = () => {
    if (window.scrollY > headerPosition) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setScrollState(false);
    }
  };

  return (
    scrollState && (
      <div className="scrollBtn" onClick={btnFunction}>
        <Icon
          name="arrow"
          className="scrollBtn__icon"
          width="55"
          height="55"
          outerFill="none"
          innerFill="#e31b6d"
        />
      </div>
    )
  );
};

export default ScrollButton;
