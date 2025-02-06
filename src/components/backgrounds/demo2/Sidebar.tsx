import React from 'react';
import { PulseElement } from './PulseElement';
import { PULSE_ANIMATION_CONFIG } from './constants';

export const Sidebar: React.FC = () => {
  return (
    <div className="border-r border-white/10 p-4 space-y-4">
      {[...Array(5)].map((_, i) => (
        <PulseElement
          key={i}
          delay={i * PULSE_ANIMATION_CONFIG.sidebarDelay}
          height="2.5rem"
        />
      ))}
    </div>
  );
};