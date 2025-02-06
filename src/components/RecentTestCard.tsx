import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ArrowRight, Plus } from 'lucide-react';

const RecentTestCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 overflow-visible
                    transition-all duration-300 hover:bg-white/10 hover:border-white/20
                    group cursor-pointer overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-400/10
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white/90">SAT Practice Test #8</h3>
          <div className="flex items-center gap-2 text-white/60">
            <Clock className="w-4 h-4" />
            <span>45 min left</span>
          </div>
        </div>

        {/* Progress section */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-white/60">Progress</span>
            <span className="text-blue-400">65%</span>
          </div>
          
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-[65%] bg-gradient-to-r from-blue-600 to-blue-400 
                          rounded-full transition-all duration-300
                          group-hover:shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-white/60">Section: Math (Calculator)</span>
            <span className="text-white/60">Question 28/38</span>
          </div>
        </div>

        {/* Resume button */}
        <button
          onClick={() => navigate('/tests/viewer')}
          className="mt-6 w-full py-2 rounded-lg border border-white/10
                        text-white/80 font-medium group-hover:bg-blue-500/20
                        group-hover:border-blue-500/30 group-hover:text-blue-400
                        transition-all duration-300 flex items-center justify-center gap-2">
          Resume Test
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>

        {/* New test button */}
        <div className="mt-8 text-center">
          <div className="inline-flex flex-col items-center gap-2">
            <button className="p-4 rounded-xl backdrop-blur-xl bg-green-500/20 border border-green-500/30
                            text-green-400 hover:bg-green-500/30 transition-all duration-300
                            hover:scale-110 group-hover:border-green-500/50
                            shadow-lg shadow-green-500/20">
              <Plus className="w-6 h-6" />
            </button>
            <span className="text-sm text-green-400/80">Start a new test (Recommended)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTestCard;