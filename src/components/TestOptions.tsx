import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ArrowRight, Plus, BookOpen } from 'lucide-react';

const cardStyles = {
  wrapper: "group relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 h-full",
  container: "flex flex-col h-full",
  header: "mb-6",
  content: "flex-1 space-y-4",
  footer: "mt-auto pt-6 border-t border-white/10"
};

const TestOptions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Current Test Card */}
      <div className="cursor-pointer" onClick={() => navigate('/tests/viewer')}>
        <div
             className={`${cardStyles.wrapper} hover:bg-blue-500/5 hover:border-blue-500/20
                      transition-all duration-300`}>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-400/10 
                       opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />

          <div className={cardStyles.container}>
            <div className={cardStyles.header}>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Current Test
              </h3>
            </div>

            <div className={cardStyles.content}>
              <p className="text-lg text-white/70">
                Continue your progress on SAT Practice Test #8. You're making great progress!
              </p>
              
              <div className="flex items-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>45 min left</span>
                </div>
                <span>•</span>
                <span>28/38 complete</span>
              </div>
            </div>

            <div className={cardStyles.footer}>
              <button className="w-full py-3 rounded-xl font-medium
                           bg-blue-500/20 text-blue-400 border border-blue-500/30
                           hover:bg-blue-500/30 hover:border-blue-500/50
                           transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
                           flex items-center justify-center gap-2">
                Resume Test
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Test Card */}
      <div className="cursor-pointer" onClick={() => navigate('/tests/viewer')}>
        <div
             className={`${cardStyles.wrapper} hover:bg-green-500/5 hover:border-green-500/20
                      transition-all duration-300`}>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-400/10 
                       opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />

          <div className={cardStyles.container}>
            <div className={cardStyles.header}>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Recommended Test
              </h3>
            </div>

            <div className={cardStyles.content}>
              <p className="text-lg text-white/70">
                Start SAT Practice Test #10, carefully selected based on your progress and learning path.
              </p>
              
              <div className="flex items-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>3h 15m</span>
                </div>
                <span>•</span>
                <span>154 questions</span>
              </div>
            </div>

            <div className={cardStyles.footer}>
              <button className="w-full py-3 rounded-xl font-medium
                           bg-green-500/20 text-green-400 border border-green-500/30
                           hover:bg-green-500/30 hover:border-green-500/50
                           transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]
                           flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                Start New Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestOptions;