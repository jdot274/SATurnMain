import React from 'react';

interface LayoutVisualizerProps {
  show: boolean;
}

const LayoutVisualizer: React.FC<LayoutVisualizerProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Page Root */}
      <div className="absolute inset-0 border-4 border-green-500/30" data-element="page-root">
        <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-green-500 text-xs">
          Page Root (static w-full h-full bg-[#0a041a])
        </div>
      </div>

      {/* Background Effects Layer */}
      <div className="absolute inset-0 border-2 border-yellow-500/30" data-element="background-effects">
        <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-yellow-500 text-xs">
          Background Effects (z-[5])
        </div>
        <div className="absolute inset-0 border border-yellow-500/20 border-dashed" />
      </div>

      {/* Blue Sun Layer */}
      <div className="absolute inset-0 border-2 border-blue-500/30" data-element="blue-sun-layer">
        <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-blue-500 text-xs">
          Blue Sun Layer (z-[20])
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 h-16 border-2 border-blue-500/30">
        <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-blue-500 text-xs">
          Navigation (z-50)
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-20 inset-x-4 bottom-4 border-2 border-green-500/30 rounded-xl">
        <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-green-500 text-xs">
          Main Content (z-[10])
        </div>

        {/* Saturn Logo Title */}
        <div className="absolute top-8 inset-x-8 h-16 border-2 border-purple-500/30 rounded-xl">
          <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-purple-500 text-xs">
            SaturnLogoTitle
          </div>
        </div>

        {/* Exam Countdown */}
        <div className="absolute top-32 inset-x-8 h-16 border-2 border-blue-500/30 rounded-xl">
          <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-blue-500 text-xs">
            ExamCountdownBubble
          </div>
        </div>

        {/* Welcome Section */}
        <div className="absolute top-56 inset-x-8 h-[200px] border-2 border-purple-500/30 rounded-xl">
          <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-purple-500 text-xs">
            Welcome
          </div>
        </div>

        {/* Progress Window */}
        <div className="absolute top-[300px] inset-x-8 h-[200px] border-2 border-indigo-500/30 rounded-xl">
          <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-indigo-500 text-xs">
            ProgressWindow
          </div>
        </div>

        {/* You Are On Track */}
        <div className="absolute top-[550px] inset-x-8 h-[300px] border-2 border-green-500/30 rounded-xl">
          <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-green-500 text-xs">
            YouAreOnTrack
          </div>
        </div>
      </div>

      {/* Layout Info Panel */}
      <div className="fixed top-4 right-20 w-80 bg-black/90 p-4 rounded-xl border border-green-500/30">
        <h3 className="text-green-500 font-bold mb-2 text-sm">Layout Structure</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-green-500/90 font-medium mb-1 text-xs">Z-Index Stack</h4>
            <ul className="text-green-500/70 text-[10px] space-y-1">
              <li>• Navigation: z-50</li>
              <li>• Notifications: z-100</li>
              <li>• Blue Sun Layer: z-20</li>
              <li>• Main Content: z-10</li>
              <li>• Background Effects: z-5</li>
            </ul>
          </div>

          <div>
            <h4 className="text-green-500/90 font-medium mb-1 text-xs">Component Hierarchy</h4>
            <ul className="text-green-500/70 text-[10px] space-y-1">
              <li>• Page Root</li>
              <li className="pl-4">• Background Effects</li>
              <li className="pl-4">• Blue Sun Layer</li>
              <li className="pl-4">• Navigation</li>
              <li className="pl-4">• Main Content</li>
              <li className="pl-8">• SaturnLogoTitle</li>
              <li className="pl-8">• ExamCountdownBubble</li>
              <li className="pl-8">• Welcome</li>
              <li className="pl-8">• ProgressWindow</li>
              <li className="pl-8">• YouAreOnTrack</li>
            </ul>
          </div>

          <div>
            <h4 className="text-green-500/90 font-medium mb-1 text-xs">Spacing & Dimensions</h4>
            <ul className="text-green-500/70 text-[10px] space-y-1">
              <li>• Container: max-w-4xl mx-auto</li>
              <li>• Section Gap: space-y-12</li>
              <li>• Component Padding: p-8</li>
              <li>• Inner Spacing: gap-4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutVisualizer;