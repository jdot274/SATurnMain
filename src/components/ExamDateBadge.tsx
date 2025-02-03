import React from 'react';
import { Calendar } from 'lucide-react';

export const ExamDateBadge: React.FC = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 via-green-500 to-green-400 
                   rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
      <div className="relative px-4 py-2 bg-gradient-to-r from-green-600/20 via-green-500/20 to-green-400/20 
                   backdrop-blur-xl rounded-lg border border-green-500/30 flex items-center gap-2">
        <Calendar className="w-4 h-4 text-green-400" />
        <span className="text-sm text-white/80">SAT Exam: March 9th, 2024</span>
      </div>
    </div>
  );
};

export default ExamDateBadge;