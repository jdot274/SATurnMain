import React, { useState } from 'react';
import PracticeQuestion from './PracticeQuestion';

interface PracticeProps {
  onAddToList: (word: string, definition: string) => void;
  onIncorrectAnswer: (word: string) => void;
}

const Practice: React.FC<PracticeProps> = ({ onAddToList, onIncorrectAnswer }) => {
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());

  const handleAnswer = (word: string, answer: { text: string; correct: boolean }) => {
    setAnsweredQuestions(prev => new Set([...prev, word]));
    if (!answer.correct) {
      onIncorrectAnswer(word);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Practice</h2>
      <div className="backdrop-blur-xl bg-white/5 rounded-lg border border-white/10 p-6">
        <p className="text-white/70">Select words from your list to practice with flashcards.</p>
      </div>
    </div>
  );
};

export default Practice;