import React, { useState } from 'react';
import { X } from 'lucide-react';
import PracticeQuestion from './PracticeQuestion';

interface VocabWordProps {
  word: string;
  definition: string;
  onPractice: () => void;
  isCompleted?: boolean;
  isPracticing?: boolean;
  onAddToList: (word: string, definition: string) => void;
  onIncorrectAnswer: (word: string) => void;
}

const VocabWord: React.FC<VocabWordProps> = ({ 
  word, 
  definition, 
  onPractice,
  isCompleted = false,
  isPracticing = false,
  onAddToList,
  onIncorrectAnswer
}) => {
  const [answer, setAnswer] = useState<Option | null>(null);

  return (
    <div className="space-y-4">
      {!isPracticing ? (
        <div className="p-4 backdrop-blur-xl bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-blue-400">{word}</h3>
            <button 
              onClick={onPractice}
              className={`px-3 py-2 rounded-lg border transition-colors ${
                isCompleted 
                  ? 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10'
                  : 'bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30'
              }`}
            >
              {isCompleted ? 'Incorrect' : 'Practice'}
            </button>
          </div>
        </div>
      ) : (
        <PracticeQuestion
          word={word}
          definition={definition}
          options={[
            { text: 'to praise or compliment enthusiastically', correct: false },
            { text: 'to criticize or warn gently but seriously', correct: true },
            { text: 'to encourage or support strongly', correct: false },
            { text: 'to question or interrogate formally', correct: false },
          ]}
          onAnswer={(option) => {
            setAnswer(option);
            if (!option.correct) {
              onIncorrectAnswer(word);
            }
          }}
          onAddToList={() => onAddToList(word, definition)}
        />
      )}
    </div>
  );
};

export default VocabWord;