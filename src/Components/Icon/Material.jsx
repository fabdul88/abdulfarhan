import React from "react";

const MaterialUI = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4cf3c6" />
          <stop offset="1" stopColor="#0aa2e7" />
        </linearGradient>
      </defs>
      <path d="M341.333333 708.693333 341.333333 655.786667 597.333333 508.16 597.333333 308.48 384 431.786667 170.666667 308.48 170.666667 554.666667 128 579.413333 85.333333 554.666667 85.333333 213.333333 130.986667 186.88 384 333.226667 551.68 236.373333 637.013333 186.88 682.666667 213.333333 682.666667 557.226667 465.92 682.666667 638.72 782.08 853.333333 658.346667 853.333333 469.333333 896 444.586667 938.666667 469.333333 938.666667 707.413333 638.72 880.64 341.333333 708.693333M938.666667 416 896 440.746667 853.333333 416 853.333333 366.08 896 341.333333 938.666667 366.08 938.666667 416Z" />
    </svg>
  );
};

export { MaterialUI };
