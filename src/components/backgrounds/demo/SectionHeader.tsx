import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  isExpanded, 
  onToggle,
  children 
}) => {
  return (
    <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 mb-8">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={onToggle}
      >
        <h1 className="text-3xl font-bold text-white/90">{title}</h1>
        <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
          isExpanded ? 'rotate-180' : ''
        }`} />
      </div>
      {children}
    </div>
  );
};