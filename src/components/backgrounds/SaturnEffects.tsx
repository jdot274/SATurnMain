import React from 'react';

export const SaturnEffects: React.FC = () => {
  return (
    <>
      {/* Saturn Ring Effect */}
      <div className="absolute w-[140vh] h-[140vh] -top-[60vh] left-[50%] transform -translate-x-1/2 pointer-events-none">
        <div className="absolute inset-[-10%] rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-blue-600/40
                       blur-2xl animate-pulse shadow-[0_0_100px_rgba(139,92,246,0.3)]" 
                       style={{ clipPath: 'ellipse(50% 15% at 50% 50%)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30
                       blur-xl animate-pulse delay-75 shadow-[0_0_80px_rgba(59,130,246,0.3)]" 
                       style={{ clipPath: 'ellipse(45% 12% at 50% 50%)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20
                       blur-lg animate-pulse delay-150" 
                       style={{ clipPath: 'ellipse(40% 10% at 50% 50%)' }} />
        </div>
      </div>

      {/* Saturn Sphere */}
      <div className="absolute w-[120vh] h-[120vh] rounded-full
                    bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950
                    -top-[60vh] left-[50%] transform -translate-x-1/2 opacity-40
                    blur-sm pointer-events-none" />
    </>
  );
};