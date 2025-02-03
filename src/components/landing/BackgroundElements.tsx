import React from 'react';

export const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Saturn Orb */}
      <div className="absolute w-[140vh] h-[140vh] -top-[70vh] left-[50%] 
                    transform -translate-x-1/2">
        {/* Saturn Ring */}
        <div className="absolute inset-[-10%] rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-blue-600/40
                        blur-2xl animate-pulse shadow-[0_0_100px_rgba(139,92,246,0.3)]" 
                        style={{ clipPath: 'ellipse(50% 15% at 50% 50%)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30
                        blur-xl animate-pulse delay-75 shadow-[0_0_80px_rgba(59,130,246,0.3)]" 
                        style={{ clipPath: 'ellipse(45% 12% at 50% 50%)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20
                        blur-lg animate-pulse delay-150" style={{ clipPath: 'ellipse(40% 10% at 50% 50%)' }} />
        </div>

        {/* Orb Core */}
        <div className="absolute inset-[25%] rounded-full overflow-hidden shadow-[0_0_120px_rgba(59,130,246,0.4)]">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800
                        animate-pulse shadow-inner" />
          
          {/* Atmosphere Layer */}
          <div className="absolute inset-[-50%] bg-gradient-to-t from-purple-500/20 via-blue-400/10 to-transparent
                        blur-xl animate-pulse delay-75 opacity-80" />
          
          {/* Surface Details */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.3),transparent_50%)]
                        animate-pulse delay-150 opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.3),transparent_50%)]
                        animate-pulse delay-300 opacity-90" />
        </div>
      </div>
      
      <div className="absolute w-[200vw] h-[100vh] -top-[50vh] -left-[50vw] 
                    bg-gradient-to-b from-purple-400/40 via-blue-600/20 to-transparent
                    blur-3xl transform -rotate-12" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950" />
    </div>
  );
};