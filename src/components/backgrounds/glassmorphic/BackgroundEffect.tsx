import React from 'react';
import './styles.css';

interface BackgroundEffectProps {
  theme: 'dark' | 'light';
}

export const BackgroundEffect: React.FC<BackgroundEffectProps> = ({ theme }) => {
  return (
    <div data-name="background-effects-container">
      <div className={`glowing-ring ${theme === 'light' ? 'light' : ''}`} data-name="background-effect" />
      <div 
        className={`glowing-ring ${theme === 'light' ? 'light' : ''}`}
        style={{transform: 'translate(-50%, -50%) rotate(90deg)'}} 
        data-name="background-effect-rotated"
      />
    </div>
  );
};