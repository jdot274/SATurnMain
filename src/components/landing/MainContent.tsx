import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Target, Activity, BookOpen, GraduationCap, Calendar, Sparkles } from 'lucide-react';

interface MainContentProps {
  scrollToSATExplained: () => void;
  isSignedIn: boolean;
}

export const MainContent: React.FC<MainContentProps> = ({
  scrollToSATExplained,
  isSignedIn
}) => {
  const navigate = useNavigate();

  return (
    <div className="relative z-20 flex flex-col items-center flex-1 px-8 pointer-events-none">
      {/* Welcome Back - Small version below nav */}
      <div className="w-full max-w-4xl mx-auto mt-1 mb-2 pointer-events-auto scale-[0.6] transform-gpu">
        <div className="relative group">
          {/* Animated background gradient */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-violet-500 to-blue-500 
                       rounded-2xl blur-xl opacity-90 group-hover:opacity-100 transition-opacity animate-pulse" />

          {/* Main content */}
          <div className="relative px-8 py-6 backdrop-blur-xl bg-gradient-to-br from-purple-600/20 via-violet-500/15 to-blue-500/10
                       rounded-2xl border border-purple-500/30 transition-all duration-300
                       group-hover:bg-purple-600/30 group-hover:border-violet-500/50
                       group-hover:scale-[1.02] overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500/40 to-violet-400/40
                         rounded-full border border-purple-500/30 backdrop-blur-sm
                         group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-purple-400 animate-[spin_4s_linear_infinite]" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-violet-500/40 to-blue-400/40
                         rounded-full border border-violet-500/30 backdrop-blur-sm
                         group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-violet-400 animate-[spin_4s_linear_infinite]" />
            </div>

            {/* Main text */}
            <h1 className="text-center text-3xl font-extrabold bg-gradient-to-r from-purple-200 via-violet-200 to-blue-200 
                        bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(147,51,234,0.6)] mb-6">
              Welcome Back to Saturn
            </h1>

            <div className="flex items-center justify-center gap-4">
              <div className="backdrop-blur-xl bg-purple-600/10 rounded-xl border border-purple-500/30 px-6 py-3
                           hover:bg-white/10 transition-all duration-300 group/status">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400 group-hover/status:scale-110 transition-transform" />
                  <span className="text-base font-semibold text-purple-400">Welcome back, Joey!</span>
                  <span className="text-xs text-white/60">•</span>
                  <span className="text-xs text-white/60">45 days until test</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="px-4 py-2 rounded-lg bg-purple-600/20 border border-purple-500/30 
                           text-purple-400 text-sm font-medium hover:bg-purple-600/30 transition-all duration-300 relative
                           hover:scale-105 shadow-lg shadow-purple-500/20"
                >
                  Continue
                </button>
                <button
                  onClick={() => navigate('/progress')}
                  className="px-4 py-2 rounded-lg bg-violet-500/20 border border-violet-500/30 
                           text-violet-400 text-sm font-medium hover:bg-violet-500/30 transition-all duration-300 relative
                           hover:scale-105 shadow-lg shadow-violet-500/20"
                >
                  Progress
                </button>
                <button
                  onClick={() => navigate('/study-streak-details')}
                  className="px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 
                           text-blue-400 text-sm font-medium hover:bg-blue-600/30 transition-all duration-300 relative
                           hover:scale-105 shadow-lg shadow-blue-500/20"
                >
                  Learn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for Spline and Sphere */}
      <div className="h-[240px]" />

      <div className="w-full max-w-4xl mx-auto space-y-8 pointer-events-auto mb-8">
        <div className="w-full flex flex-col justify-center pointer-events-auto">
          {/* Daily Challenge Button */}
          <div className="relative group mb-2 scale-[0.6] transform-gpu mt-[200px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 
                         rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
            <button
              onClick={() => navigate('/daily-challenge')}
              className="relative w-full backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                       rounded-xl border border-green-500/30 p-6 
                       group-hover:border-green-500/50 transition-all duration-300
                       flex flex-col sm:flex-row items-center gap-4 sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                  <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-blue-400 animate-pulse" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-bold metallic-text">Daily Challenge</h3>
                  <p className="text-white/60 text-sm sm:text-base">Test your skills with today's SAT practice questions</p>
                </div>
              </div>
              <div className="bg-green-500/20 border border-green-500/30 text-green-400
                           px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg group-hover:bg-green-500/30 
                           transition-all duration-300">
                Start Challenge
              </div>
            </button>
          </div>
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-2 sm:p-3 scale-[0.6] transform-gpu -mt-4">
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
        </div>
      </div>
    </div>
  );
};