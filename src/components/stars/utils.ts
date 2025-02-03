import { StarParticle } from './types';

export const generateStarParticles = (count: number): StarParticle[] => {
  return Array.from({ length: count }, (_, i) => ({
    className: `ellipse-${i + 1}`,
    style: {
      backgroundColor: `#ffffff${Math.random() > 0.5 ? '4c' : '1a'}`,
      borderRadius: '1.72px',
      height: '3px',
      width: '3px',
      position: 'absolute',
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
    }
  }));
};