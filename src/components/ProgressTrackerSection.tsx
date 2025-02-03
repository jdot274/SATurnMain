import React from 'react';
import ProgressTracker from './ProgressTracker';
import BlueSun from './BlueSun';
import SphereCopy from './Sphere copy';
import YouAreOnTrack from './YouAreOnTrack';
import ExamCountdownBubble from './ExamCountdownBubble';

const ProgressTrackerSection: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto space-y-8">
      {/* Header with same style as QuickActions */}
      <div className="relative w-full max-w-xl mx-auto mb-6">
        <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/30 via-blue-400/20 to-blue-600/30 
                      rounded-[100px] blur-2xl opacity-90 animate-pulse" />
        <div className="relative backdrop-blur-xl rounded-[100px] p-2 overflow-hidden flex items-center justify-between gap-4
                      bg-gradient-to-b from-white/20 via-white/10 to-transparent
                      shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2),0_8px_32px_rgba(31,38,135,0.37)]
                      border-t border-l border-white/30 border-b border-r border-white/10
                      group transition-all duration-300">
          <h2 className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-200 to-blue-100 
                      bg-clip-text text-transparent text-center">Your Progress</h2>
          <div className="scale-[0.6] origin-right">
            <ExamCountdownBubble daysLeft={43} className="w-48" />
          </div>
        </div>
      </div>

      {/* YouAreOnTrack Component */}
      <YouAreOnTrack />

      {/* Progress Tracker */}
      <div className="relative w-full">
        <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8">
          <ProgressTracker />
        </div>
      </div>

      {/* BlueSun Section with GreenStyles-like Background */}
      <div className="relative w-full backdrop-blur-xl bg-white/5 rounded-2xl p-8 
                   border border-white/10 space-y-6 shadow-[0_8px_32px_rgba(59,130,246,0.3)]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-300/5 to-blue-400/10
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        {/* BlueSun Container */}
        <div className="relative h-[400px] w-full">
          <div className="relative w-full h-full">
            <BlueSun />
            
            {/* Saturn Sphere Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-[140vh] h-[140vh] -top-[60vh] left-[calc(48%-20px)] transform -translate-x-1/2">
                <SphereCopy />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTrackerSection;