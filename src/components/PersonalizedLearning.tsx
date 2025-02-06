import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, GraduationCap, Grid } from 'lucide-react';

const PersonalizedLearning: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-lg font-semibold text-purple-300">Comprehensive Learning</h4>
              <div className="group relative">
                <div className="w-5 h-5 rounded-full bg-pink-500/20 border border-pink-500/30 
                        flex items-center justify-center text-pink-400 cursor-help">
                  i
                </div>
                <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-64
                        bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-3
                        invisible opacity-0 group-hover:visible group-hover:opacity-100
                        transition-all duration-200 z-50">
                  <p className="text-sm text-white/70">
                    Adaptive study plans tailored to your strengths and areas for improvement.
                  </p>
                  <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 
                          bg-white/5 border-r border-b border-white/10 rotate-45"></div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={() => navigate('/sat')}
                  className="px-4 py-2 rounded-lg bg-pink-500/20 border border-pink-500/30 
                         text-pink-400 hover:bg-pink-500/30 transition-all duration-300
                         flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  SAT Explained
                </button>
                <button
                  onClick={() => navigate('/study-streak-details')}
                  className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 
                         text-purple-400 hover:bg-purple-500/30 transition-all duration-300
                         flex items-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  Learn Topics
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h4 className="text-lg font-semibold text-blue-300 mb-2">Unlimited Practice</h4>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/practice/flashcards')}
                className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 
                       text-blue-400 hover:bg-blue-500/30 transition-all duration-300
                       flex items-center gap-2"
              >
                <Grid className="w-4 h-4" />
                Flash Cards
              </button>
              <button
                onClick={() => navigate('/vocab-builder')}
                className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 
                       text-blue-400 hover:bg-blue-500/30 transition-all duration-300
                       flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Vocab Builder
              </button>
            </div>
          </div>
    </div>
  );
};

export default PersonalizedLearning;