import React from 'react';
import { ChevronRight, Target, TrendingUp } from 'lucide-react';
import CometProgress from './CometProgress';
import SpaceCard from './SpaceCard';

const ProgressWindow: React.FC = () => {
  return (
    <SpaceCard title="Current Progress">
      <div className="space-y-6">
        {/* Score Bubbles */}
        <div className="flex justify-between">
          <div className="px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/30
                       backdrop-blur-sm flex items-center gap-2">
            <Target className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-medium">Target: 1500+</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-green-500/20 border border-green-500/30
                       backdrop-blur-sm flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-medium">Current: 1420</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="relative backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-blue-400" />
              <span className="text-lg font-medium text-blue-300">Overall Progress</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
              <span className="text-lg font-medium text-blue-400">75%</span>
            </div>
          </div>
          <div className="h-[60px]">
            <CometProgress progress={75} />
          </div>
        </div>
      </div>
    </SpaceCard>
  );
};

export default ProgressWindow;