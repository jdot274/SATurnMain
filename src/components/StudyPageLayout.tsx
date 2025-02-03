import React from 'react';

interface StudyPageLayoutProps {
  show: boolean;
}

const StudyPageLayout: React.FC<StudyPageLayoutProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Main Container */}
      <div className="absolute inset-0 border-2 border-green-500/30">
        <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-green-500 text-xs">
          Main Container (flex-1 flex flex-col relative)
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 border-2 border-yellow-500/30">
        <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-yellow-500 text-xs">
          Background Effects Layer
        </div>
        <div className="absolute inset-0 border border-yellow-500/20 border-dashed" />
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
          Main Content (max-w-6xl mx-auto)
        </div>

        {/* Practice Header */}
        <div className="absolute top-8 inset-x-8 h-16 border-2 border-purple-500/30 rounded-xl">
          <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-purple-500 text-xs">
            Practice Header
          </div>
        </div>

        {/* Stats Grid */}
        <div className="absolute top-32 inset-x-8 h-32 border-2 border-blue-500/30 rounded-xl">
          <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-blue-500 text-xs">
            Stats Grid (grid-cols-3)
          </div>
          <div className="absolute inset-4 grid grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border-2 border-blue-500/20 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Practice Flash Cards */}
        <div className="absolute top-72 inset-x-8 h-[500px] border-2 border-indigo-500/30 rounded-xl">
          <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-indigo-500 text-xs">
            Practice Flash Cards
          </div>
          <div className="absolute inset-4 grid grid-cols-2 gap-8">
            <div className="border-2 border-indigo-500/20 rounded-xl" />
            <div className="border-2 border-indigo-500/20 rounded-xl" />
          </div>
        </div>

        {/* Review Section */}
        <div className="absolute top-[800px] inset-x-8 h-[400px] border-2 border-green-500/30 rounded-xl">
          <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-green-500 text-xs">
            Review Section
          </div>
        </div>

        {/* Learning Topics */}
        <div className="absolute top-[1250px] inset-x-8 h-[300px] border-2 border-purple-500/30 rounded-xl">
          <div className="absolute top-0 left-4 -translate-y-3 bg-black px-2 text-purple-500 text-xs">
            Learning Topics
          </div>
        </div>
      </div>

      {/* Layout Info Panel */}
      <div className="fixed top-4 right-20 w-80 bg-black/90 p-4 rounded-xl border border-green-500/30">
        <h3 className="text-green-500 font-bold mb-2 text-sm">Layout Structure</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-green-500/90 font-medium mb-1 text-xs">Position Types</h4>
            <ul className="text-green-500/70 text-[10px] space-y-1">
              <li>• Fixed: Navigation</li>
              <li>• Absolute: Background Effects</li>
              <li>• Relative: Main Content, Stats Grid</li>
              <li>• Grid: Flash Cards, Stats</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-green-500/90 font-medium mb-1 text-xs">Z-Index Layers</h4>
            <ul className="text-green-500/70 text-[10px] space-y-1">
              <li>• z-50: Navigation</li>
              <li>• z-40: Flash Cards</li>
              <li>• z-30: Stats Grid</li>
              <li>• z-20: Review Section</li>
              <li>• z-10: Learning Topics</li>
              <li>• z-0: Background Effects</li>
            </ul>
          </div>

          <div>
            <h4 className="text-green-500/90 font-medium mb-1 text-xs">Container Bounds</h4>
            <ul className="text-green-500/70 text-[10px] space-y-1">
              <li>• Main Container: flex-1 flex flex-col</li>
              <li>• Content Area: max-w-6xl mx-auto</li>
              <li>• Stats Grid: grid-cols-3 gap-6</li>
              <li>• Flash Cards: grid-cols-2 gap-8</li>
            </ul>
          </div>

          <div>
            <h4 className="text-green-500/90 font-medium mb-1 text-xs">Spacing</h4>
            <ul className="text-green-500/70 text-[10px] space-y-1">
              <li>• Container Padding: px-4 py-8</li>
              <li>• Section Gaps: space-y-8</li>
              <li>• Card Padding: p-6 or p-8</li>
              <li>• Grid Gaps: gap-6 or gap-8</li>
            </ul>
          </div>

          <div>
            <h4 className="text-green-500/90 font-medium mb-1 text-xs">Parent-Child Relationships</h4>
            <ul className="text-green-500/70 text-[10px] space-y-1">
              <li>• Main Container → Content Area</li>
              <li>• Content Area → Stats Grid</li>
              <li>• Content Area → Flash Cards</li>
              <li>• Content Area → Review Section</li>
              <li>• Content Area → Learning Topics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-green-500/90 font-medium mb-1 text-xs">Opacity Values</h4>
            <ul className="text-green-500/70 text-[10px] space-y-1">
              <li>• Main UI Elements: 1.0</li>
              <li>• Background Effects: 0.4</li>
              <li>• Overlays & Borders: 0.3</li>
              <li>• Text & Icons: 0.6-0.9</li>
              <li>• Hover States: +0.2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPageLayout;