import React from "react";
import styled from "styled-components";

interface Props {
  className: string;
}

const StyledIcon1 = styled.div`
  height: 20px;
  position: relative;
  width: 20px;
`;

export const Icon1 = ({ className }: Props): JSX.Element => {
  return (
    <StyledIcon1 className={`icon-1 ${className}`}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.8333 10.8333H10.8333V15.8333H9.16667V10.8333H4.16667V9.16667H9.16667V4.16667H10.8333V9.16667H15.8333V10.8333Z"
          fill="url(#paint0_linear_1_2343)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_2343"
            x1="10"
            y1="4.16667"
            x2="10"
            y2="15.8333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B4CDD9" />
            <stop offset="1" stopColor="#2B566A" />
          </linearGradient>
        </defs>
      </svg>
    </StyledIcon1>
  );
};