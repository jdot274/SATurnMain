import React, { useState } from 'react';
import { Rocket, ArrowDown, ArrowRight } from 'lucide-react';

interface WelcomeBubbleProps {
  onStartJourney: () => void;
}

const WelcomeBubble: React.FC<WelcomeBubbleProps> = ({ 
  onStartJourney
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
        <div className="absolute -inset-1 rounded-2xl blur-xl transition duration-300
                      bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-30 
                      group-hover:opacity-50 animate-gradient-x" />
        
        {/* Main content */}
        <div className="relative backdrop-blur-xl bg-white/5 px-8 py-6 rounded-2xl
                       border border-white/20 transition-all duration-300
                       group-hover:bg-white/10 group-hover:border-white/30
                       group-hover:scale-[1.02] w-full max-w-[500px] mx-auto">
          {/* Content */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-300 via-blue-100 to-blue-200 
                        bg-clip-text text-transparent flex items-center gap-2">
              <Rocket className={`w-6 h-6 transition-transform duration-500 
                              ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`}
                    style={{ filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.5))' }} />
              <span className="text-[#0044ff]">Welcome back to{' '}</span>
              <span className="bg-gradient-to-r from-[#00d1ff] via-[#0088ff] to-[#00d1ff]
                             bg-clip-text text-transparent animate-gradient-x
                             drop-shadow-[0_0_15px_rgba(0,209,255,0.8)]">
                SATurn
              </span>
            </h2>
            <p className="text-lime-400 text-center font-medium text-lg
                         bg-gradient-to-r from-lime-400 via-lime-300 to-lime-400
                         bg-clip-text text-transparent animate-gradient-x">
              Ready to continue your SAT preparation journey?
            </p>
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={onStartJourney}
                className="group px-8 py-4 rounded-xl font-medium transition-all duration-300
                         bg-gradient-to-r from-blue-600 to-blue-400 text-white
                         hover:from-blue-500 hover:to-blue-300
                         shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30
                         transform hover:scale-105 active:scale-95
                         flex items-center gap-2"
              >
                <span>Resume Your Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onStartJourney}
                className="group px-8 py-4 rounded-xl font-medium transition-all duration-300
                         relative overflow-hidden
                         border border-blue-500/30 text-blue-400
                         hover:text-white
                         flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600
                             -translate-x-full group-hover:translate-x-0 transition-transform duration-500
                             animate-gradient-x opacity-80" />
                <span className="relative z-10">Continue Your Journey</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBubble;