import React from "react";

interface IconProps {
  size?: number | string;
  className?: string;
}

export function LinkedIn({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      version="1.1"
      className={`icon ${className}`}
    >
      <title>icon / linkedin</title>
      <g
        id="icon-/-linkedin"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M19,19 L16.1157623,19 L16.1157623,14.2549376 C16.1157623,13.1234435 16.0960332,11.6679351 14.6159425,11.6679351 C13.1142308,11.6679351 12.8836972,12.9003819 12.8836972,14.1730111 L12.8836972,19 L10,19 L10,9.24265572 L12.7681601,9.24265572 L12.7681601,10.5757713 L12.8068076,10.5757713 C13.1922014,9.80861577 14.1336596,9 15.5376715,9 C18.4604216,9 19,11.0210425 19,13.6480853 L19,19 Z M6.50060572,8 C5.67125666,8 5,7.32780133 5,6.49957601 C5,5.67207753 5.67125666,5 6.50060572,5 C7.32777419,5 8,5.67207753 8,6.49957601 C8,7.32780133 7.32777419,8 6.50060572,8 Z M8,19 L5,19 L5,9 L8,9 L8,19 Z M20.5196245,2 L3.47607011,2 C2.66164829,2 2,2.64569444 2,3.44125 L2,20.5570833 C2,21.3536111 2.66164829,22 3.47607011,22 L20.5196245,22 C21.3354351,22 22,21.3536111 22,20.5570833 L22,3.44125 C22,2.64569444 21.3354351,2 20.5196245,2 Z"
          id="Fill-1"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
}
