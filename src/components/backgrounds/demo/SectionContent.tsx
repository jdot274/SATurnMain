import React from 'react';

interface SectionContentProps {
  isExpanded: boolean;
  children: React.ReactNode;
}

export const SectionContent: React.FC<SectionContentProps> = ({ isExpanded, children }) => {
  return (
    <div className={`mt-6 space-y-6 overflow-hidden transition-all duration-500 ${
      isExpanded ? 'max-h-[2000px]' : 'max-h-0'
    }`}>
      {children}
    </div>
  );
};