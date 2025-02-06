import React from 'react';
import { cn } from '@/lib/utils';

interface CometProgress2Props {
  progress: number; // 0-100
  className?: string;
}

const CometProgress2: React.FC<CometProgress2Props> = ({
  progress,
  className
}) => {
  // Calculate which milestone circles should be filled
  const milestones = [0, 25, 50, 75, 100];
  const getMilestoneStatus = (milestone: number) => progress >= milestone;

  return (
    <div className={cn("relative w-full h-full", className)}>
      {/* Main Container */}
      <div className="relative h-full bg-[#020617] rounded-lg border border-blue-400/10 overflow-hidden">
        {/* Progress Track */}
        <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-3 rounded-full bg-slate-900/80 
                     border border-blue-400/5 overflow-hidden z-0">
          {/* Progress Sections */}
          <div className="absolute inset-0 flex">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex-1 border-r border-blue-400/5 last:border-r-0" />
            ))}
          </div>

          {/* Milestone Circles */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-1">
            {milestones.map((milestone) => (
              <div key={milestone} 
                   className={cn(
                     "w-2 h-2 rounded-full transition-all duration-300",
                     "border flex items-center justify-center backdrop-blur-sm -ml-1 first:ml-0",
                     getMilestoneStatus(milestone)
                       ? "bg-blue-400/20 border-blue-400/50 shadow-[0_0_5px_rgba(59,130,246,0.3)]"
                       : "bg-white/5 border-white/10"
                   )}>
                <div className={cn(
                  "w-1 h-1 rounded-full transition-all duration-300",
                  getMilestoneStatus(milestone)
                    ? "bg-blue-400"
                    : "bg-white/20"
                )} />
              </div>
            ))}
          </div>

          {/* Progress Fill */}
          <div 
            className="absolute inset-y-0 left-0 bg-blue-600
                     transition-all duration-1000 ease-in-out"
            style={{ 
              width: `${progress}%`,
              boxShadow: '0 0 10px rgba(59,130,246,0.3)'
            }}
          />
        </div>

        {/* Comet Head - Glowing Orb with Ring */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 z-10 transition-all duration-1000"
          style={{ left: `calc(${progress}% - 24px)` }}
        >
          {/* Outer Glow */}
          <div className="absolute inset-[-8px] rounded-full bg-blue-600/20 blur-lg animate-pulse" />
          
          {/* Ring */}
          <div className="absolute inset-[-8px] rounded-full border-4 border-blue-400
                       animate-[spin_3s_linear_infinite] opacity-75" 
               style={{ clipPath: 'ellipse(50% 20% at 50% 50%)' }} />
          
          {/* Secondary Ring */}
          <div className="absolute inset-[-6px] rounded-full border-2 border-blue-300
                       animate-[spin_2s_linear_infinite_reverse] opacity-50" 
               style={{ clipPath: 'ellipse(50% 15% at 50% 50%)' }} />
          
          {/* Core Orb */}
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600
                       flex items-center justify-center
                       shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_0_30px_rgba(59,130,246,0.8)]">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-200 to-blue-400
                         blur-sm animate-pulse" />
          </div>
        </div>

        {/* Progress Labels */}
        <div className="absolute inset-x-8 -bottom-1 flex justify-between opacity-50">
          {milestones.map((milestone) => (
            <div key={milestone} 
                 className={cn(
                    "text-[10px] font-medium px-1 rounded-full backdrop-blur-sm -translate-x-1/2",
                    getMilestoneStatus(milestone)
                      ? "text-blue-400"
                      : "text-white/40"
                 )}>
              {milestone}%
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CometProgress2;