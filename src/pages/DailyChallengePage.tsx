import React from 'react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import SATDailyChallenge from '../components/SATDailyChallenge';

const DailyChallengePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <PageLogo />
      <Navigation />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[200vw] h-[100vh] -top-[30vh] -left-[50vw] 
                      bg-gradient-to-b from-blue-400/30 via-blue-600/10 to-transparent
                      blur-3xl transform -rotate-12" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Daily Challenge</h1>
          <p className="text-lg text-white/60">Test your skills with today's SAT practice questions</p>
        </div>
        
        <SATDailyChallenge />
      </main>
    </div>
  );
}

export default DailyChallengePage;