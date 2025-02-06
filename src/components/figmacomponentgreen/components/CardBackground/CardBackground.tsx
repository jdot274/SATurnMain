import React from 'react';
import styled from 'styled-components';

interface CardBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const StyledCardBackground = styled.div`
  position: relative;
  width: 480px;
  height: 300px;
  z-index: 1;
  padding: 1px;
  border-radius: 20px;
  background: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    background: linear-gradient(
      135deg,
      transparent 0%,
      #0088ff 50%,
      transparent 100%
    );
    border-radius: 20px;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: #030D12;
    border-radius: 20px;
    z-index: -1;
    filter: blur(8px);
  }

  .card-content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    padding: 24px;
    background-color: #030f16;
    border: 1px solid rgba(0, 136, 255, 0.1);
    border-radius: 16px;
    box-shadow: inset 0px 0px 32px #04161f, 0px 2px 4px #030d12;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -2px;
      right: 40px;
      width: 120px;
      height: 1px;
      background: #0088ff;
      box-shadow: 0 0 8px rgba(0, 136, 255, 0.6);
      z-index: 3;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -2px;
      transform: translateY(-50%);
      width: 2px;
      height: 180px;
      background: #0088ff;
      box-shadow: 0 0 8px rgba(0, 136, 255, 0.6);
      z-index: 3;
    }
  }
`;

export const CardBackground: React.FC<CardBackgroundProps> = ({ className, children }) => {
  return (
    <StyledCardBackground className={className}>
      <div className="card-content">
        {children}
      </div>
    </StyledCardBackground>
  );
};