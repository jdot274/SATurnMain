import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface BackgroundSectionProps {
  isExpanded?: boolean;
  onToggle?: () => void;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({
  isExpanded = false,
  onToggle
}) => {
  const [isExpandedInternal, setIsExpandedInternal] = useState(isExpanded);

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setIsExpandedInternal(!isExpandedInternal);
    }
  };

  const expanded = onToggle ? isExpanded : isExpandedInternal;

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 
                   rounded-xl blur opacity-75 group-hover:opacity-100 animate-[pulse_3s_cubic-bezier(0.4,0,0.8,1)_infinite]
                   transition-opacity duration-700" />
      <div className="relative px-4 py-2 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-blue-400/20 
                   backdrop-blur-xl rounded-xl border border-blue-500/30">
        <div className="flex items-center justify-between cursor-pointer"
             onClick={handleToggle}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 via-purple-200 to-blue-100 
                      bg-clip-text text-transparent">Background</h2>
          <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
            expanded ? 'rotate-180' : ''
          }`} />
        </div>
        {!expanded && (
          <p className="text-lg text-white/60 mt-2">
            Continue your learning journey with personalized practice sessions
          </p>
        )}
        <div className={`mt-4 overflow-hidden transition-all duration-500 ${
          expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col items-center gap-3 relative z-10">
            <button
              className="px-4 py-2 rounded-xl backdrop-blur-xl border border-pink-500/30 
                     bg-pink-500/20 text-pink-400 hover:bg-pink-500/30
                     transition-all duration-300 flex items-center gap-3 font-medium
                     mx-auto text-base shadow-lg shadow-pink-500/20
                     hover:scale-105 active:scale-95"
            >
              Summary
            </button>
            <button
              className="px-4 py-2 rounded-xl backdrop-blur-xl border border-blue-500/30 
                     bg-blue-500/20 text-blue-400 hover:bg-blue-500/30
                     transition-all duration-300 flex items-center gap-3 font-medium
                     mx-auto text-base shadow-lg shadow-blue-500/20
                     hover:scale-105 active:scale-95"
            >
              FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;