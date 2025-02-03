import React from 'react';
import { BookOpen, Brain, Target } from 'lucide-react';

const Footer3D: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent h-[500px]" />
      <div className="container mx-auto px-4 py-24 relative">
        <div className="relative">
          <div className="relative backdrop-blur-xl bg-[#020617]/50">
            <div className="grid grid-cols-3 gap-8">
              {/* Features */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Comprehensive Study</h3>
                </div>
                <p className="text-white/60">
                  Access detailed explanations and practice materials covering all SAT topics
                </p>
              </div>

              {/* Strategy */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                    <Brain className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Expert Strategies</h3>
                </div>
                <p className="text-white/60">
                  Learn proven techniques and approaches to tackle every question type
                </p>
              </div>

              {/* Progress */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
                    <Target className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Track Progress</h3>
                </div>
                <p className="text-white/60">
                  Monitor your improvement with detailed analytics and performance insights
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-16 text-center">
              <p className="text-white/40 text-sm">
                © {new Date().getFullYear()} SATurn. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer3D;