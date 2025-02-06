import React from 'react';
import { cn } from '@/lib/utils';
import type { PulseElementProps } from './types';
import { pulseAnimation } from './animations';

export const PulseElement: React.FC<PulseElementProps> = ({ delay, width, height }) => {
  return (
    <div 
      className={cn(
        "bg-white/5 rounded-lg",
        pulseAnimation.base
      )}
      style={{ 
        width,
        height,
        animationDelay: `${delay}s` 
      }}
    />
  );
};