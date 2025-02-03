import React from 'react';
import { cn } from '@/lib/utils';

interface ExamCountdownBubbleProps {
  daysLeft: number;
  className?: string;
}

const ExamCountdownBubble: React.FC<ExamCountdownBubbleProps> = ({
  daysLeft,
  className
}) => {
  return (
    <div className={cn(
      "relative group perspective-1000",
      className
    )}>
      {/* Main tube container */}
      <div className="relative h-16 w-[600px] backdrop-blur-xl bg-gradient-to-b from-white/10 to-white/5 
                    rounded-full overflow-hidden transform-style-preserve-3d
                    flex items-center gap-6 px-8">
        {/* 3D Bevel Effect Layers */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
        <div className="absolute inset-[1px] rounded-full border border-white/30" />
        <div className="absolute inset-[2px] rounded-full bg-gradient-to-b from-white/10 to-transparent" />
        
        {/* Inner shadow for depth */}
        <div className="absolute inset-[2px] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]" />
        
        {/* Pulsing dot with enhanced glow */}
        <div className="relative">
          <div className="absolute -inset-3 bg-green-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute -inset-2 bg-green-400/30 rounded-full blur-lg animate-pulse delay-75" />
          <div className="relative w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-green-300
                       shadow-[0_0_15px_rgba(34,197,94,0.6),0_0_30px_rgba(34,197,94,0.4)]
                       animate-[pulse_2s_ease-in-out_infinite]">
            <div className="absolute inset-1 rounded-full bg-white/50 blur-sm" />
          </div>
        </div>

        {/* Text content with enhanced styling */}
        <div className="relative flex items-center gap-4 text-white flex-1">
          <span className="text-xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
            Your exam is in
          </span>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-green-300 to-green-400 
                         bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
              {daysLeft}
            </span>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Days
            </span>
          </div>
        </div>

        {/* Enhanced surface highlights */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[2px] 
                     bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        <div className="absolute bottom-0 left-1/4 right-1/4 h-[2px]
                     bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute top-1/4 bottom-1/4 left-0 w-[2px]
                     bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        <div className="absolute top-1/4 bottom-1/4 right-0 w-[2px]
                     bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>

      {/* Enhanced bottom reflection */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-12
                   bg-green-400/10 blur-2xl rounded-full scale-[0.8] animate-pulse" />
    </div>
  );
};

export default ExamCountdownBubble;