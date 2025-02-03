import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

interface Option {
  text: string;
  correct: boolean;
}

interface PracticeQuestionProps {
  word: string;
  definition: string;
  options: Option[];
  onAnswer: (option: Option) => void;
  onAddToList: () => void;
}

const PracticeQuestion: React.FC<PracticeQuestionProps> = ({ 
  word,
  definition, 
  options, 
  onAnswer,
  onAddToList 
}) => {
  const [answer, setAnswer] = useState<Option | null>(null);
  const [showDefinition, setShowDefinition] = useState(false);
  const [isAddedToList, setIsAddedToList] = useState(false);

  const handleAnswer = (selectedOption: Option) => {
    setAnswer(selectedOption);
    onAnswer(selectedOption);
  };

  const handleAddToList = () => {
    setIsAddedToList(true);
    onAddToList();
  };

  return (
    <div className="backdrop-blur-xl rounded-lg border border-white/10 p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-blue-400">{word}</h3>
        {!isAddedToList && answer && !answer.correct && (
          <button
            onClick={handleAddToList}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg 
                     border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add to List</span>
          </button>
        )}
        {isAddedToList && (
          <div className="flex items-center gap-2">
            <X className="w-5 h-5 text-red-400" />
            <span className="text-white/60">Incorrect</span>
          </div>
        )}
      </div>

      {!isAddedToList && (<div className="space-y-4 mt-8">
        {options.map((option) => (
          <button
            key={option.text}
            onClick={() => handleAnswer(option)}
            disabled={answer !== null}
            className={`w-full py-2 px-4 rounded-lg transition-all duration-300 ${
              answer === option
                ? option.correct
                  ? 'bg-green-500/80 text-white border border-green-500'
                  : 'bg-red-500/80 text-white border border-red-500'
                : answer !== null
                  ? option.correct
                    ? 'bg-green-500/80 text-white border border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]'
                    : 'bg-white/5 text-white/40 cursor-not-allowed'
                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30'
            }`}
          >
            {option.text}
          </button>
        ))}
        
        {answer && (
          <p className="mt-4 text-white/60 italic">
            Example: The teacher admonished the student for talking in class.
          </p>
        )}
      </div>)}
    </div>
  );
};

export default PracticeQuestion;