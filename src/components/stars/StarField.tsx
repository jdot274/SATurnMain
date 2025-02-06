import React from 'react';
import { generateStarParticles } from './utils';
import './styles.css';

export const StarField: React.FC = () => {
  const starParticles = generateStarParticles(323);

  return (
    <div className="stars-container">
      {starParticles.map((particle, index) => (
        <div
          key={index}
          className={particle.className}
          style={particle.style}
        />
      ))}
    </div>
  );
};