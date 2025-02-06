import React from 'react';
import { Sparkles } from 'lucide-react';

interface WelcomeBackJoeyProps {
  className?: string;
}

const WelcomeBackJoey: React.FC<WelcomeBackJoeyProps> = ({ className }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Purple flow background gradient */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#0088ff] via-purple-600 to-[#0088ff] 
                   rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
      
      {/* Main content */}
      <div className="relative px-8 py-4 bg-gradient-to-br from-[#0088ff]/10 via-purple-600/10 to-[#0088ff]/10
                   backdrop-blur-xl rounded-2xl border border-white/10 transition-all duration-300
                   group-hover:bg-white/5 group-hover:border-white/20
                   group-hover:scale-[1.02] overflow-hidden relative">
        {/* Animated fill effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0088ff]/20 via-purple-600/20 to-[#0088ff]/20
                       animate-[gradient-x_3s_linear_infinite] opacity-0 group-hover:opacity-100
                       transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0088ff]/10 via-purple-600/10 to-[#0088ff]/10
                       animate-[gradient-x_3s_linear_infinite_reverse] delay-1000 opacity-0 group-hover:opacity-100
                       transition-opacity duration-500" />
        </div>

        {/* Moving outline effect */}
        <div className="absolute inset-0 rounded-2xl">
          {/* Top border */}
          <div className="absolute -top-[1px] left-0 right-0 h-[1px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00aaff] to-transparent
                         animate-[gradient-x_2s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent
                         animate-[gradient-x_2s_linear_infinite_reverse] delay-1000" />
          </div>

          {/* Bottom border */}
          <div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00aaff] to-transparent
                         animate-[gradient-x_2s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent
                         animate-[gradient-x_2s_linear_infinite_reverse] delay-1000" />
          </div>

          {/* Left border */}
          <div className="absolute top-0 -left-[1px] bottom-0 w-[1px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00aaff] to-transparent
                         animate-[gradient-y_2s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400 to-transparent
                         animate-[gradient-y_2s_linear_infinite_reverse] delay-1000" />
          </div>

          {/* Right border */}
          <div className="absolute top-0 -right-[1px] bottom-0 w-[1px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00aaff] to-transparent
                         animate-[gradient-y_2s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400 to-transparent
                         animate-[gradient-y_2s_linear_infinite_reverse] delay-1000" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-lime-300 via-lime-200 to-lime-300 
                      bg-clip-text text-transparent flex items-center gap-2
                      drop-shadow-[0_0_25px_rgba(163,230,53,0.8)]">
            <Sparkles className="w-5 h-5 text-lime-300" />
            Welcome back, Joey!
            <Sparkles className="w-5 h-5 text-lime-300" />
          </h1>
          <p className="text-lg text-lime-300 font-medium drop-shadow-[0_0_20px_rgba(163,230,53,0.8)]
                     [text-shadow:0_0_15px_rgba(163,230,53,0.6)]">
            Your test is in 45 days. Stay on track!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBackJoey;