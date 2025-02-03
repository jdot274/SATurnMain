import React from 'react';

interface WelcomeBackBannerProps {
  userName?: string;
}

export const WelcomeBackBanner: React.FC<WelcomeBackBannerProps> = ({ userName = 'Joey' }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 
                   rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
      <div className="relative px-4 py-2 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-blue-400/20 
                   backdrop-blur-xl rounded-lg border border-blue-500/30 flex items-center justify-between">
        <h2 className="text-base font-bold bg-gradient-to-r from-blue-300 via-purple-200 to-blue-100 
                   bg-clip-text text-transparent">Welcome back, {userName}!</h2>
        <span className="text-sm text-white/60">45 days until test</span>
      </div>
    </div>
  );
};

export default WelcomeBackBanner;