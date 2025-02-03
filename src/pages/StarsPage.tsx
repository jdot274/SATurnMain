import React from 'react';
import { Stars } from '../components/stars';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import CardWrapper from '../components/cards/CardWrapper';

const StarsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 
                    flex flex-col relative overflow-hidden">
      <PageLogo />
      <Navigation />

      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Stars />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 
                        bg-clip-text text-transparent mb-4">
              Dynamic Stars Background
            </h1>
            <p className="text-lg text-white/60">
              An immersive animated background with twinkling stars and constellations
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardWrapper>
              <h3 className="text-xl font-bold text-white mb-3">Performance Optimized</h3>
              <p className="text-white/70">
                Built with performance in mind, using efficient rendering techniques
                to maintain smooth animations even with hundreds of particles.
              </p>
            </CardWrapper>

            <CardWrapper>
              <h3 className="text-xl font-bold text-white mb-3">Responsive Design</h3>
              <p className="text-white/70">
                Automatically adapts to different screen sizes while maintaining
                the perfect density of stars and visual appeal.
              </p>
            </CardWrapper>

            <CardWrapper>
              <h3 className="text-xl font-bold text-white mb-3">Interactive Elements</h3>
              <p className="text-white/70">
                Stars and constellations respond to user interaction, creating
                an engaging and dynamic experience.
              </p>
            </CardWrapper>

            <CardWrapper>
              <h3 className="text-xl font-bold text-white mb-3">Customizable</h3>
              <p className="text-white/70">
                Easily adjust colors, density, and animation parameters to match
                your project's visual style.
              </p>
            </CardWrapper>
          </div>

          {/* Technical Details */}
          <CardWrapper className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Technical Details</h3>
            <ul className="space-y-2 text-white/70">
              <li>• Over 400 animated particles with individual behaviors</li>
              <li>• Smooth transitions and parallax effects</li>
              <li>• GPU-accelerated animations for optimal performance</li>
              <li>• Responsive scaling and positioning</li>
              <li>• Built with React and CSS animations</li>
            </ul>
          </CardWrapper>
        </div>
      </main>
    </div>
  );
};

export default StarsPage;