import React from 'react';
import { cn } from '@/lib/utils';

interface GreenProgressBubbleProps {
  progress: number;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

const GreenProgressBubble: React.FC<GreenProgressBubbleProps> = ({
  progress,
  size = 'md',
  label,
  className
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  return (
    <div className={cn(
      "relative group perspective-1000",
      sizeClasses[size],
      className
    )}>
      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/30 
                    blur-xl transform-gpu scale-110 group-hover:scale-125 transition-transform duration-500
                    animate-pulse" />

      {/* Main sphere container */}
      <div className="relative w-full h-full transform-style-preserve-3d rotate-x-12
                    group-hover:rotate-x-0 transition-transform duration-500">
        {/* Glass sphere */}
        <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-full border border-white/20
                      shadow-[0_8px_32px_rgba(22,101,52,0.3)]
                      overflow-hidden">
          {/* Progress fill - vertical gradient */}
          <div 
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500 to-green-400
                     transition-all duration-1000 ease-in-out"
            style={{ 
              height: `${progress}%`,
              filter: 'brightness(1.5)',
              boxShadow: '0 0 20px rgba(34,197,94,0.5), 0 0 40px rgba(34,197,94,0.3)'
            }}
          />

          {/* 3D lighting effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]
                         animate-pulse">
              {progress}%
            </span>
            {label && (
              <span className="mt-2 text-sm text-white/80 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">
                {label}
              </span>
            )}
          </div>

          {/* Surface highlights */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r 
                       from-transparent via-white/40 to-transparent" />
          <div className="absolute top-[15%] left-[10%] w-4 h-4 rounded-full 
                       bg-white/40 blur-sm animate-pulse" />
        </div>

        {/* Bottom reflection */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8
                     bg-green-500/20 blur-xl rounded-full scale-[0.8] animate-pulse" />
      </div>

      {/* Interactive glow on hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 bg-gradient-to-r 
                    from-green-500/20 via-emerald-500/20 to-green-500/20 blur-xl" />
    </div>
  );
};

export default GreenProgressBubble;