// Animation configurations and keyframes
export const animations = {
  fadeIn: {
    base: 'animate-[fade-in_0.3s_ease-out_forwards]',
    keyframes: {
      '0%': { opacity: '0', transform: 'translateY(10px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' }
    }
  },
  gradientX: {
    base: 'animate-[gradient-x_3s_ease_infinite]',
    keyframes: {
      '0%, 100%': {
        'background-position': '0% 50%',
        opacity: '0.8'
      },
      '50%': {
        'background-position': '100% 50%',
        opacity: '1'
      }
    }
  },
  pulse: {
    base: 'animate-[pulse_2s_ease-in-out_infinite]',
    keyframes: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' }
    }
  }
};