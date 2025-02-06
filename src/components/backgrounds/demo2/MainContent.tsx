import React from 'react';
import { PulseElement } from './PulseElement';
import { PULSE_ANIMATION_CONFIG } from './constants';

export const MainContent: React.FC = () => {
  const { min, max } = PULSE_ANIMATION_CONFIG.contentWidthRange;

  return (
    <div className="p-6 space-y-4">
      {[...Array(8)].map((_, i) => (
        <PulseElement
          key={i}
          delay={i * PULSE_ANIMATION_CONFIG.contentDelay}
          width={`${Math.random() * (max - min) + min}%`}
          height="1.5rem"
        />
      ))}
    </div>
  );
};