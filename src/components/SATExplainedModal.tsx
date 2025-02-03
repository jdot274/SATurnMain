import React from 'react';
import { X, BookOpen, Calculator, Clock, Brain } from 'lucide-react';

interface SATExplainedModalProps {
  onClose: () => void;
}

const SATExplainedModal: React.FC<SATExplainedModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 perspective-1000">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl backdrop-blur-xl bg-white/5 rounded-2xl p-8
                   border border-white/10 space-y-6
                   shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                   transform-style-preserve-3d rotate-x-12
                   animate-[modal-pop_0.4s_ease-out_forwards]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 transition-colors
                   hover:scale-110 active:scale-95"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white">Understanding the SAT</h2>

        {/* Main sections */}
        <div className="grid grid-cols-2 gap-6">
          {/* Reading & Writing */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-500/20 border border-blue-500/30">
                <BookOpen className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Reading & Writing</h4>
            </div>
            <ul className="space-y-2 text-white/80">
              <li>• Two 32-minute modules</li>
              <li>• 54 total multiple-choice questions</li>
              <li>• 64 minutes total</li>
              <li>• Passages or pairs of passages</li>
              <li>• Tests reading comprehension and writing skills</li>
            </ul>
          </div>

          {/* Math */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-purple-500/20 border border-purple-500/30">
                <Calculator className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Math</h4>
            </div>
            <ul className="space-y-2 text-white/80">
              <li>• Two 35-minute modules</li>
              <li>• 44 total questions</li>
              <li>• 70 minutes total</li>
              <li>• Algebra, geometry, and trigonometry</li>
              <li>• Calculator and no-calculator sections</li>
            </ul>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
                <Clock className="w-5 h-5 text-green-400" />
              </div>
              <h5 className="text-lg font-semibold text-white">Test Format</h5>
            </div>
            <ul className="space-y-2 text-white/70">
              <li>• Total time: 134 minutes</li>
              <li>• Digital adaptive testing</li>
              <li>• Score range: 400-1600</li>
              <li>• Optional essay discontinued</li>
            </ul>
          </div>

          <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-yellow-500/20 border border-yellow-500/30">
                <Brain className="w-5 h-5 text-yellow-400" />
              </div>
              <h5 className="text-lg font-semibold text-white">Key Skills Tested</h5>
            </div>
            <ul className="space-y-2 text-white/70">
              <li>• Problem-solving</li>
              <li>• Critical analysis</li>
              <li>• Evidence-based reading</li>
              <li>• Mathematical reasoning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SATExplainedModal;