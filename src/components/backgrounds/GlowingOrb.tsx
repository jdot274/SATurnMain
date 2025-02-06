import React from 'react';

export const GlowingOrb: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-[600px] h-[600px]">
        {/* Main glow */}
        <div className="absolute inset-0 bg-purple-600/30 rounded-full blur-[100px] animate-pulse" />
        
        {/* Inner glow */}
        <div className="absolute inset-[25%] bg-purple-400/40 rounded-full blur-[80px] animate-pulse" />
        
        {/* Core */}
        <div className="absolute inset-[40%] bg-white/50 rounded-full blur-[60px] animate-pulse" />
      </div>
    </div>
  );
};