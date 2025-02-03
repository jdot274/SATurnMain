import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;

export const CardBackground: React.FC = () => {
  return (
    <StyledSvg
      viewBox="0 0 456 582"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Base layer with blur */}
      <g filter="url(#filter0_b)">
        <rect width="456" height="582" rx="24" fill="url(#paint0_linear)" fillOpacity="0.85"/>
        <rect width="456" height="582" rx="24" fill="url(#pattern0)" fillOpacity="0.15"/>
      </g>

      {/* Multiple layered outlines */}
      <rect x="1" y="1" width="454" height="580" rx="23" stroke="url(#paint1_linear)" strokeOpacity="0.85" strokeWidth="1"/>
      <rect x="1.5" y="1.5" width="453" height="579" rx="22.5" stroke="url(#paint2_linear)" strokeOpacity="0.75" strokeWidth="1"/>
      <rect x="2" y="2" width="452" height="578" rx="22" stroke="url(#paint3_linear)" strokeOpacity="0.65" strokeWidth="1"/>

      {/* Highlight edges */}
      <path d="M24 1H432C444.15 1 454 10.8497 454 23V559C454 571.15 444.15 581 432 581H24C11.8497 581 2 571.15 2 559V23C2 10.8497 11.8497 1 24 1Z" 
            stroke="url(#paint4_linear)" strokeWidth="1" strokeOpacity="0.85"/>

      <defs>
        <filter id="filter0_b" x="-100" y="-100" width="656" height="782" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="60"/>
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
        </filter>

        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#image0" transform="matrix(0.00354532 0 0 0.00277778 -0.350877 0)"/>
        </pattern>
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="456" y2="582" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0F51FD" stopOpacity="0.95"/>
          <stop offset="0.3" stopColor="#0F51FD" stopOpacity="0.85"/>
          <stop offset="0.6" stopColor="#2563EB" stopOpacity="0.75"/>
          <stop offset="1" stopColor="#3B82F6" stopOpacity="0.65"/>
        </linearGradient>

        {/* First outline gradient */}
        <linearGradient id="paint1_linear" x1="0" y1="0" x2="456" y2="582" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0F51FD" stopOpacity="0.95"/>
          <stop offset="0.4" stopColor="#2563EB" stopOpacity="0.85"/>
          <stop offset="0.7" stopColor="#3B82F6" stopOpacity="0.75"/>
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.65"/>
        </linearGradient>

        {/* Second outline gradient */}
        <linearGradient id="paint2_linear" x1="456" y1="0" x2="0" y2="582" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0F51FD" stopOpacity="0.85"/>
          <stop offset="0.5" stopColor="#2563EB" stopOpacity="0.65"/>
          <stop offset="1" stopColor="#3B82F6" stopOpacity="0.85"/>
        </linearGradient>

        {/* Third outline gradient */}
        <linearGradient id="paint3_linear" x1="228" y1="0" x2="228" y2="582" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.4"/>
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.1"/>
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.4"/>
        </linearGradient>

        {/* Edge highlight gradient */}
        <linearGradient id="paint4_linear" x1="228" y1="1" x2="228" y2="581" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.95"/>
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.2"/>
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.95"/>
        </linearGradient>
      </defs>
    </StyledSvg>
  );
};