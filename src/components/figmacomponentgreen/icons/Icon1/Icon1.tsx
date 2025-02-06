import React from "react";

interface Props {
  className: any;
}

export const Icon1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.3333 4.16667L19.1667 10L13.3333 15.8333"
        stroke="url(#paint0_linear_2255_37)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />

      <path
        className="path"
        d="M19.1667 10H0.833344"
        stroke="url(#paint1_linear_2255_37)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />

      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_2255_37"
          x1="16.25"
          x2="16.25"
          y1="4.16667"
          y2="15.8333"
        >
          <stop className="stop" stopColor="#B4CDD9" />

          <stop className="stop" offset="1" stopColor="#2B566A" />
        </linearGradient>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_2255_37"
          x1="10"
          x2="10"
          y1="10"
          y2="11"
        >
          <stop className="stop" stopColor="#B4CDD9" />

          <stop className="stop" offset="1" stopColor="#2B566A" />
        </linearGradient>
      </defs>
    </svg>
  );
};
