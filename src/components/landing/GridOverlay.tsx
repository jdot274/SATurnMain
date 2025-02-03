import React from 'react';

export const GridOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[1000] pointer-events-none">
      {/* Vertical lines */}
      <div className="absolute inset-0 flex justify-between px-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i}
            className="w-px h-full bg-blue-500/10"
            style={{
              left: `${(i) * (100 / 12)}%`
            }}
          />
        ))}
      </div>

      {/* Horizontal lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-full h-px bg-blue-500/10"
            style={{
              top: `${(i) * (100 / 8)}%`
            }}
          />
        ))}
      </div>

      {/* Measurements */}
      <div className="absolute top-2 left-2 bg-blue-900/50 backdrop-blur-sm rounded px-2 py-1 text-xs text-blue-200 font-mono z-[1001]">
        1920 x 1280
      </div>
    </div>
  );
};