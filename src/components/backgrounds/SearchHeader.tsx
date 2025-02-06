import React from 'react';
import { Search, Bell } from 'lucide-react';

const SearchHeader: React.FC = () => {
  return (
    <div className="p-4 border-b border-white/10 flex items-center gap-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2
                   text-white/60 placeholder:text-white/40 focus:outline-none"
        />
      </div>
      <button 
        className="p-2 hover:bg-white/5 rounded-lg transition-colors"
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5 text-white/60" />
      </button>
    </div>
  );
};

export default SearchHeader;