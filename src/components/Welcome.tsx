import React from 'react';
import SpaceCard from './SpaceCard';
import { Sparkles } from 'lucide-react';

export const Welcome: React.FC = () => {
  return (
    <SpaceCard title="">
      <div className="relative backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6
                   group hover:bg-white/10 transition-all duration-300 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0
                     animate-[gradient-x_3s_linear_infinite] opacity-0 group-hover:opacity-100
                     transition-opacity duration-500" />

        {/* Moving outline effect */}
        <div className="absolute inset-0 rounded-xl">
          {/* Top border */}
          <div className="absolute -top-[1px] left-0 right-0 h-[1px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent
                         animate-[gradient-x_2s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent
                         animate-[gradient-x_2s_linear_infinite_reverse] delay-1000" />
          </div>

          {/* Bottom border */}
          <div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent
                         animate-[gradient-x_2s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent
                         animate-[gradient-x_2s_linear_infinite_reverse] delay-1000" />
          </div>

          {/* Left border */}
          <div className="absolute top-0 -left-[1px] bottom-0 w-[1px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400 to-transparent
                         animate-[gradient-y_2s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-transparent
                         animate-[gradient-y_2s_linear_infinite_reverse] delay-1000" />
          </div>

          {/* Right border */}
          <div className="absolute top-0 -right-[1px] bottom-0 w-[1px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400 to-transparent
                         animate-[gradient-y_2s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-transparent
                         animate-[gradient-y_2s_linear_infinite_reverse] delay-1000" />
          </div>
        </div>

        {/* Content */}
        <div className="relative flex items-center justify-center gap-6">
          {/* Enhanced Saturn Logo */}
          <div className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-500">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse" />
            
            {/* Enhanced Ring */}
            <div className="absolute inset-[-25%] bg-gradient-to-r from-blue-600/60 via-blue-400/60 to-blue-600/60
                         rounded-full transform rotate-12 scale-[1.2] group-hover:scale-[1.3]
                         transition-transform duration-500 animate-pulse"
                 style={{ clipPath: 'ellipse(50% 15% at 50% 50%)' }}>
              {/* Ring Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent
                           opacity-50 animate-pulse" />
            </div>
            
            {/* Enhanced Planet */}
            <div className="absolute inset-[15%] bg-gradient-to-br from-blue-400 to-blue-600 
                         rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              {/* Surface Detail */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.3),transparent_50%)]" />
            </div>
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 
                      bg-clip-text text-transparent animate-gradient-x
                      drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]
                      group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]
                      transition-all duration-500">
            Welcome to SATurn
          </h1>
        </div>

        {/* Floating Particles */}
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

      {/* Journey Section */}
      <div className="flex items-center gap-4 mt-6">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                     border border-blue-500/30 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
        </div>
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 
                      bg-clip-text text-transparent animate-gradient-x
                      drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            Embark on your SAT journey
          </h2>
          <p className="text-white/60">Achieve your target score with expert guidance</p>
        </div>
      </div>
    </SpaceCard>
  );
};

export default Welcome;