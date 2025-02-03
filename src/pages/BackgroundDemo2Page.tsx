import React from 'react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import { DemoInterface } from '../components/backgrounds/demo2/DemoInterface';
import { GlowingOrb } from '../components/backgrounds/GlowingOrb';
import { NoiseOverlay } from '../components/backgrounds/NoiseOverlay';
import { containerStyles } from '../components/backgrounds/demo2/styles';

const BackgroundDemo2Page: React.FC = () => {
  return (
    <div className={containerStyles.base}>
      <div className="relative z-50">
        <PageLogo />
        <Navigation />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <GlowingOrb />
        <NoiseOverlay />
      </div>

      {/* Main Content */}
      <main className={containerStyles.content}>
        <div className={containerStyles.header}>
          <h1 className="text-5xl font-bold text-white mb-4">
            Think better with Reflect
          </h1>
          <p className="text-xl text-white/60">
            Never miss a note, idea or connection.
          </p>
        </div>

        <DemoInterface />
      </main>
    </div>
  );
};

export default BackgroundDemo2Page;