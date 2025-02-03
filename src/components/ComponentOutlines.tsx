import React from 'react';

interface ComponentOutlinesProps {
  show: boolean;
}

interface ComponentLabel {
  name: string;
  path: string;
  top: string | number;
  left: string | number;
  type?: 'component' | 'absolute-element';
  styles?: string;
  width?: string;
  height?: string;
  transform?: string;
  zIndex?: number;
}

const ComponentOutlines: React.FC<ComponentOutlinesProps> = ({ show }) => {
  if (!show) return null;
  
  const componentLabels: ComponentLabel[] = [
    // Main Components
    { name: 'PageLogo', path: '/src/components/PageLogo.tsx', top: 4, left: 4, width: '48px', height: '48px' },
    { name: 'Navigation', path: '/src/components/Navigation.tsx', top: 4, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '48px' },
    { name: 'Welcome', path: '/src/components/Welcome.tsx', top: 32, left: 8, height: '300px' },
    { name: 'PersonalizedLearning', path: '/src/components/PersonalizedLearning.tsx', top: 350, left: 8, height: '200px' },
    { name: 'YouAreOnTrack', path: '/src/components/YouAreOnTrack.tsx', top: 650, left: 8, height: '300px' },
    
    // Background Elements
    { 
      name: 'BlueSun',
      path: '/src/components/BlueSun.tsx',
      type: 'absolute-element',
      styles: 'absolute w-[132vh] h-[132vh] -top-[65vh] left-[calc(48%-20px)] transform -translate-x-1/2',
      top: '10vh',
      left: 'calc(48%-20px)',
      transform: 'translateX(-50%)',
      width: '132vh',
      height: '132vh',
      zIndex: 30
    },
    {
      name: 'SphereCopy',
      path: '/src/components/SphereCopy.tsx',
      type: 'absolute-element',
      styles: 'absolute w-[125vh] h-[125vh] -top-[55vh] left-[calc(48%-20px)] transform -translate-x-1/2',
      top: '15vh',
      left: 'calc(48%-20px)',
      transform: 'translateX(-50%)',
      width: '140vh',
      height: '140vh',
      zIndex: 30
    },
    
    // Interactive Elements
    { name: 'QuickActions', path: '/src/components/QuickActions.tsx', top: 24, left: '50%', transform: 'translateX(-50%)', width: '300px', height: '48px' },
    { name: 'ExpertGuidanceButtons', path: '/src/components/ExpertGuidanceButtons.tsx', top: 40, right: '50%', transform: 'translateX(50%)', width: '300px', height: '48px' },
    
    // Popups and Modals
    { name: 'GreenStyledPopup', path: '/src/components/GreenStyledPopup.tsx', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90vw', height: '90vh', zIndex: 200 },
    { name: 'ExamCountdownPopup', path: '/src/components/ExamCountdownPopup.tsx', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: 'auto', zIndex: 200 },
    
    // Progress Elements
    { name: 'ProgressTracker', path: '/src/components/ProgressTracker.tsx', top: 700, left: 8, height: '120px' },
    { name: 'CometProgress', path: '/src/components/CometProgress.tsx', top: 850, left: 8, height: '120px' },
    { name: 'ThermometerProgress', path: '/src/components/ThermometerProgress.tsx', top: 1000, left: 8, height: '120px' },
    { 
      name: 'ProgressTrackerBlueSun',
      path: '/src/components/BlueSun.tsx',
      type: 'absolute-element',
      styles: 'relative w-full h-[400px] backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10',
      top: 1150,
      left: 8,
      height: '400px',
      zIndex: 30
    },
    
    // Sub-components
    { name: 'WelcomeBackBanner', path: '/src/components/WelcomeBackBanner.tsx', top: 80, left: 8, height: '48px' },
    { name: 'ExamDateBadge', path: '/src/components/ExamDateBadge.tsx', top: 140, left: 8, height: '48px' },
    { name: 'InfoBubble', path: '/src/components/InfoBubble.tsx', top: 200, left: 8, height: '48px' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      {componentLabels.map((label, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: label.top,
            left: label.left,
            right: label.right,
            width: label.width,
            height: label.height,
            transform: label.transform,
            zIndex: label.zIndex
          }}
        >
          <div className="absolute inset-0 border-2 border-green-500/30 rounded-xl" />
          <div className="absolute -top-3 left-4 px-2 bg-black text-green-500 text-xs group">
            <div className="pointer-events-auto select-text cursor-text">
              {label.path}
              {label.type === 'absolute-element' && (
                <div className="mt-1 text-[10px] text-green-500/70 whitespace-pre-wrap">
                  {label.styles}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[600px] h-12">
        <div className="absolute inset-0 border-2 border-green-500/30 rounded-xl" />
        <div className="absolute -top-3 left-4 px-2 bg-black text-green-500 text-xs">
          &lt;Navigation /&gt;
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[300px] h-12">
        <div className="absolute inset-0 border-2 border-green-500/30 rounded-xl" />
        <div className="absolute -top-3 left-4 px-2 bg-black text-green-500 text-xs">
          &lt;ActionButtons /&gt;
        </div>
      </div>

      {/* Welcome Component */}
      <div className="absolute top-32 left-8 right-8 h-[300px]">
        <div className="absolute inset-0 border-2 border-green-500/30 rounded-2xl" />
        <div className="absolute -top-3 left-4 px-2 bg-black text-green-500 text-xs">
          &lt;Welcome /&gt; - relative w-full flex flex-col
        </div>
        <div className="absolute inset-4 border-2 border-dashed border-green-500/20 rounded-xl" />
      </div>

      {/* PersonalizedLearning Component */}
      <div className="absolute top-[350px] left-8 right-8 h-[200px]">
        <div className="absolute inset-0 border-2 border-green-500/30 rounded-2xl" />
        <div className="absolute -top-3 left-4 px-2 bg-black text-green-500 text-xs">
          &lt;PersonalizedLearning /&gt; - normal flow
        </div>
        <div className="absolute inset-4 border-2 border-dashed border-green-500/20 rounded-xl" />
      </div>

      {/* You Are On Track Section */}
      <div className="absolute top-[650px] left-8 right-8 h-[300px]">
        <div className="absolute inset-0 border-2 border-green-500/30 rounded-2xl" />
        <div className="absolute -top-3 left-4 px-2 bg-black text-green-500 text-xs">
          &lt;YouAreOnTrack /&gt; - relative z-100 opacity-90
        </div>
        <div className="absolute inset-4 border-2 border-dashed border-green-500/20 rounded-xl" />
      </div>

      {/* BlueSun Component */}
      {/* Top BlueSun */}
      <div className="absolute w-[132vh] h-[132vh] -top-[65vh] left-[calc(48%-20px)] -translate-x-1/2">
        <div className="absolute inset-0 border-2 border-green-500/30 rounded-full" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 px-2 bg-black text-green-500 text-xs">
          &lt;BlueSun /&gt; - absolute z-30
        </div>
        <div className="absolute -bottom-3 left-4 px-2 bg-black text-green-500/70 text-[10px]">
          absolute w-[132vh] h-[132vh] -top-[65vh] left-[calc(48%-20px)] transform -translate-x-1/2
        </div>
      </div>
      
      {/* Bottom BlueSun in ProgressTrackerSection */}
      <div className="absolute top-[1150px] left-8 right-8 h-[400px]">
        <div className="absolute inset-0 border-2 border-green-500/30 rounded-2xl" />
        <div className="absolute -top-3 left-4 px-2 bg-black text-green-500 text-xs">
          &lt;BlueSun /&gt; - relative w-full h-[400px]
        </div>
        <div className="absolute -bottom-3 left-4 px-2 bg-black text-green-500/70 text-[10px]">
          backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10
        </div>
      </div>

      {/* SphereCopy Component */}
      <div className="absolute w-[140vh] h-[140vh] -top-[60vh] left-[calc(48%-20px)] -translate-x-1/2">
        <div className="absolute inset-0 border-2 border-green-500/30 rounded-full" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 px-2 bg-black text-green-500 text-xs">
          &lt;SphereCopy /&gt; - absolute z-30
        </div>
        <div className="absolute -bottom-3 left-4 px-2 bg-black text-green-500/70 text-[10px]">
          absolute w-[125vh] h-[125vh] -top-[55vh] left-[calc(48%-20px)] transform -translate-x-1/2
        </div>
      </div>

      {/* Expert Guidance Buttons */}
      <div className="absolute top-24 right-1/2 translate-x-1/2 mt-16 w-[300px] h-12">
        <div className="absolute inset-0 border-2 border-green-500/30 rounded-xl" />
        <div className="absolute -top-3 left-4 px-2 bg-black text-green-500 text-xs">
          &lt;ExpertGuidanceButtons /&gt; - fixed z-30
        </div>
      </div>

      {/* Component Tree Panel */}
      <div className="fixed top-4 right-4 w-64 bg-black/90 p-4 rounded-xl border border-green-500/30">
        <h3 className="text-green-500 font-bold mb-4">Component Tree</h3>
        <div className="space-y-2 text-green-500/70 text-sm">
          {componentLabels.map((label, index) => (
            <div key={index} className="flex items-center gap-2">
              <span>•</span>
              <span className="pointer-events-auto select-text cursor-text">
                {label.path.replace('.tsx', '')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentOutlines;