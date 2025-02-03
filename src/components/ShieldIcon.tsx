import React from 'react';

const ShieldIcon: React.FC = () => {
  return (
    <div className="flex justify-center w-full my-12">
      <div className="relative w-32 h-32">
        {/* Shield base with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-[25%] shadow-lg" />
        
        {/* Inner shield with darker gradient */}
        <div className="absolute inset-2 bg-gradient-to-br from-indigo-950 to-indigo-900 rounded-[25%]" />
        
        {/* Star */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 text-white/90">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>
        
        {/* Outer glow effect */}
        <div className="absolute -inset-2 bg-indigo-500/20 rounded-[25%] blur-lg animate-pulse" />
      </div>
    </div>
  );
};

export default ShieldIcon;