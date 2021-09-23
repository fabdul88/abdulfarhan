import React from "react";

const Mapbox = ({ className, height, width }) => {
  return (
    <svg
      className={className}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
    >
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4cf3c6" />
          <stop offset="1" stopColor="#0aa2e7" />
        </linearGradient>
      </defs>
      <path d="M0 512c0 283 229 512 512 512s512-229 512-512S795 0 512 0 0 229 0 512z" />
      <path
        d="M747 277c-102-101-263-105-361-8-175 176-119 488-119 488s313 56 488-119c97-98 94-260-8-361zM621 503l-50 103-50-103-103-50 103-50 50-103 50 103 103 50z"
        fill="#323330"
      />
    </svg>
  );
};

export { Mapbox };
