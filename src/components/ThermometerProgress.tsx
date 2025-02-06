import React from 'react';
import { cn } from '@/lib/utils';

interface ThermometerProgressProps {
  progress: number; // 0-100
  className?: string;
}

const ThermometerProgress: React.FC<ThermometerProgressProps> = ({
  progress,
  className
}) => {
  // Calculate which milestone circles should be filled
  const milestones = [0, 25, 50, 75, 100];
  const getMilestoneStatus = (milestone: number) => progress >= milestone;

  return (
    <div className={cn("relative w-full max-w-2xl mx-auto space-y-4", className)}>
      {/* Title Container */}
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-white/30 via-white/40 to-white/30 
                     rounded-2xl blur-lg opacity-75 animate-pulse" />
        <div className="relative px-6 py-3 backdrop-blur-xl bg-white/10 rounded-2xl
                     border border-white/30 flex items-center justify-between
                     shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
          <h2 className="text-xl font-bold text-white">Your Progress</h2>
          <span className="text-white/60">{progress}% Complete</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative h-24 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 
                    rounded-[2rem] border border-white/30 overflow-hidden
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(31,38,135,0.37)]
                    transform-style-preserve-3d">
        {/* Beveled Edge Effect */}
        <div className="absolute inset-[2px] rounded-[1.875rem] bg-gradient-to-br from-white/20 to-transparent
                     border border-white/20" />
        
        {/* Inner Tub Container */}
        <div className="absolute inset-4 rounded-2xl bg-white/10 border border-white/30
                     overflow-hidden transform-style-preserve-3d">
          {/* Milestone Circles */}
          <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between items-center z-10">
            {milestones.map((milestone) => (
              <div key={milestone} className="relative group">
                {/* Circle */}
                <div className={cn(
                  "w-6 h-6 rounded-full transition-all duration-300 transform-gpu",
                  "border-2 flex items-center justify-center backdrop-blur-sm",
                  getMilestoneStatus(milestone)
                    ? "bg-green-500/10 border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                    : "bg-white/5 border-white/20"
                )}>
                  <div className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    getMilestoneStatus(milestone)
                      ? "bg-white"
                      : "bg-white/20"
                  )} />
                </div>

                {/* Milestone Label */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap
                             text-xs font-medium opacity-0 group-hover:opacity-100
                             transition-opacity duration-200">
                  <span className={cn(
                    "px-2 py-1 rounded-full backdrop-blur-sm",
                    getMilestoneStatus(milestone)
                      ? "bg-white/20 text-white border border-white/40"
                      : "bg-white/5 text-white/60 border border-white/10"
                  )}>
                    {milestone}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Track */}
          <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-1 rounded-full bg-white/10 border border-white/20
                       overflow-hidden z-0">
            {/* Progress Fill - Horizontal Line */}
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-white to-white/80
                       transition-all duration-1000 ease-in-out rounded-full"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 15px rgba(255,255,255,0.4), 0 0 30px rgba(255,255,255,0.2)'
              }}
            />
          </div>
        </div>

        {/* Lighting Effects */}
        <div className="absolute inset-0">
          {/* Top Highlight */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] 
                       bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Bottom Shadow */}
          <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px]
                       bg-gradient-to-r from-transparent via-black/20 to-transparent" />
          
          {/* Left Highlight */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-[1px]
                       bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          
          {/* Right Shadow */}
          <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px]
                       bg-gradient-to-b from-transparent via-black/20 to-transparent" />
        </div>

        {/* Surface Highlights */}
        <div className="absolute top-[15%] left-[10%] w-4 h-4 rounded-full 
                     bg-white/10 blur-sm animate-pulse" />
        <div className="absolute bottom-[20%] right-[15%] w-3 h-3 rounded-full 
                     bg-white/10 blur-sm animate-pulse delay-150" />
      </div>

      {/* Bottom Reflection */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 
                   bg-white/20 blur-xl rounded-full scale-[0.8] animate-pulse" />
    </div>
  );
};

export default ThermometerProgress;