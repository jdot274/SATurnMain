import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Timer, Flag } from 'lucide-react';
import Navigation from '../components/Navigation';
import PageLogo from '../components/PageLogo';
import { cn } from '@/lib/utils';

interface Question {
  id: number;
  status: 'unanswered' | 'answered' | 'flagged' | 'current';
}

const TestViewer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const totalPages = 4;
  const [timeLeft, setTimeLeft] = useState(65 * 60); // 65 minutes in seconds
  const [questions] = useState<Question[]>(
    Array.from({ length: 52 }, (_, i) => ({
      id: i + 1,
      status: i === 2 ? 'current' : i < 2 ? 'answered' : 'unanswered'
    }))
  );
  const [currentQuestion, setCurrentQuestion] = useState(3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 200));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 50));
  const handleQuestionClick = (questionId: number) => setCurrentQuestion(questionId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex flex-col">
      <PageLogo />
      <Navigation />

      {/* Timer Header */}
      <header className="relative z-10 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-end">
          <div className="backdrop-blur-md bg-white/10 px-4 py-2 rounded-lg border border-white/20">
            <Timer className="h-5 w-5 text-blue-400 inline mr-2" />
            <span className="text-lg font-semibold text-blue-400">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Question Navigator */}
        <div className="w-48 backdrop-blur-md bg-white/5 border-r border-white/10 p-4 relative">
          {/* Background Effects */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute w-[200vw] h-[100vh] -top-[30vh] -left-[50vw] 
                         bg-gradient-to-b from-blue-400/5 via-blue-600/5 to-transparent
                         blur-3xl transform -rotate-12" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/90 to-slate-950" />
          </div>

          <div className="relative">
            <div className="absolute inset-x-0 -top-4 h-8 bg-gradient-to-b from-black/50 to-transparent"></div>
            <h2 className="text-lg font-semibold mb-4 text-white/90">Questions</h2>
          </div>
          <div className="space-y-1.5 pr-2 h-[calc(100vh-12rem)] overflow-y-auto custom-scrollbar
                       [mask-image:linear-gradient(to_bottom,transparent,black_20px,black_calc(100%-20px),transparent)]">
            {questions.map((question) => (
              <button
                key={question.id}
                onClick={() => handleQuestionClick(question.id)}
                className={cn( 
                  "flex items-center w-full gap-2 p-2 rounded-lg transition-all duration-200",
                  "hover:bg-white/10",
                  question.id === currentQuestion && "bg-white/10"
                )}
              >
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-200",
                  question.status === 'current' && "bg-blue-600 text-white border-blue-600",
                  question.status === 'answered' && "bg-green-500/20 text-green-400 border-green-500/30",
                  question.status === 'flagged' && "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
                  question.status === 'unanswered' && "bg-white/5 text-white/70 border-white/20"
                )} style={{ fontSize: '0.75rem' }}>
                  {question.id}
                </div>
                <span className={cn(
                  "text-sm transition-colors duration-200",
                  question.id === currentQuestion ? "text-white" : "text-white/70"
                )}>
                  Question {question.id}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="backdrop-blur-md bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-white/10 rounded transition-colors" onClick={handleZoomOut}>
                <ZoomOut className="h-5 w-5 text-white/70" />
              </button>
              <span className="text-sm text-white/70">{zoom}%</span>
              <button className="p-2 hover:bg-white/10 rounded transition-colors" onClick={handleZoomIn}>
                <ZoomIn className="h-5 w-5 text-white/70" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded transition-colors">
                <RotateCcw className="h-5 w-5 text-white/70" />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-white/70">Page {currentPage} of {totalPages}</span>
              <button 
                className="p-2 hover:bg-white/10 rounded transition-colors"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
                <ChevronLeft className="h-5 w-5 text-white/70" />
              </button>
              <button 
                className="p-2 hover:bg-white/10 rounded transition-colors"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>
                <ChevronRight className="h-5 w-5 text-white/70" />
              </button>
            </div>
          </div>

          {/* Test Content */}
          <div className="flex-1 overflow-auto bg-slate-950/50 p-4 relative flex flex-col gap-4">
            {/* Reading Test Panel */}
            <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg overflow-hidden
                          border border-white/10 p-4">
              <div className="text-white/90">
                <h2 className="text-lg font-bold mb-2 text-white">Reading Test</h2>
                <p className="text-sm text-white/70">65 MINUTES, 52 QUESTIONS</p>
              </div>
            </div>

            {/* Module Header */}
            <div className="bg-gradient-to-r from-slate-300 to-slate-400 rounded-lg overflow-hidden shadow-lg">
              <div className="flex items-center justify-between px-8 py-4">
                <span className="text-6xl font-bold text-slate-800">1</span>
                <div className="flex flex-col items-center">
                  <span className="text-xl text-slate-700">Module</span>
                  <span className="text-4xl font-bold text-slate-800">1</span>
                </div>
                <span className="text-6xl font-bold text-slate-800">1</span>
              </div>
            </div>

            {/* Section Title and Questions */}
            <div className="bg-gradient-to-r from-slate-300 to-slate-400 rounded-lg p-8 shadow-lg">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Reading and Writing</h1>
              <h2 className="text-2xl font-bold text-slate-700 mb-8">33 QUESTIONS</h2>
              
              <div className="bg-slate-600/20 border border-slate-600/30 text-slate-700 text-sm font-bold px-4 py-1 inline-block mb-4 rounded">
                DIRECTIONS
              </div>
              
              <p className="text-slate-700 text-lg mb-4">
                The questions in this section address a number of important reading and writing skills. Each
                question includes one or more passages, which may include a table or graph. Read each passage
                and question carefully, and then choose the best answer to the question based on the passage(s).
              </p>
              
              <p className="text-slate-700 text-lg">
                All questions in this section are multiple-choice with four answer choices. Each question has a
                single best answer.
              </p>
            </div>

            {/* Questions Panel */}
            <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg overflow-hidden
                         border border-white/10 p-6">
              <div className="text-white/90">
                {/* Difficulty Badge */}
                <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/20 border border-yellow-500/30 text-white mb-6">
                  Medium
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-sm leading-relaxed text-white/70">
                    This passage is adapted from "The Enigma of Time" by Dr. Sarah Chen, 
                    published in 2023. The article discusses recent developments in our 
                    understanding of temporal mechanics.
                  </p>
                  <p className="text-sm leading-relaxed text-white/70">
                    The concept of time has puzzled philosophers and scientists for millennia. 
                    While we experience time as a continuous flow from past to future, modern 
                    physics suggests a more complex reality. Einstein's theory of relativity 
                    showed that time is not absolute but relative, varying with motion and 
                    gravity. This revolutionary insight challenged our fundamental assumptions 
                    about the nature of reality.
                  </p>
                </div>

                <h3 className="text-lg font-semibold mb-4">Question 1</h3>

                <div className="border-l-4 border-blue-500/30 pl-4">
                  <p className="text-sm mb-4">
                    The main purpose of the passage is to:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" name="q1" id="q1a" className="mr-2 accent-blue-500" />
                      <label htmlFor="q1a" className="text-sm">Present a historical overview of time measurement</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" name="q1" id="q1b" className="mr-2 accent-blue-500" />
                      <label htmlFor="q1b" className="text-sm">Explain modern physics' view of time</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" name="q1" id="q1c" className="mr-2 accent-blue-500" />
                      <label htmlFor="q1c" className="text-sm">Compare different theories of time</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" name="q1" id="q1d" className="mr-2 accent-blue-500" />
                      <label htmlFor="q1d" className="text-sm">Critique Einstein's theory of relativity</label>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-4">
                    <button className="px-6 py-3 rounded-xl font-medium transition-all duration-300
                                     bg-gradient-to-r from-blue-600 to-blue-400 text-white
                                     hover:from-blue-500 hover:to-blue-300
                                     shadow-[0_0_20px_rgba(37,99,235,0.3)]
                                     hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]
                                     hover:scale-105 active:scale-95">
                      Submit Answer
                    </button>
                    <button className="px-6 py-3 rounded-xl font-medium transition-all duration-300
                                     bg-yellow-500/20 border border-yellow-500/30 text-yellow-400
                                     hover:bg-yellow-500/30 hover:border-yellow-500/50
                                     shadow-[0_0_20px_rgba(234,179,8,0.2)]
                                     hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]
                                     hover:scale-105 active:scale-95
                                     flex items-center gap-2">
                      <Flag className="w-5 h-5" />
                      Save Question for Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestViewer;