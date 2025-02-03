import React from 'react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import GreenStyledPopup from '../components/GreenStyledPopup';

const GreenComponentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 
                    flex flex-col relative overflow-hidden">
      <PageLogo />
      <Navigation />
      <GreenStyledPopup />
    </div>
  );
};

export default GreenComponentsPage;