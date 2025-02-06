import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Target, Activity, BookOpen, GraduationCap } from 'lucide-react';

const QuickActions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-2 sm:p-3">
      {/* Quick Actions Title */}
      <div className="relative w-full max-w-xl mx-auto mb-4">
        <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/30 via-blue-400/20 to-blue-600/30 
                      rounded-[100px] blur-2xl opacity-90 animate-pulse" />
        <div className="relative backdrop-blur-xl rounded-[100px] p-2 overflow-hidden
                      bg-gradient-to-b from-white/20 via-white/10 to-transparent
                      shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2),0_8px_32px_rgba(31,38,135,0.37)]
                      border-t border-l border-white/30 border-b border-r border-white/10
                      group transition-all duration-300">
          <h2 className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-200 to-blue-100 
                      bg-clip-text text-transparent text-center">Quick Actions</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        <button
          onClick={() => navigate('/practice')}
          className="px-3 py-1.5 rounded-lg backdrop-blur-xl bg-blue-500/20 
                   border border-blue-500/30 text-blue-400 
                   hover:bg-blue-500/30 transition-all duration-300
                   flex items-center gap-2 group shadow-lg
                   hover:shadow-blue-500/20 hover:scale-105
                   text-sm sm:text-base"
        >
          <Brain className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>Practice</span>
        </button>
        <button
          onClick={() => navigate('/tests')}
          className="px-4 py-2 rounded-xl backdrop-blur-xl bg-purple-500/20 
                   border border-purple-500/30 text-purple-400 
                   hover:bg-purple-500/30 transition-all duration-300
                   flex items-center gap-2 group shadow-lg
                   hover:shadow-purple-500/20 hover:scale-105"
        >
          <Target className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>Tests</span>
        </button>
        <button
          onClick={() => navigate('/review')}
          className="px-4 py-2 rounded-xl backdrop-blur-xl bg-green-500/20 
                   border border-green-500/30 text-green-400 
                   hover:bg-green-500/30 transition-all duration-300
                   flex items-center gap-2 group shadow-lg
                   hover:shadow-green-500/20 hover:scale-105"
        >
          <Activity className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>Review</span>
        </button>
        <button
          onClick={() => navigate('/study-streak-details')}
          className="px-4 py-2 rounded-xl backdrop-blur-xl bg-yellow-500/20 
                   border border-yellow-500/30 text-yellow-400 
                   hover:bg-yellow-500/30 transition-all duration-300
                   flex items-center gap-2 group shadow-lg
                   hover:shadow-yellow-500/20 hover:scale-105"
        >
          <GraduationCap className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>Learn</span>
        </button>
        <button
          onClick={() => navigate('/sat')}
          className="px-4 py-2 rounded-xl backdrop-blur-xl bg-pink-500/20 
                   border border-pink-500/30 text-pink-400 
                   hover:bg-pink-500/30 transition-all duration-300
                   flex items-center gap-2 group shadow-lg
                   hover:shadow-pink-500/20 hover:scale-105"
        >
          <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>About SAT</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;