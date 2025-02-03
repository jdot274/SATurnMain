import React from 'react';
import { Bell } from 'lucide-react';

export const NotificationButton: React.FC = () => {
  return (
    <button 
      className="p-2 hover:bg-white/5 rounded-lg transition-colors"
      aria-label="Notifications"
    >
      <Bell className="w-5 h-5 text-white/60" />
    </button>
  );
};