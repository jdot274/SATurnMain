import React from 'react';
import { useState } from 'react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';

const GlassmorphicDemoPage: React.FC = () => {
  const [isGreen, setIsGreen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <PageLogo />
      <Navigation />
      
      <div className="fixed top-24 right-8" style={{ zIndex: 9999 }}>
        <button
          onClick={() => setIsGreen(prev => !prev)}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300
                    shadow-lg backdrop-blur-sm
                   ${isGreen 
                     ? 'bg-green-500/90 text-white hover:bg-green-500' 
                     : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'}`}
        >
          Button
        </button>
      </div>
      
      <div className="flex-1 w-full">
        <iframe 
          src="https://linearoriginal.trickle.host"
          className="w-full h-full border-0"
          title="Linear Original Demo"
        />
      </div>
    </div>
  );
};

export default GlassmorphicDemoPage;