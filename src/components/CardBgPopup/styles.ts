import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
`;

export const PopupContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 64rem;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const PopupContent = styled.div`
  position: relative;
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.2s;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.1s ease-out;
  transform-origin: center;
  user-select: none;
  
  &.mb-4 {
    margin-bottom: 1rem;
  }
  
  &.mt-4 {
    margin-top: 1rem;
  }
`;

export const InteractionArea = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const ControlButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: rgb(96, 165, 250);
  font-size: 0.875rem;
  transition: all 0.2s;

  &:hover {
    background: rgba(59, 130, 246, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Caption = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  margin-top: 1rem;
`;