import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import PageLogo from '../components/PageLogo';
import Sphere from '../components/Sphere';
import { CardBackground } from '../components/figmacomponentgreen/components/CardBackground';
import WelcomeBubble from '../components/WelcomeBubble';
import InfoBubble from '../components/InfoBubble';
import OrbConsole from '../components/OrbConsole';
import TestOptions from '../components/TestOptions';
import { useAuth } from '../contexts/AuthContext';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [showFeatures, setShowFeatures] = useState(false);
  const { isSignedIn } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 
                    flex flex-col relative overflow-hidden">
      <PageLogo />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Planet */}
        <div className="absolute w-[120vh] h-[120vh] rounded-full
                      bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950
                      -top-[90vh] left-[50%] transform -translate-x-1/2 -z-10
                      blur-sm" />

        {/* Atmosphere glow effect */}
        <div className="absolute w-[200vw] h-[100vh] -top-[50vh] -left-[50vw] 
                      bg-gradient-to-b from-blue-600/20 via-blue-800/10 to-transparent
                      blur-3xl transform" />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/90 to-slate-950" />

        <Sphere />
      </div>

      <Navigation />

      <main className="flex-1 relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <WelcomeBubble 
            onShowFeatures={setShowFeatures} 
          />

          {/* Additional Content */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-pink-100 
                        from-blue-300 to-blue-100 bg-clip-text text-transparent">
              Prepare for Success
            </h2>
            <p className="text-lg text-blue-200/70">
              Join thousands of students achieving their dream scores with our comprehensive SAT prep platform
            </p>
          </div>

          {showFeatures && (
            <InfoBubble onClose={() => setShowFeatures(false)} />
          )}
          
          <CardBackground className="mx-auto">
            <div className="text-white space-y-4">
              <h3 className="text-2xl font-bold">Welcome to SATurn</h3>
              <p className="text-white/70">
                Your comprehensive SAT preparation platform. Start your journey to success today.
              </p>
            </div>
          </CardBackground>

          {isSignedIn && (
            <>
              <OrbConsole />
              <TestOptions />
            </>
          )}
        </div>

        {/* Bottom Content */}
        <div className="mt-24 text-center space-y-6">
          <h3 className="text-2xl font-bold text-blue-100">Ready to Begin?</h3>
          <button
            onClick={() => navigate('/sign-up')}
            className="px-8 py-3 rounded-xl font-medium transition-all duration-300
                     bg-gradient-to-r from-blue-600 to-blue-400 text-white
                     hover:from-blue-500 hover:to-blue-300
                     shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30
                     transform hover:scale-105 active:scale-95"
          >
            Start Your Journey
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;