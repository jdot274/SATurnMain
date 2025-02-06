import React, { useState } from 'react';

const StartButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={`
        relative px-8 py-3 text-lg font-semibold rounded-lg
        transition-all duration-300 transform hover:scale-105
        ${isActive
          ? 'text-white bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5),0_0_30px_rgba(34,197,94,0.3)]'
          : 'text-green-400 bg-green-500/10 border border-green-500/30'
        }
      `}
    >
      {/* Glow overlay */}
      <div className={`
        absolute inset-0 rounded-lg
        transition-opacity duration-300
        ${isActive
          ? 'opacity-100 animate-pulse'
          : 'opacity-0'
        }
        bg-gradient-to-r from-green-500/20 via-green-400/20 to-green-500/20
        blur-xl
      `} />
      
      {/* Button content */}
      <span className="relative z-10">Start</span>
    </button>
  );
};

export default StartButton;