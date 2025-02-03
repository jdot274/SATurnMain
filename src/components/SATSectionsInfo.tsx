import React, { useState } from 'react';
import { BookOpen, Calculator, Info, X } from 'lucide-react';

const SATSectionsInfo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 rounded-lg backdrop-blur-xl border border-white/30 text-white
                 hover:bg-white/10 transition-all duration-300 flex items-center gap-2
                 font-medium"
      >
        <Info className="w-5 h-5" />
        <span>SAT Sections</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Content */}
          <div className="relative w-full max-w-4xl backdrop-blur-xl bg-white/5 rounded-2xl p-8
                       border border-white/10 shadow-2xl space-y-6 animate-fade-in
                       [mask-image:linear-gradient(to_bottom,transparent,black_20px,black_calc(100%-20px),transparent)]">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 transition-colors
                       hover:scale-110 active:scale-95"
            >
              <X className="w-5 h-5 text-white/60" />
            </button>

            {/* Title */}
            <h2 className="text-3xl font-bold text-white">SAT Sections</h2>

            {/* Description */}
            <p className="text-white/80">
              The SAT is comprised of two sections: Evidence-Based Reading and Writing and Math, each containing two
              modules. You will have a 10-minute break between the two sections.
            </p>

            {/* What's on the SAT */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">What's on the SAT:</h3>
              <p className="text-white/80 mb-2">The Digital SAT contains 2 sections:</p>
              <ul className="list-disc list-inside text-white/80 mb-4 space-y-1">
                <li>Reading & Writing</li>
                <li>Math</li>
              </ul>
              <p className="text-white/80">The SAT format includes 98 questions.</p>
            </div>

            {/* Section Details */}
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
                  <li>• Passages or pairs of passages (Craft and Structure, Information and Ideas, Standard English Conventions, and Expression of Ideas)</li>
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
                  <li>• Algebra I and II, geometry, and some trigonometry</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SATSectionsInfo;