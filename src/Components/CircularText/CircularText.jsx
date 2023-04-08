import React, { useCallback, useEffect, useState } from 'react';
import { Icon } from '../Icon/Icon';
import { text } from './circularData';
import './circularText.scss';

const CircularText = () => {
  const [mouseIconSize, setMouseIconSize] = useState(false);

  // checking the size of the mouse icon
  const size = useCallback(() => {
    window.innerWidth >= 768 ? setMouseIconSize(true) : setMouseIconSize(false);
  }, []);
  // Listening for a resize and load to determine the size of the mouse icon
  useEffect(() => {
    window.addEventListener('resize', size);
    return () => window.removeEventListener('resize', size);
  }, [size]);
  useEffect(() => {
    window.addEventListener('load', size);
    return () => window.removeEventListener('load', size);
  }, [size]);

  return (
    <div className="circle">
      <div>
        <Icon
          name="mouse"
          width={mouseIconSize ? '32px' : '22px'}
          height={mouseIconSize ? '32px' : '22px'}
          fill="#bdc5d5"
        />
      </div>
      <div className="circle__one"></div>
      <div className="circle__two"></div>
      <div className="circle__three"></div>
      <div className="circle__text-wrapper">
        <p className="circle__text">
          {text.split('').map((char, i) => (
            <span
              key={i}
              className="circle__span"
              style={{ transform: `rotate(${i * 10.5}deg)` }}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default CircularText;
