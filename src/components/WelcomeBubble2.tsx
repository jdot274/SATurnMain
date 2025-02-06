import React, { useState } from 'react';
import { BookOpen, Info, ArrowRight } from 'lucide-react';

interface WelcomeBubble2Props {
  onStartJourney?: () => void;
  onShowFeatures?: () => void;
}

const WelcomeBubble2: React.FC<WelcomeBubble2Props> = ({ 
  onStartJourney,
  onShowFeatures
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 relative z-30 w-full px-4 mt-4 mb-16">
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 
                     rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
        
        {/* Main content */}
        <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                     rounded-2xl border border-white/20 transition-all duration-300
                     group-hover:bg-white/10 group-hover:border-white/30 relative
                     group-hover:scale-[1.02] overflow-hidden p-8">
          {/* White fill pulse effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0
                       animate-[gradient-x_3s_linear_infinite] opacity-0 group-hover:opacity-100
                       transition-opacity duration-500" />

          {/* Content */}
          <div className="flex flex-col items-center gap-6">
            {/* Title */}
            <h1 className="text-4xl font-bold relative z-10">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Welcome to </span>
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">SATurn</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-lime-400 font-medium text-center relative z-10
                       drop-shadow-[0_0_12px_rgba(132,204,22,0.6)]">
              Your personalized SAT preparation journey starts here.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 relative z-10">
              <button
                onClick={() => onShowFeatures?.()}
                className="group/btn px-6 py-3 rounded-xl font-medium transition-all duration-300
                         bg-purple-500/20 border border-purple-500/30 text-purple-400
                         hover:bg-purple-500/30 hover:border-purple-500/50
                         flex items-center gap-2 relative overflow-hidden hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0
                             animate-[gradient-x_3s_linear_infinite] opacity-0 group-hover/btn:opacity-100
                             transition-opacity duration-500" />
                <BookOpen className="w-5 h-5" />
                <span>The SAT Explained</span>
              </button>

              <button
                onClick={() => onShowFeatures?.()}
                className="group/btn px-6 py-3 rounded-xl font-medium transition-all duration-300
                         bg-blue-500/20 border border-blue-500/30 text-blue-400
                         hover:bg-blue-500/30 hover:border-blue-500/50
                         flex items-center gap-2 relative overflow-hidden hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0
                             animate-[gradient-x_3s_linear_infinite] opacity-0 group-hover/btn:opacity-100
                             transition-opacity duration-500" />
                <span>Show Features</span>
              </button>

              <button
                onClick={() => onShowFeatures?.()}
                className="group/btn px-6 py-3 rounded-xl font-medium transition-all duration-300
                         bg-white/5 border border-white/20 text-white/90
                         hover:bg-white/10 hover:border-white/30
                         flex items-center gap-2 relative overflow-hidden hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0
                             animate-[gradient-x_3s_linear_infinite] opacity-0 group-hover/btn:opacity-100
                             transition-opacity duration-500" />
                <Info className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Animated particles */}
          {[...Array(10)].map((_, i) => (
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
      </div>
    </div>
  );
};

export default WelcomeBubble2;