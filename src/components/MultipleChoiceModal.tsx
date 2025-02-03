import React from 'react';
import { X } from 'lucide-react';

interface MultipleChoiceModalProps {
  onClose: () => void;
}

const MultipleChoiceModal: React.FC<MultipleChoiceModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-4xl backdrop-blur-xl bg-white/5 rounded-2xl p-8
                   border border-white/10 space-y-6 animate-fade-in
                   shadow-[0_8px_32px_rgba(34,197,94,0.3)]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 transition-colors
                   hover:scale-110 active:scale-95"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Multiple Choice Questions</h2>
          
          <div className="space-y-4">
            <p className="text-lg text-white/70 leading-relaxed">
              Multiple choice questions provide you with a set of possible answers to choose from. These questions test your ability to analyze, evaluate, and select the best answer from given options.
            </p>

            <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Example Question</h3>
              <div className="bg-white/10 rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  A line in the xy-plane passes through the origin and has a slope of ⅐. Which of the following points lies on the line?
                </p>
                <div className="space-y-2 pl-4">
                  <div className="text-white/80">A) (0, 7)</div>
                  <div className="text-white/80">B) (1, 7)</div>
                  <div className="text-white/80">C) (7, 7)</div>
                  <div className="text-white/80">D) (14, 2)</div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                  <span>Four answer choices labeled A through D</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                  <span>Only one answer choice is correct</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                  <span>No penalty for wrong answers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                  <span>Questions may include graphs, tables, or other visual elements</span>
                </li>
              </ul>
            </div>

            <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Test-Taking Tips</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                  <span>Read all answer choices before selecting your answer</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                  <span>Use process of elimination to narrow down options</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                  <span>Look for keywords that might make an answer choice incorrect</span>
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

export default MultipleChoiceModal;