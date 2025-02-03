import React from "react";
import styled from "styled-components";

interface Props {
  className: string;
}

const StyledIcon2 = styled.div`
  height: 20px;
  position: relative;
  width: 20px;
`;

export const Icon2 = ({ className }: Props): JSX.Element => {
  return (
    <StyledIcon2 className={`icon-2 ${className}`}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
          fill="url(#paint0_linear_1_2343)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_2343"
            x1="10"
            y1="0"
            x2="10"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B4CDD9" />
            <stop offset="1" stopColor="#2B566A" />
          </linearGradient>
        </defs>
      </svg>
    </StyledIcon2>
  );
};