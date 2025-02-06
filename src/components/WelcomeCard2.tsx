import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const WelcomeCard2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-4xl mx-auto mt-2 mb-6 pointer-events-auto scale-[0.66] transform-gpu">
      <div className="relative group">
        {/* Enhanced animated background gradient with brighter colors */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/80 via-violet-500/90 to-blue-500/80 
                     rounded-2xl blur-xl opacity-30 group-hover:opacity-100 transition-opacity 
                     animate-[pulse_3s_cubic-bezier(0.4,0,0.8,1)_infinite]" />

        {/* Main content */}
        <div className="relative px-8 py-6 backdrop-blur-xl bg-gradient-to-br from-purple-600/30 via-violet-500/25 to-blue-500/20
                     rounded-2xl border border-purple-500/30 transition-all duration-300
                     group-hover:bg-purple-600/40 group-hover:border-violet-500/50
                     group-hover:scale-[1.02] overflow-hidden">
          
          {/* Animated gradient fill effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0
                       animate-[gradient-x_3s_linear_infinite] opacity-0 group-hover:opacity-100
                       transition-opacity duration-500" />
          
          {/* Enhanced decorative elements with brighter glows */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500/60 to-violet-400/60
                       rounded-full border border-purple-500/40 backdrop-blur-sm
                       group-hover:scale-110 transition-transform duration-300
                       shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-purple-300 animate-[spin_4s_linear_infinite]" />
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-violet-500/60 to-blue-400/60
                       rounded-full border border-violet-500/40 backdrop-blur-sm
                       group-hover:scale-110 transition-transform duration-300
                       shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-violet-300 animate-[spin_4s_linear_infinite]" />
          </div>

          {/* Main text with enhanced gradients */}
          <h1 className="text-center text-3xl font-extrabold bg-gradient-to-r from-purple-200 via-violet-200 to-blue-200 
                      bg-clip-text text-transparent animate-[gradient-x_3s_ease_infinite]
                      drop-shadow-[0_0_15px_rgba(147,51,234,0.6)] mb-6">
            Welcome Back to Saturn
          </h1>

          <div className="flex items-center justify-center gap-4">
            <div className="backdrop-blur-xl bg-purple-600/20 rounded-xl border border-purple-500/40 px-6 py-3
                         hover:bg-white/10 transition-all duration-300 group/status">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-300 group-hover/status:scale-110 transition-transform" />
                <span className="text-base font-semibold bg-gradient-to-r from-purple-300 to-violet-200 
                             bg-clip-text text-transparent animate-[gradient-x_3s_ease_infinite]">
                  Welcome back, Joey!
                </span>
                <span className="text-xs text-white/60">•</span>
                <span className="text-xs text-white/60">45 days until test</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="px-4 py-2 rounded-lg bg-purple-600/30 border border-purple-500/40 
                         text-purple-300 text-sm font-medium hover:bg-purple-600/40 transition-all duration-300
                         hover:scale-105 shadow-lg shadow-purple-500/20
                         relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0
                             animate-[gradient-x_3s_linear_infinite] opacity-0 group-hover/btn:opacity-100" />
                <span className="relative z-10">Continue</span>
              </button>
              <button
                onClick={() => navigate('/progress')}
                className="px-4 py-2 rounded-lg bg-violet-500/30 border border-violet-500/40 
                         text-violet-300 text-sm font-medium hover:bg-violet-500/40 transition-all duration-300
                         hover:scale-105 shadow-lg shadow-violet-500/20
                         relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0
                             animate-[gradient-x_3s_linear_infinite] opacity-0 group-hover/btn:opacity-100" />
                <span className="relative z-10">Progress</span>
              </button>
              <button
                onClick={() => navigate('/study-streak-details')}
                className="px-4 py-2 rounded-lg bg-blue-600/30 border border-blue-500/40 
                         text-blue-300 text-sm font-medium hover:bg-blue-600/40 transition-all duration-300
                         hover:scale-105 shadow-lg shadow-blue-500/20
                         relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0
                             animate-[gradient-x_3s_linear_infinite] opacity-0 group-hover/btn:opacity-100" />
                <span className="relative z-10">Learn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard2;