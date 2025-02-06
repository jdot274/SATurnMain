import React, { useState } from 'react';

interface VocabListProps {
  words: Array<{ word: string; definition: string }>;
  onTryAgain: (word: string) => void;
}

const VocabList: React.FC<VocabListProps> = ({ words, onTryAgain }) => {
  const [hideDefinitions, setHideDefinitions] = useState(false);
  
  return (
    <div className="p-6 backdrop-blur-xl bg-white/5 rounded-lg border border-white/10 h-[400px] overflow-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">My Word List</h2>
        {words.length > 0 && (
          <button
            onClick={() => setHideDefinitions(!hideDefinitions)}
            className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg
                     border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
          >
            {hideDefinitions ? 'Show' : 'Hide'} Definitions
          </button>
        )}
      </div>
      <div className="space-y-2">
        {words.map(({ word, definition }) => (
          <div key={word} className="bg-[#1e2c5a] rounded-lg p-4 flex items-start gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl text-blue-400 whitespace-nowrap">{word}</h3>
              {!hideDefinitions && <p className="text-[#8b9dc9] text-sm">{definition}</p>}
            </div>
            <button
              onClick={() => onTryAgain(word)}
              className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg
                       border border-green-500/30 hover:bg-green-500/30 transition-colors
                       whitespace-nowrap flex-shrink-0"
            >
              Try Again
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabList;