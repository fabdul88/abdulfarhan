import React from "react";

const Html = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      enableBackground="new 0 0 32 32"
      id="Layer_1"
      version="1.0"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4cf3c6" />
          <stop offset="1" stopColor="#0aa2e7" />
        </linearGradient>
      </defs>
      <g>
        <polygon points="27.377,28.889 16.001,32 4.625,28.889 2,0 30.002,0  " />
        <polygon points="16,2 16,29.75 25.232,27.008 27.688,2  " />
        <polygon
          fill="#323330"
          points="24.363,6 7.607,6 8,10 8.619,17 19.503,17 19.148,20.984 16,21.99 12.857,20.984 12.648,19    8.803,19 9.262,23.987 16,25.99 22.728,23.986 23.718,13 12.252,13 12.002,10 24,10  "
        />
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  );
};

export { Html };
