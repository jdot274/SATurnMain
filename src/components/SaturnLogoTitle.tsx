import React from 'react';
import SpaceCard from './SpaceCard';
import { Sparkles } from 'lucide-react';

export const SaturnLogoTitle: React.FC = () => {
  return (
    <SpaceCard title="">
      <div className="space-y-6">
        {/* Title with Saturn Logo */}
        <div className="relative backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-4
                     group hover:bg-white/10 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-400/10 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
          
          <div className="flex items-center gap-4">
            {/* Saturn Logo */}
            <div className="relative w-12 h-12">
              {/* Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-blue-400/40 to-blue-600/40
                           rounded-full transform rotate-12 scale-[1.2]"
                   style={{ clipPath: 'ellipse(50% 15% at 50% 50%)' }} />
              
              {/* Planet */}
              <div className="absolute inset-[15%] bg-gradient-to-br from-blue-400 to-blue-600 
                           rounded-full shadow-lg shadow-blue-500/50" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 
                        bg-clip-text text-transparent animate-gradient-x
                        drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Welcome to SATurn
            </h1>
          </div>
        </div>

        {/* Journey Section */}
        <div className="flex items-center gap-4">
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
      </div>
    </SpaceCard>
  );
};

export default SaturnLogoTitle;