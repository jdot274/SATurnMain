import React from 'react';
import { Sparkles } from 'lucide-react';

const StudyHeader: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 
                   rounded-xl blur opacity-75 animate-pulse" />
      <div className="relative px-8 py-4 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-blue-400/20 
                   backdrop-blur-xl rounded-xl border border-blue-500/30">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 via-purple-200 to-blue-100 
                      bg-clip-text text-transparent flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
            Practice Center
            <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
          </h2>
        </div>
        <p className="text-xl text-white/60 mt-2">
          Continue your learning journey with personalized practice sessions
        </p>
      </div>
    </div>
  );
};

export default StudyHeader;