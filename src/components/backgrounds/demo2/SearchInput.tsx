import React from 'react';
import { Search } from 'lucide-react';

export const SearchInput: React.FC = () => {
  return (
    <div className="flex-1 relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
      <input
        type="text"
        placeholder="Search anything..."
        className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2
                 text-white/60 placeholder:text-white/40 focus:outline-none focus:border-purple-500/50
                 transition-colors"
      />
    </div>
  );
};