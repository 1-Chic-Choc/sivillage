import React from "react";

function InstarIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="24" height="24" fill="url(#pattern0_18_211)" />
      <defs>
        <pattern
          id="pattern0_18_211"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_18_211" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="image0_18_211"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default InstarIcon;
