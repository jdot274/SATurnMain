import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Undo2, Check, X, Sparkles } from 'lucide-react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';

const Flashcards2Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  const mockCard = {
    question: "A car manufacturer produces x cars per day. After upgrading their equipment, daily production increased by 25%. Which equation represents the new daily production?",
    options: ["0.25x", "1.25x", "2.5x", "x + 25"],
    correctAnswer: "B",
    answer: "The new production quantity represents 100% of the original amount plus a 25% increase. This means we need 125% of the original amount. We can write this as a decimal by dividing 125 by 100, giving us 1.25. Therefore, the new daily production is 1.25x cars."
  };

  const handleCardClick = () => {
    if (showAnswer) {
      setIsFlipping(true);
      setTimeout(() => {
        setShowAnswer(false);
        setIsFlipping(false);
      }, 150);
      return;
    }

    setIsFlipping(true);
    setTimeout(() => {
      setShowAnswer(true);
      setIsFlipping(false);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 
                    flex flex-col relative overflow-hidden">
      <PageLogo />
      <Navigation />

      {/* Header */}
      <div className="text-center mb-12 mt-8">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Sparkles className="w-8 h-8 text-blue-400" />
          Practice Cards
          <Sparkles className="w-8 h-8 text-blue-400" />
        </h1>
        <div className="flex items-center justify-center gap-2 text-white/60">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
            15 cards
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
            0 mastered
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-3xl mx-auto mb-12 px-4 w-full">
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-blue-400 
                     transition-all duration-300 animate-pulse"
            style={{ width: '6.67%' }}
          />
        </div>
        <div className="flex justify-between mt-3">
          <button
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white/90 transition-colors"
          >
            <Undo2 className="w-4 h-4" />
            <span>Reset Progress</span>
          </button>
          <span className="text-sm text-white/60">
            Card 1 of 15
          </span>
        </div>
      </div>

      {/* Flashcard */}
      <div className="max-w-3xl mx-auto aspect-[3/2.2] px-4 w-full">
        <div 
          onClick={handleCardClick}
          className={`relative w-full h-full transition-all duration-500 transform-style-preserve-3d cursor-pointer
                     ${showAnswer ? 'rotate-y-180' : 'rotate-y-0'}`}
        >
          {/* Front */}
          <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-2xl p-8 
                        border border-white/10 flex flex-col shadow-2xl backface-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
            <div className="relative w-full flex-1">
              <div className="flex justify-between mb-8">
                <h2 className="text-4xl font-bold text-white/90">Question 1</h2>
                <div className="flex gap-2">
                  <span className="px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 font-medium">Reading</span>
                  <span className="px-4 py-1 rounded-full bg-white/10 text-white/60 font-medium">Math</span>
                </div>
              </div>
              
              <div className="space-y-8">
                <p className="text-xl text-white/90">
                  {mockCard.question}
                </p>
                <div className="space-y-2 flex flex-col items-stretch w-full max-w-[30%]">
                  {mockCard.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAnswer(String.fromCharCode(65 + index));
                      }}
                      className={`text-left px-4 py-2 rounded-lg text-base transition-all duration-200
                        ${selectedAnswer === String.fromCharCode(65 + index)
                          ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                          : 'bg-white/5 border border-white/10 text-white/90 hover:bg-white/10'} 
                        border backdrop-blur-sm w-full`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (selectedAnswer) handleCardClick();
                  }}
                  disabled={selectedAnswer === null}
                  className={`mt-8 px-6 py-3 rounded-lg text-base font-medium transition-all duration-200
                    ${selectedAnswer !== null
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-white/5 text-white/40 cursor-not-allowed'}`}
                >
                  Submit Answer
                </button>
              </div>
            </div>
          </div>
          
          {/* Back */}
          <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-2xl p-8 
                        border border-white/10 flex flex-col shadow-2xl backface-hidden rotate-y-180">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
            <div className="relative flex flex-col items-start text-left">
              <div className="mb-12">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 
                            bg-clip-text text-transparent mb-6">
                  {selectedAnswer === mockCard.correctAnswer ? 'Correct!' : 'Incorrect'}
                </h2>
                <p className="text-2xl font-bold text-white">
                  {selectedAnswer !== mockCard.correctAnswer && (
                    <span className="text-red-400">
                      Your answer: ({selectedAnswer}) {mockCard.options[selectedAnswer?.charCodeAt(0)! - 65]}<br />
                    </span>
                  )}
                  <span className="text-green-400">
                    Correct answer: ({mockCard.correctAnswer}) {mockCard.options[mockCard.correctAnswer.charCodeAt(0) - 65]}
                  </span>
                </p>
              </div>
              
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                  Explanation
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  {mockCard.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-3xl mx-auto mt-12 flex justify-between items-center px-4 w-full mb-8">
        <button
          disabled={true}
          className="p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg
                   text-white/90 hover:bg-white/10 transition-all disabled:opacity-50
                   hover:scale-105 active:scale-95 disabled:hover:scale-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex gap-4">
          <button
            className="p-4 rounded-2xl backdrop-blur-xl bg-red-500/10 border border-red-500/20 shadow-lg
                     text-red-400 hover:bg-red-500/20 transition-all
                     hover:scale-105 active:scale-95"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            className="p-4 rounded-2xl backdrop-blur-xl bg-green-500/10 border border-green-500/20 shadow-lg
                     text-green-400 hover:bg-green-500/20 transition-all
                     hover:scale-105 active:scale-95"
          >
            <Check className="w-6 h-6" />
          </button>
        </div>

        <button
          className="p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg
                   text-white/90 hover:bg-white/10 transition-all
                   hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Flashcards2Page;