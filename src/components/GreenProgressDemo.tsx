import React, { useState, useEffect } from 'react';
import GreenProgressBubble from './GreenProgressBubble';

const GreenProgressDemo: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev + 1) % 101);
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-green-950 to-slate-950
                    flex flex-col items-center justify-center p-8">
      <div className="grid grid-cols-3 gap-12">
        <div className="flex flex-col items-center gap-4">
          <GreenProgressBubble
            progress={progress}
            size="sm"
            label="Small"
          />
          <p className="text-white/60">Small Bubble</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <GreenProgressBubble
            progress={progress}
            size="md"
            label="Medium"
          />
          <p className="text-white/60">Medium Bubble</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <GreenProgressBubble
            progress={progress}
            size="lg"
            label="Large"
          />
          <p className="text-white/60">Large Bubble</p>
        </div>
      </div>
    </div>
  );
};

export default GreenProgressDemo;