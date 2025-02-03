import React from 'react';
import './style.css';

export const Stars: React.FC = () => {
  // Generate array of 323 elements for ellipses
  const ellipses = Array.from({ length: 323 }, (_, i) => ({
    className: `ellipse-${i + 1}`,
    style: {
      backgroundColor: `#ffffff${Math.random() > 0.5 ? '4c' : '1a'}`,
      borderRadius: '1.72px',
      height: '3px',
      width: '3px',
      position: 'absolute' as const,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
    }
  }));

  return (
    <div className="stars-container">
      {ellipses.map((ellipse, index) => (
        <div
          key={index}
          className={ellipse.className}
          style={ellipse.style}
        />
      ))}
    </div>
  );
};