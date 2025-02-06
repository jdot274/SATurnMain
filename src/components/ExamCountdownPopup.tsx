import React from 'react';
import { X } from 'lucide-react';
import ExamCountdownBubble from './ExamCountdownBubble';

interface ExamCountdownPopupProps {
  onClose: () => void;
}

const ExamCountdownPopup: React.FC<ExamCountdownPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="relative w-[400px] backdrop-blur-xl bg-white/5 rounded-2xl p-8
                   border border-white/10 space-y-6 animate-fade-in
                   shadow-[0_8px_32px_rgba(255,255,255,0.2)]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 transition-colors
                   hover:scale-110 active:scale-95"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center gap-6">
          <ExamCountdownBubble daysLeft={43} className="w-48 h-48" />
          
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-white">Stay Focused!</h3>
            <p className="text-white/60">
              Keep up your study streak to achieve your target score
            </p>
          </div>
        </div>

        {/* Caption */}
        <div className="text-center pt-4 border-t border-white/10">
          <p className="text-white/40 text-sm">
            Click anywhere outside to close
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamCountdownPopup;