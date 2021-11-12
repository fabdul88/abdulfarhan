import React from 'react';

const Skills = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Skills icon</title>
      <defs>
        <linearGradient id="grad" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <g>
        <path d="M30,16c0-1.969-1.431-3.611-3.307-3.94l-0.347-0.835c1.095-1.56,0.945-3.731-0.447-5.124   c-1.346-1.346-3.599-1.521-5.125-0.448l-0.835-0.346C19.61,3.431,17.969,2,16,2c-1.969,0-3.611,1.431-3.94,3.307l-0.835,0.346   C9.667,4.56,7.494,4.708,6.101,6.101c-0.756,0.755-1.172,1.76-1.172,2.829c0,0.833,0.253,1.628,0.724,2.296L5.307,12.06   C3.43,12.389,2,14.031,2,16c0,0,0,0,0,0s0,0,0,0c0,1.97,1.431,3.611,3.307,3.94l0.346,0.834c-1.094,1.561-0.945,3.732,0.448,5.125   c1.344,1.345,3.601,1.521,5.125,0.448l0.835,0.346c0.329,1.876,1.971,3.307,3.94,3.307c1.97,0,3.611-1.431,3.939-3.307l0.835-0.347   c1.559,1.095,3.73,0.947,5.125-0.447c0.756-0.756,1.172-1.76,1.172-2.829c0-0.833-0.254-1.628-0.724-2.296l0.346-0.834   C28.569,19.612,30,17.971,30,16C30,16.001,30,16.001,30,16C30,16,30,16,30,16z M26,18.002c-0.404,0-0.769,0.243-0.924,0.617   l-0.808,1.948c-0.155,0.374-0.069,0.804,0.217,1.09c0.378,0.378,0.586,0.88,0.586,1.414c0,0.535-0.208,1.037-0.586,1.415   c-0.78,0.78-2.051,0.778-2.829,0c-0.286-0.286-0.716-0.372-1.09-0.217l-1.949,0.808C18.243,25.232,18,25.597,18,26.001   c0,1.103-0.897,2-2,2c-1.103,0-2-0.897-2-2c0-0.404-0.244-0.77-0.617-0.924l-1.95-0.808c-0.375-0.155-0.803-0.069-1.09,0.217   c-0.756,0.756-2.072,0.756-2.828,0c-0.78-0.78-0.78-2.049,0-2.829c0.286-0.286,0.372-0.716,0.217-1.09l-0.808-1.948   C6.769,18.245,6.404,18.002,6,18.002c-1.103,0-2-0.897-2-2.001c0,0,0,0,0,0s0,0,0,0c0-1.103,0.897-2,2-2   c0.404,0,0.769-0.244,0.924-0.617l0.808-1.95c0.155-0.374,0.069-0.804-0.217-1.09c-0.378-0.378-0.586-0.88-0.586-1.414   c0-0.534,0.208-1.037,0.586-1.415c0.78-0.78,2.049-0.78,2.829,0c0.286,0.286,0.716,0.37,1.09,0.217l1.949-0.808   C13.756,6.769,14,6.404,14,6c0-1.103,0.897-2,2-2c1.103,0,2,0.897,2,2c0,0.404,0.244,0.769,0.617,0.924l1.95,0.808   c0.374,0.154,0.804,0.07,1.09-0.217c0.756-0.756,2.072-0.756,2.828,0c0.779,0.78,0.779,2.049,0,2.829   c-0.286,0.286-0.372,0.716-0.217,1.09l0.808,1.95C25.23,13.756,25.596,14,26,14c1.103,0,2,0.897,2,2c0,0,0,0,0,0s0,0,0,0   C28,17.104,27.103,18.002,26,18.002z" />
        <path d="M16,11c-2.757,0-5,2.243-5,5s2.243,5,5,5c0.552,0,1-0.447,1-1s-0.448-1-1-1c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3   c0,0.582-0.166,1.146-0.481,1.632c-0.301,0.463-0.169,1.082,0.295,1.383c0.463,0.301,1.082,0.17,1.383-0.295   C20.722,17.91,21,16.969,21,16C21,13.243,18.757,11,16,11z" />
      </g>
    </svg>
  );
};

export { Skills };
