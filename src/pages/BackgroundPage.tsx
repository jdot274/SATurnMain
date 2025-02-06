import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import { BookOpen, Calculator } from 'lucide-react';

const BackgroundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950
                    flex flex-col relative overflow-hidden">
      <PageLogo />
      <Navigation />

      <main className="flex-1 relative z-10 container mx-auto px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Skills</h1>

          {/* Reading & Writing and Math Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Reading & Writing */}
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-white/60" />
                  <h2 className="text-xl font-bold text-white">Reading & Writing</h2>
                </div>
                <p className="text-white/60 text-sm">Master reading comprehension and writing skills</p>
                
                <div className="space-y-2 mt-4">
                  <div className="flex items-center justify-between text-white/60 text-sm">
                    <span>Reading Comprehension</span>
                  </div>
                  <div className="flex items-center justify-between text-white/60 text-sm">
                    <span>Grammar & Usage</span>
                  </div>
                  <div className="flex items-center justify-between text-white/60 text-sm">
                    <span>Writing Style</span>
                  </div>
                  <div className="flex items-center justify-between text-white/60 text-sm">
                    <span>Vocabulary</span>
                    <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-full">i</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-white/60 text-sm">
                    <span>Total Duration</span>
                    <span>65 min</span>
                  </div>
                  <div className="flex items-center justify-between text-white/60 text-sm mt-2">
                    <span>Total Questions</span>
                    <span>52</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Math */}
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-white/60" />
                  <h2 className="text-xl font-bold text-white">Math</h2>
                </div>
                <p className="text-white/60 text-sm">Master mathematical concepts and problem-solving</p>
                
                <div className="space-y-2 mt-4">
                  <div className="flex items-center justify-between text-white/60 text-sm">
                    <span>Algebra and Functions</span>
                    <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-full">i</span>
                  </div>
                  <div className="flex items-center justify-between text-white/60 text-sm">
                    <span>Number and Operations</span>
                    <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-full">i</span>
                  </div>
                  <div className="flex items-center justify-between text-white/60 text-sm">
                    <span>Geometry and Measurement</span>
                    <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-full">i</span>
                  </div>
                  <div className="flex items-center justify-between text-white/60 text-sm">
                    <span>Data Analysis, Statistics, and Probability</span>
                    <span className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-full">i</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-white/60 text-sm">
                    <span>Total Duration</span>
                    <span>80 min</span>
                  </div>
                  <div className="flex items-center justify-between text-white/60 text-sm mt-2">
                    <span>Total Questions</span>
                    <span>58</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BackgroundPage;