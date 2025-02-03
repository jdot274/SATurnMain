import React from 'react';
import SearchHeader from './SearchHeader';
import { cn } from '@/lib/utils';

const DemoInterface: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-20 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
      <SearchHeader />

      <div className="grid grid-cols-[250px,1fr] h-[600px]">
        {/* Sidebar */}
        <div className="border-r border-white/10 p-4 space-y-4">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-10 bg-white/5 rounded-lg animate-pulse",
                "animate-[pulse_2s_ease-in-out_infinite]"
              )}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="p-6 space-y-4">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-6 bg-white/5 rounded-lg animate-pulse",
                "animate-[pulse_2s_ease-in-out_infinite]"
              )}
              style={{ 
                width: `${Math.random() * 40 + 60}%`,
                animationDelay: `${i * 0.15}s` 
              }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoInterface;