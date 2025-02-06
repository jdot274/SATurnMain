import React from 'react';
import styled, { keyframes } from 'styled-components';

interface GradientCardProps {
  className?: string;
  children?: React.ReactNode;
}

const glowAnimation = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 136, 255, 0.5),
                0 0 40px rgba(0, 136, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(0, 136, 255, 0.7),
                0 0 60px rgba(0, 136, 255, 0.3);
  }
`;

const StyledGradientCard = styled.div`
  position: relative;
  width: 480px;
  height: 300px;
  padding: 24px;
  border-radius: 20px;
  background: linear-gradient(135deg, #030f16 0%, #041924 100%);
  border: 1px solid rgba(0, 136, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 136, 255, 0.5);
  animation: ${glowAnimation} 3s ease-in-out infinite;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(135deg, #0088ff 0%, #00bfff 50%, #0088ff 100%);
    padding: 1px;
    border-radius: 20px;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.8;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: 20px;
    background: linear-gradient(135deg, 
      rgba(0, 136, 255, 0.1) 0%,
      rgba(0, 191, 255, 0.05) 50%,
      rgba(0, 136, 255, 0.1) 100%
    );
  }
`;

const AnimatedButton = styled.button`
  padding: 10px 24px;
  background: linear-gradient(135deg, #0088ff 0%, #00bfff 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(135deg, #00bfff 0%, #0088ff 100%);
    padding: 1px;
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 136, 255, 0.3);
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export const GradientCard: React.FC<GradientCardProps> = ({ className, children }) => {
  return (
    <StyledGradientCard className={className}>
      {children}
    </StyledGradientCard>
  );
};

export { AnimatedButton };