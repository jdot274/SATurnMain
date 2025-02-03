import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  fill: none;
  height: 20px;
  width: 20px;
`;

interface Props {
  className: any;
}

export const Icon = ({ className }: Props): JSX.Element => {
  return (
    <StyledSvg
      className={`icon ${className}`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_2346)">
        <path
          className="path"
          d="M10 0.833336C10.5 0.833336 10.9167 1.16667 11 1.66667L12 5.58334C12.3333 6.75 13.25 7.75 14.4167 8L18.3333 9C18.8333 9.08334 19.1667 9.58334 19.1667 10C19.1667 10.5 18.8333 10.9167 18.3333 11L14.4167 12C13.25 12.3333 12.25 13.25 12 14.4167L11 18.3333C10.9167 18.8333 10.4167 19.1667 10 19.1667C9.50001 19.1667 9.08334 18.8333 9.00001 18.3333L8.00001 14.4167C7.66668 13.25 6.75001 12.25 5.58334 12L1.66668 11C1.16668 10.9167 0.833344 10.4167 0.833344 10C0.833344 9.5 1.16668 9.08334 1.66668 9L5.58334 8C6.75001 7.66667 7.75001 6.75 8.00001 5.58334L9.00001 1.66667C9.08334 1.16667 9.50001 0.833336 10 0.833336Z"
          stroke="url(#paint0_linear_1_2346)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />

        <path
          className="path"
          d="M17.0833 19.1667C18.2339 19.1667 19.1667 18.2339 19.1667 17.0833C19.1667 15.9327 18.2339 15 17.0833 15C15.9327 15 15 15.9327 15 17.0833C15 18.2339 15.9327 19.1667 17.0833 19.1667Z"
          stroke="url(#paint1_linear_1_2346)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />

        <path
          className="path"
          d="M3.33334 1.66666V5"
          stroke="url(#paint2_linear_1_2346)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />

        <path
          className="path"
          d="M4.99999 3.33334H1.66666"
          stroke="url(#paint3_linear_1_2346)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
      </g>

      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1_2346"
          x1="10"
          x2="10"
          y1="0.833336"
          y2="19.1667"
        >
          <stop className="stop" stopColor="#B4CDD9" />

          <stop className="stop" offset="1" stopColor="#2B566A" />
        </linearGradient>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_1_2346"
          x1="17.0833"
          x2="17.0833"
          y1="15"
          y2="19.1667"
        >
          <stop className="stop" stopColor="#B4CDD9" />

          <stop className="stop" offset="1" stopColor="#2B566A" />
        </linearGradient>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_1_2346"
          x1="3.83334"
          x2="3.83334"
          y1="1.66666"
          y2="5"
        >
          <stop className="stop" stopColor="#B4CDD9" />

          <stop className="stop" offset="1" stopColor="#2B566A" />
        </linearGradient>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint3_linear_1_2346"
          x1="3.33332"
          x2="3.33332"
          y1="3.33334"
          y2="4.33334"
        >
          <stop className="stop" stopColor="#B4CDD9" />

          <stop className="stop" offset="1" stopColor="#2B566A" />
        </linearGradient>

        <clipPath className="clip-path" id="clip0_1_2346">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </StyledSvg>
  );
};
