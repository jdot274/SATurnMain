import React from 'react';
import { Trophy, Target, Brain, Calendar, BookOpen, GraduationCap, ChevronRight, TrendingUp } from 'lucide-react';
import SpaceCard from './SpaceCard';
import ExamCountdownBubble from './ExamCountdownBubble';
import CometProgress from './CometProgress';

const YouAreOnTrack: React.FC = () => {
  return (
    <SpaceCard title="You are on Track">
      <div className="space-y-6 text-white/70">
        {/* Progress Section */}
        <div className="relative backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-blue-400" />
              <span className="text-lg font-medium text-blue-300">Overall Progress</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm">Target: 1500+</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">Current: 1420</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
              <span className="text-lg font-medium text-blue-400">75%</span>
            </div>
            <div className="flex-1">
              <CometProgress progress={75} />
            </div>
          </div>
        </div>
        
        {/* Exam Countdown */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 
                         border border-green-500/30 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-400">45 Days Until Test Day</h3>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm">Target: 1500+</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 text-sm">Current: 1420</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 scale-[0.6] origin-right transform -translate-x-4">
            <ExamCountdownBubble daysLeft={43} className="w-[400px]" />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              <h4 className="text-base font-semibold text-white">Study Streak</h4>
            </div>
            <p className="text-3xl font-bold text-blue-400">12 Days</p>
            <p className="text-sm text-white/60 mt-1">Personal Best!</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <h4 className="text-base font-semibold text-white">Questions</h4>
            </div>
            <p className="text-3xl font-bold text-purple-400">847</p>
            <p className="text-sm text-white/60 mt-1">Completed</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-5 h-5 text-green-400" />
              <h4 className="text-base font-semibold text-white">Progress</h4>
            </div>
            <p className="text-3xl font-bold text-green-400">92%</p>
            <p className="text-sm text-white/60 mt-1">On Track</p>
          </div>
        </div>
      </div>
    </SpaceCard>
  );
};

export default YouAreOnTrack;