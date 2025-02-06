import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  z-index: -1;
`;

export const CardBackground2: React.FC = () => {
  return (
    <StyledSvg
      viewBox="0 0 456 582"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Base gradient layer */}
      <rect width="456" height="582" rx="24" fill="url(#paint0_linear)" fillOpacity="0.65"/>

      {/* Soft glow effect */}
      <g filter="url(#filter0_f)">
        <rect x="50" y="50" width="356" height="482" rx="20" fill="url(#paint1_radial)" fillOpacity="0.65"/>
      </g>

      <defs>
        {/* Main sky blue gradient */}
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="456" y2="582" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0F51FD" stopOpacity="0.75" />
          <stop offset="0.4" stopColor="#0F51FD" stopOpacity="0.65" />
          <stop offset="0.6" stopColor="#0F51FD" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0F51FD" stopOpacity="0.45" />
        </linearGradient>

        {/* Radial gradient for glow */}
        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" 
                       gradientTransform="translate(228 291) rotate(90) scale(241 178)">
          <stop stopColor="#0F51FD" stopOpacity="0.55"/>
          <stop offset="0.5" stopColor="#0F51FD" stopOpacity="0.45"/>
          <stop offset="1" stopColor="#0F51FD" stopOpacity="0.35"/>
        </radialGradient>

        {/* Glow filter */}
        <filter id="filter0_f" x="0" y="0" width="456" height="582" filterUnits="userSpaceOnUse" 
                colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur"/>
        </filter>
      </defs>
    </StyledSvg>
  );
};