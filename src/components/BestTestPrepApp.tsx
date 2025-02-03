import React from 'react';
import { Crown } from 'lucide-react';

export const BestTestPrepApp: React.FC = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 
                   rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
      <div className="relative px-4 py-2 bg-gradient-to-r from-yellow-600/20 via-yellow-500/20 to-yellow-400/20 
                   backdrop-blur-xl rounded-lg border border-yellow-500/30 flex items-center gap-2">
        <Crown className="w-4 h-4 text-yellow-400" />
        <div>
          <h2 className="text-sm font-bold bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 
                     bg-clip-text text-transparent">Best Test Prep App 2025</h2>
        </div>
      </div>
    </div>
  );
};

export default BestTestPrepApp;