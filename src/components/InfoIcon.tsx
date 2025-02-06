import React from 'react';
import { Info } from 'lucide-react';

interface InfoIconProps {
  onClick: () => void;
}

const InfoIcon: React.FC<InfoIconProps> = ({ onClick }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="p-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/30
                hover:bg-yellow-500/30 transition-colors group relative"
    >
      <Info className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300" />
    </button>
  );
};

export default InfoIcon;