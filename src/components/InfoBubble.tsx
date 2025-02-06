import React from 'react';
import { Sparkles, Target, X } from 'lucide-react';

interface InfoBubbleProps {
  onClose?: () => void;
}

const InfoBubble: React.FC<InfoBubbleProps> = ({ onClose }) => {
  return (
    <div className="relative group animate-fade-in w-[500px] z-50">
      {/* Animated background gradient */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 
                    rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000
                    animate-gradient-x" />
      
      {/* Main content */}
      <div className="relative backdrop-blur-xl bg-white/5 px-8 py-6 rounded-2xl
                    border border-white/10 transition-all duration-300
                    group-hover:bg-white/20 group-hover:border-white/30
                    group-hover:scale-[1.02] overflow-hidden
                    shadow-[0_8px_32px_0_rgba(31,38,135,0.5)]">
        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 border border-white/20
                   hover:bg-white/20 transition-all duration-200 group/close z-50
                   hover:scale-110 active:scale-95"
        >
          <X className="w-4 h-4 text-white/70 group-hover/close:text-white" />
        </button>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-400/10
                      animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Decorative elements */}
        <div className="absolute -top-3 -left-3 p-2 bg-blue-500/20 rounded-full
                      border border-blue-500/30 backdrop-blur-sm
                      group-hover:scale-110 transition-transform duration-300">
          <Sparkles className="w-5 h-5 text-blue-400" />
        </div>
        
        <div className="absolute -bottom-3 -right-3 p-2 bg-blue-500/20 rounded-full
                      border border-blue-500/30 backdrop-blur-sm
                      group-hover:scale-110 transition-transform duration-300">
          <Target className="w-5 h-5 text-blue-400" />
        </div>

        {/* Content */}
        <div className="space-y-8 relative">
          <ul className="grid grid-cols-2 gap-4 text-base">
            <li className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Track your progress
            </li>
            <li className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Adaptive learning
            </li>
            <li className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Smart analytics
            </li>
            <li className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Performance insights
            </li>
            <li className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Study schedules
            </li>
            <li className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Practice tests
            </li>
            <li className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Score predictions
            </li>
            <li className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Expert guidance
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoBubble;