import React from 'react';
import { SearchHeader } from './SearchHeader';
import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';

export const DemoInterface: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-20 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
      <SearchHeader />
      <div className="grid grid-cols-[250px,1fr] h-[600px]">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};