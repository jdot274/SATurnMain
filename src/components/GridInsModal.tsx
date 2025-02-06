import React from 'react';
import { X } from 'lucide-react';

interface GridInsModalProps {
  onClose: () => void;
}

const GridInsModal: React.FC<GridInsModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-4xl backdrop-blur-xl bg-white/5 rounded-2xl p-8
                   border border-white/10 space-y-6 animate-fade-in
                   shadow-[0_8px_32px_rgba(251,146,60,0.3)]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 transition-colors
                   hover:scale-110 active:scale-95"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Grid-in Questions</h2>
          
          <div className="space-y-4">
            <p className="text-lg text-white/70 leading-relaxed">
              Grid-ins, also known as student-produced response questions, are questions that don't provide
              you with possible answer choices.
            </p>

            <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Example Question</h3>
              <div className="bg-white/10 rounded-lg p-6 space-y-4">
                <div className="text-center space-y-4 text-white/90">
                  <p className="text-lg">x + y = -9</p>
                  <p className="text-lg">x + 2y = -25</p>
                </div>
                <p className="text-white/90 mt-6">
                  According to the system of equations above, what is the value of x?
                </p>
                <p className="text-white/60 mt-4 italic">
                  Note: Grid-in questions require students to calculate and enter their own answer rather
                  than selecting from provided choices.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>13 grid-in questions appear in the Math section</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>You must calculate the exact answer - no answer choices are provided</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>Answers can be positive numbers, negative numbers, or decimals</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>No partial credit is given - answers must be exact</span>
                </li>
              </ul>
            </div>

            <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Tips for Grid-ins</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>Write your answer in the boxes at the top of the grid</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>Mark the corresponding circles below the boxes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>Double-check your work - no partial credit is given</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 mt-8">
          <p className="text-white/60 text-sm text-center">
            Click anywhere outside to close this window
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridInsModal;