import React from 'react';
import { Crown } from 'lucide-react';

interface WelcomeBadgesProps {
  userName?: string;
}

const WelcomeBadges: React.FC<WelcomeBadgesProps> = ({ userName = 'Joey' }) => {
  return (
    <div className="space-y-4">
      {/* Certification Badge */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 
                     rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
        <div className="relative px-8 py-4 bg-gradient-to-r from-yellow-600/20 via-yellow-500/20 to-yellow-400/20 
                     backdrop-blur-xl rounded-xl border border-yellow-500/30 flex items-center justify-center gap-3">
          <Crown className="w-8 h-8 text-yellow-400" />
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 
                       bg-clip-text text-transparent">Best Test Prep App 2025</h2>
            <p className="text-yellow-400/60 text-sm">Certified Excellence in SAT Preparation</p>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 
                     rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
        <div className="relative px-8 py-4 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-blue-400/20 
                     backdrop-blur-xl rounded-xl border border-blue-500/30">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 via-purple-200 to-blue-100 
                     bg-clip-text text-transparent">Welcome back to Saturn, {userName}!</h2>
        </div>
      </div>

      {/* Badge */}
      <div className="inline-block px-6 py-3 rounded-full bg-white/5 border border-white/10 animate-fade-in">
        <span className="text-white/60">You are scheduled to take the SAT on March 9th, 2024</span>
      </div>
    </div>
  );
};

export default WelcomeBadges;