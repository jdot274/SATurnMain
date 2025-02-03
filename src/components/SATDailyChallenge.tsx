import React, { useState } from 'react';
import { Trophy, Star, Calendar, Check, Zap, Flame, Calculator, Medal, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

const SATDailyChallenge = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [streak, setStreak] = useState(0);
  const [today] = useState(new Date());

  // Calendar data
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDay };
  };

  const { daysInMonth, firstDay } = getDaysInMonth(today);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);
  const currentDay = today.getDate();

  // Sample questions - in a real app, these would be fetched daily
  const questions = [
    {
      question: "What is the value of x in the equation 2x + 3 = 11?",
      options: ["3", "4", "5", "6"],
      correct: 1,
      difficulty: 1,
      points: 100
    },
    {
      question: "If a rectangle has a length of 8 units and a width of 6 units, what is its area?",
      options: ["14 square units", "28 square units", "48 square units", "56 square units"],
      correct: 2,
      difficulty: 2,
      points: 200
    },
    {
      question: "Solve for x: 3(x - 2) = 2(x + 3)",
      options: ["0", "12", "9", "6"],
      correct: 0,
      difficulty: 3,
      points: 300
    },
    {
      question: "If f(x) = 2x² - 3x + 1, what is f(-2)?",
      options: ["11", "13", "15", "17"],
      correct: 0,
      difficulty: 4,
      points: 400
    },
    {
      question: "In triangle ABC, angle A = 60°, angle B = 45°. What is angle C?",
      options: ["85°", "75°", "65°", "55°"],
      correct: 1,
      difficulty: 5,
      points: 500
    }
  ];

  // Difficulty colors
  const difficultyColors = [
    'bg-white/5 border-green-500/30',
    'bg-white/5 border-blue-500/30',
    'bg-white/5 border-yellow-500/30',
    'bg-white/5 border-orange-500/30',
    'bg-white/5 border-red-500/30'
  ];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowResult(true);
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + questions[currentQuestion].points);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Trigger confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setGameComplete(true);
    }
  };

  // Progress grid showing completed questions
  const ProgressGrid = () => (
    <div className="flex gap-2 mb-4">
      {questions.map((_, index) => (
        <div
          key={index}
          className={`w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-xl
            ${index < currentQuestion ? 'bg-white/10 text-white/60' : 
              index === currentQuestion ? difficultyColors[index] + ' text-white' : 'bg-white/5 text-white/40'}`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );

  // Render game complete screen
  if (gameComplete) {
    return (
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 w-full max-w-2xl mx-auto animate-fade-up">
        <div className="text-center">
          <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400 animate-bounce" />
          <h2 className="text-3xl font-bold mb-8 metallic-text">Challenge Complete!</h2>
          
          {/* Achievement Cards */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 
                           rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                           rounded-xl border border-white/20 p-6 shadow-[0_8px_32px_rgba(31,38,135,0.37)]
                           group-hover:border-white/30 transition-all duration-300">
                <Trophy className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-3xl font-bold metallic-text mb-2">{score}</p>
                <p className="text-sm text-blue-200/60">Final Score</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 
                           rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                           rounded-xl border border-white/20 p-6 shadow-[0_8px_32px_rgba(31,38,135,0.37)]
                           group-hover:border-white/30 transition-all duration-300">
                <Star className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-3xl font-bold metallic-text mb-2">{streak}x</p>
                <p className="text-sm text-purple-200/60">Best Streak</p>
              </div>
            </div>
          </div>
          
          {/* Medals Section */}
          <div className="mt-12 p-6 backdrop-blur-xl bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold metallic-text mb-6">Score Medals</h3>
            <div className="grid grid-cols-5 gap-6">
              {[
                { score: 1, color: 'from-orange-400 to-orange-600' },
                { score: 2, color: 'from-rose-400 to-rose-600' },
                { score: 3, color: 'from-purple-400 to-purple-600' },
                { score: 4, color: 'from-blue-400 to-blue-600' },
                { score: 5, color: 'from-green-400 to-green-600' }
              ].map((medal, index) => {
                const earned = score >= (medal.score * questions[0].points);
                return (
                  <div key={index} className="relative group">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${medal.color}
                                  rounded-xl blur opacity-75 transition-opacity
                                  ${earned ? 'group-hover:opacity-100' : 'opacity-0'}`} />
                    <div className={`relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                                  rounded-xl border transition-all duration-300
                                  ${earned 
                                    ? 'border-white/20 group-hover:border-white/30' 
                                    : 'border-white/5 grayscale opacity-50'}`}>
                      <div className="p-4 text-center">
                        <div className={`text-2xl font-bold mb-2 metallic-text
                                      ${earned ? '' : 'text-white/40'}`}>
                          {medal.score}
                        </div>
                        <div className={`text-sm ${earned ? 'text-white/90' : 'text-white/40'}`}>
                          {medal.score === 1 ? 'Question' : 'Questions'}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-12 p-6 backdrop-blur-xl bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold metallic-text mb-6">Achievements</h3>
            <div className="grid grid-cols-3 gap-6">
              {[
                { name: 'Perfect Score', icon: Trophy, color: 'yellow', earned: score === 1500 },
                { name: 'Speed Demon', icon: Zap, color: 'blue', earned: false },
                { name: 'Streak Master', icon: Flame, color: 'orange', earned: streak >= 5 },
                { name: 'Math Wizard', icon: Calculator, color: 'purple', earned: false },
                { name: 'First Win', icon: Medal, color: 'green', earned: true },
                { name: 'Challenge Master', icon: Award, color: 'red', earned: false }
              ].map((medal, index) => (
                <div key={index} className="relative group">
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${medal.color}-600 via-${medal.color}-400 to-${medal.color}-600 
                                rounded-xl blur opacity-75 transition-opacity
                                ${medal.earned ? 'group-hover:opacity-100' : 'opacity-0'}`} />
                  <div className={`relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                                rounded-xl border transition-all duration-300
                                ${medal.earned 
                                  ? 'border-white/20 group-hover:border-white/30' 
                                  : 'border-white/5 grayscale opacity-50'}`}>
                    <div className="p-4 text-center">
                      <medal.icon className={`w-8 h-8 mx-auto mb-2 
                                          ${medal.earned ? `text-${medal.color}-400` : 'text-white/40'}`} />
                      <p className={`text-sm font-medium ${medal.earned ? 'text-white/90' : 'text-white/40'}`}>
                        {medal.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar View */}
          <div className="mt-8 p-4 backdrop-blur-xl bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">
                {today.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </h3>
              <div className="w-5" />
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                <div key={index} className="text-white/60 text-sm">{day[0]}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 31 }, (_, i) => {
                const isToday = i + 1 === currentDay;
                const isPast = i + 1 < currentDay;
                return (
                <div
                  key={i}
                  className={`h-8 flex items-center justify-center rounded-lg text-sm
                    ${isToday
                      ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                      : isPast
                      ? 'bg-white/10 text-white/40'
                      : 'text-white/20'
                    }`}
                >
                  {i + 1}
                  {isToday && (
                    <Check className="w-4 h-4 ml-1 text-green-400" />
                  )}
                </div>
              )})}
            </div>
          </div>
          
          <div className="mt-4 text-sm text-white/60">
            Come back tomorrow for a new challenge!
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 w-full max-w-2xl mx-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="font-bold text-white">{score}</span>
          </div>
          <ProgressGrid />
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-400" />
            <span className="font-bold text-white">x{streak}</span>
          </div>
        </div>

        <div className={`p-6 rounded-lg mb-6 backdrop-blur-xl ${difficultyColors[currentQuestion]}`}>
          <h2 className="text-lg font-semibold mb-4 text-white">
            Question {currentQuestion + 1}
          </h2>
          <p className="text-lg mb-6 text-white/90">{questions[currentQuestion].question}</p>

          <div className="grid gap-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={`p-4 rounded-lg text-left transition-colors backdrop-blur-xl
                  ${selectedAnswer === index 
                    ? index === questions[currentQuestion].correct
                      ? 'bg-green-500/20 border-green-500/30 text-green-400'
                      : 'bg-red-500/20 border-red-500/30 text-red-400'
                    : 'bg-white/5 hover:bg-white/10 text-white/90'
                  } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}
                  border ${
                    showResult && index === questions[currentQuestion].correct
                      ? 'border-green-500/30'
                      : 'border-white/10'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

          {showResult && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={nextQuestion}
                className="px-6 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 
                         rounded-lg hover:bg-blue-500/30 transition-colors"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish'}
              </button>
            </div>
          )}
        </div>

        <div className="text-sm text-white/60 text-center">
          Difficulty: {Array(questions[currentQuestion].difficulty).fill('★').join('')}
        </div>
      </div>
    </div>
  );
};

export default SATDailyChallenge;