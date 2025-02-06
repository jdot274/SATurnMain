import React from 'react';
import { cn } from '@/lib/utils';
import { Clock, Calendar, Target, Brain } from 'lucide-react';

interface ExamCountdownBubble2Props {
  daysLeft: number;
  className?: string;
}

const ExamCountdownBubble2: React.FC<ExamCountdownBubble2Props> = ({
  daysLeft,
  className
}) => {
  return (
    <div className={cn(
      "relative group perspective-1000",
      className
    )}>
      {/* Outer glow effect */}
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-purple-500/30 
                    blur-xl transform-gpu scale-110 group-hover:scale-125 transition-transform duration-500
                    animate-pulse" />

      {/* Main container */}
      <div className="relative w-full h-full transform-style-preserve-3d rotate-x-12
                    group-hover:rotate-x-0 transition-transform duration-500">
        {/* Glass sphere */}
        <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                      rounded-[2rem] border border-white/20 overflow-hidden
                      shadow-[0_8px_32px_rgba(30,64,175,0.3)]">
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            {/* Days Counter */}
            <div className="text-5xl font-bold text-white mb-4 relative">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
              <span className="relative z-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                {daysLeft}
              </span>
            </div>
            <div className="text-xl font-medium text-white/90 mb-8">Days Until Exam</div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="backdrop-blur-xl bg-white/5 rounded-xl p-4 border border-white/10
                           group-hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm">Target Score</span>
                </div>
                <span className="text-2xl font-bold text-white">1500+</span>
              </div>

              <div className="backdrop-blur-xl bg-white/5 rounded-xl p-4 border border-white/10
                           group-hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 text-sm">Current</span>
                </div>
                <span className="text-2xl font-bold text-white">1420</span>
              </div>
            </div>

            {/* Date Info */}
            <div className="mt-8 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-white/40" />
              <span className="text-white/60">March 9th, 2024</span>
            </div>
          </div>

          {/* Surface highlights */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] 
                       bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px]
                       bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute top-1/4 bottom-1/4 left-0 w-[1px]
                       bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <div className="absolute top-1/4 bottom-1/4 right-0 w-[1px]
                       bg-gradient-to-b from-transparent via-white/30 to-transparent" />

          {/* Animated particles */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Bottom reflection */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-12
                     bg-blue-500/20 blur-2xl rounded-full scale-[0.8] animate-pulse" />
      </div>
    </div>
  );
};

export default ExamCountdownBubble2;