import React from "react";

function SearchIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_18_288)">
        <mask
          id="mask0_18_288"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <path d="M0 0H32V32H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_18_288)">
          <path
            d="M28 28L20.408 20.408M14 23.5C19.247 23.5 23.5 19.247 23.5 14C23.5 8.753 19.247 4.5 14 4.5C8.753 4.5 4.5 8.753 4.5 14C4.5 19.247 8.753 23.5 14 23.5Z"
            stroke="black"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_18_288">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SearchIcon;
