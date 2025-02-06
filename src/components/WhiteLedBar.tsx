import React from 'react';

const BlueSphere = ({ position }: { position: number }) => {
  return (
    <div 
      className="absolute top-1/2 -translate-y-1/2 w-12 h-12"
      style={{ left: `${position}%` }}
    >
      {/* Core sphere */}
      <div className="absolute inset-0 rounded-full bg-[#0037B3] animate-pulse" />
      
      {/* Atmosphere layers */}
      <div className="absolute -inset-1 rounded-full opacity-60 bg-gradient-radial from-[#0047E1] to-transparent" />
      <div className="absolute -inset-2 rounded-full opacity-40 bg-gradient-radial from-[#0047E1] to-transparent" />
      <div className="absolute -inset-3 rounded-full opacity-20 bg-gradient-radial from-[#0047E1] to-transparent" />
      
      {/* Rotating rings */}
      <div 
        className="absolute inset-0 rounded-full border-2 border-[#0055FF] opacity-60 animate-spin"
        style={{ 
          transformOrigin: 'center',
          animationDuration: '8s',
          transform: 'rotateX(75deg)'
        }}
      />
      <div 
        className="absolute inset-0 rounded-full border border-[#4D89FF] opacity-40 animate-spin"
        style={{ 
          transformOrigin: 'center',
          animationDuration: '12s',
          transform: 'rotateX(75deg) rotateY(45deg)'
        }}
      />
    </div>
  );
};

const GlassEffect = () => {
  return (
    <div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65vh] h-8 z-15"
      style={{ perspective: '1000px' }}
    >
      {/* Glass tube container with 3D effect */}
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        {/* Main glass tube body */}
        <div className="absolute inset-0 rounded-full bg-white/2 backdrop-blur-[2px]">
          {/* Top highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full" 
               style={{ transform: 'translateZ(2px)' }} />
          
          {/* Bottom shadow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-full" 
               style={{ transform: 'translateZ(-2px)' }} />
          
          {/* Side reflections */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-full" />
        </div>

        {/* Outer glow effect */}
        <div className="absolute -inset-1 rounded-full">
          <div className="absolute inset-0 bg-white/2 rounded-full blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full" />
        </div>

        {/* 3D depth layers */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/3 to-transparent"
             style={{ transform: 'translateZ(4px)' }} />
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/3 to-transparent"
             style={{ transform: 'translateZ(-4px)' }} />
      </div>
    </div>
  );
};

export const WhiteLedBar = () => {
  return (
    <div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vh] h-4 z-10"
      data-component="WhiteLedBar"
    >
      {/* Base LED bar */}
      <div className="absolute inset-0 bg-[#FFFFFF] rounded-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#aaadb0] to-[#FFFFFF]/30 rounded-full" />
      </div>
      
      {/* Core glow */}
      <div className="absolute inset-0 bg-[#FFFFFF] rounded-full animate-pulse shadow-[0_0_20px_#FFFFFF]" />
      
      {/* Seamless glow layers */}
      <div className="absolute -inset-4 bg-[#FFFFFF] rounded-full opacity-25 blur-lg" />
      <div className="absolute -inset-8 bg-[#FFFFFF] rounded-full opacity-15 blur-xl" />
      
      {/* Extended radial glow */}
      <div 
        className="absolute -inset-12 rounded-full opacity-20 blur-2xl" 
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)'
        }} 
      />
      <div 
        className="absolute -inset-16 rounded-full opacity-10 blur-3xl" 
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 80%, transparent 100%)'
        }} 
      />

      {/* Glass Effect Overlay */}
      <GlassEffect />

      {/* Blue Spheres */}
      {[10, 30, 50, 70, 90].map((position) => (
        <BlueSphere key={position} position={position} />
      ))}
    </div>
  );
};