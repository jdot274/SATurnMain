import React from 'react';
import { Bell, BookOpen, Trophy, TrendingUp, Calendar, Clock, Brain } from 'lucide-react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';

const StudyStreakPage = () => {
  return (
    <div className="page-layout">
      <PageLogo />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[200vw] h-[100vh] -top-[30vh] -left-[50vw] 
                      bg-gradient-to-b from-blue-400/30 via-blue-600/10 to-transparent
                      blur-3xl transform -rotate-12" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950" />
      </div>

      <Navigation />

      {/* Main Content */}
      <main className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white/90">Study Streak Details</h1>
          <p className="text-white/60 mt-2">Keep up your amazing progress!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white/90">Practice Score</h3>
              <TrendingUp className="h-6 w-6 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-blue-400 mt-2">1420</p>
            <p className="text-sm text-white/60 mt-1">+50 points this week</p>
          </div>
          
          <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white/90">Study Streak</h3>
              <Trophy className="h-6 w-6 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-blue-400 mt-2">12 days</p>
            <p className="text-sm text-white/60 mt-1">Keep it going!</p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white/90">Questions Done</h3>
              <BookOpen className="h-6 w-6 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-blue-400 mt-2">847</p>
            <p className="text-sm text-white/60 mt-1">Top 10% of users</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6 mb-8">
          <h2 className="text-xl font-semibold text-white/90 mb-4">Continue Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center p-4 border border-white/10 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
              <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30">
                <Clock className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-white/90">Practice Test #4</h3>
                <p className="text-sm text-white/60">Resume where you left off</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 border border-white/10 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
              <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/30">
                <Calendar className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-white/90">Daily Challenge</h3>
                <p className="text-sm text-white/60">5 questions • Math</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Practice */}
        <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white/90 mb-4">Recommended Practice</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center border border-red-500/30">
                  <span className="text-red-400 font-medium">-7</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-white/90">Quadratic Equations</h3>
                  <p className="text-sm text-white/60">Most missed topic</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 
                             hover:bg-blue-500/30 transition-colors">
                Practice Now
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center border border-yellow-500/30">
                  <span className="text-yellow-400 font-medium">-4</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-white/90">Reading Inference</h3>
                  <p className="text-sm text-white/60">Needs improvement</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 
                             hover:bg-blue-500/30 transition-colors">
                Practice Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudyStreakPage;