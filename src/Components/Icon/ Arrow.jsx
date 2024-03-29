import React from 'react';

const Arrow = ({ className, width, height, outerFill, innerFill }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
    >
      <title>Arrow icon</title>
      <defs>
        <linearGradient id="arrow" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <title />
      <g>
        <path
          fill={outerFill}
          d="M16,1A15,15,0,1,1,1,16,15,15,0,0,1,16,1Zm0,28A13,13,0,1,0,3,16,13,13,0,0,0,16,29Z"
        />
        <path
          fill={innerFill}
          d="M10.41,12.13,16,17.71l5.59-5.58a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.41L16.64,19.9a.91.91,0,0,1-1.28,0L9,13.54a1,1,0,0,1,0-1.41H9A1,1,0,0,1,10.41,12.13Z"
        />
      </g>
    </svg>
  );
};

export { Arrow };
