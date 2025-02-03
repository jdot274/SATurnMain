import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';
import SpaceCard from './SpaceCard';

export const WelcomeCard: React.FC = () => (
  <SpaceCard title="Welcome to SATurn">
    <div className="relative overflow-hidden">
      {/* Animated dots background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400/30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative space-y-8">
        {/* Main text with gradient and glow */}
        <div className="space-y-4">
          <p className="text-2xl leading-relaxed">
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 
                         bg-clip-text text-transparent animate-gradient-x
                         drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              Embark on your SAT preparation journey
            </span>
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            Our comprehensive platform is designed to help you achieve your target score through
            personalized learning and expert guidance.
          </p>
        </div>

        {/* Features grid with hover effects */}
        <div className="grid grid-cols-2 gap-4">
          <div className="group p-4 rounded-xl bg-white/5 border border-white/10
                       hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500
                         animate-gradient-x" />
            
            {/* Content */}
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">
                  Adaptive Learning
                </h3>
              </div>
              <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                Personalized study plans that adapt to your progress
              </p>
            </div>
          </div>

          <div className="group p-4 rounded-xl bg-white/5 border border-white/10
                       hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500
                         animate-gradient-x" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                <h3 className="text-lg font-semibold text-purple-300 group-hover:text-purple-200 transition-colors">
                  Expert Guidance
                </h3>
              </div>
              <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                Learn proven strategies from experienced tutors
              </p>
            </div>
          </div>
        </div>

        {/* Status message with glow effect */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 
                       rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          <p className="relative text-sm text-white/80 italic text-center leading-relaxed
                     bg-gradient-to-r from-green-200 to-blue-200 bg-clip-text text-transparent">
            Your current progress shows you're on track to reach your target score.
            Keep up the great work!
          </p>
        </div>
      </div>
    </div>
  </SpaceCard>
);