import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Undo2, Check, X, Sparkles, BookOpen, Calculator } from 'lucide-react';
import { useDevMode } from '../contexts/DevModeContext';
import EditableText from '../components/EditableText';
import { useFlashcards } from '../contexts/FlashcardContext';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import { FlashcardBackground } from '../components/FlashcardBackground';
import { cn } from '@/lib/utils';

const FlashcardPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDevMode } = useDevMode();
  const { title, color } = location.state || {};
  const { flashcards, loading, error } = useFlashcards();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-white/60">Loading flashcards...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-400">{error}</div>;
  }

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowAnswer(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex flex-col relative overflow-hidden">
      <PageLogo />
      <FlashcardBackground />
      <Navigation />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 relative z-10 container mx-auto">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {title || 'Practice Cards'}
            </h1>
            <p className="text-lg text-white/60">
              Master key concepts through interactive practice
            </p>
          </div>

          {/* Main Card */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400
                             flex items-center justify-center">
                  {flashcards[currentIndex].section === 'Math' ? (
                    <Calculator className="w-6 h-6 text-white" />
                  ) : (
                    <BookOpen className="w-6 h-6 text-white" />
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Question {currentIndex + 1}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium",
                      flashcards[currentIndex].section === 'Math'
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-purple-500/20 text-purple-400"
                    )}>
                      {flashcards[currentIndex].section}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-sm">
                      {flashcards[currentIndex].difficulty}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">Active</span>
              </div>
            </div>

            {/* Question Content */}
            <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10">
              <p className="text-lg text-white/90 leading-relaxed">
                {flashcards[currentIndex].question}
              </p>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {flashcards[currentIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAnswer(String.fromCharCode(65 + index))}
                  className={`p-4 rounded-xl text-left transition-all duration-200 ${
                    selectedAnswer === String.fromCharCode(65 + index)
                      ? 'bg-blue-500/20 border border-blue-500/50 text-blue-400'
                      : 'bg-white/5 border border-white/10 text-white/90 hover:bg-white/10'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm">Progress</span>
              <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
                />
              </div>
              <span className="text-white/60 text-sm">
                {currentIndex + 1} of {flashcards.length}
              </span>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null || showAnswer}
              className={`w-full py-3 rounded-xl font-medium mt-6 transition-all duration-200 ${
                selectedAnswer !== null && !showAnswer
                  ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400 hover:bg-blue-500/30'
                  : 'bg-white/5 text-white/40 cursor-not-allowed'
              }`}
            >
              Submit Answer
            </button>

            {showAnswer && (
              <div className="mt-6 space-y-4 bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  Explanation
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {flashcards[currentIndex].explanation}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="w-full max-w-4xl flex justify-between items-center mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10
                     text-white/90 hover:bg-white/10 transition-all disabled:opacity-50
                     hover:scale-105 active:scale-95 disabled:hover:scale-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-4">
            <button
              onClick={handleNext}
              className="p-4 rounded-xl backdrop-blur-xl bg-red-500/10 border border-red-500/20
                       text-red-400 hover:bg-red-500/20 transition-all
                       hover:scale-105 active:scale-95"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-4 rounded-xl backdrop-blur-xl bg-green-500/10 border border-green-500/20
                       text-green-400 hover:bg-green-500/20 transition-all
                       hover:scale-105 active:scale-95"
            >
              <Check className="w-6 h-6" />
            </button>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === flashcards.length - 1}
            className="p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10
                     text-white/90 hover:bg-white/10 transition-all disabled:opacity-50
                     hover:scale-105 active:scale-95 disabled:hover:scale-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default FlashcardPage;