import React, { useState } from 'react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import VocabWord from '../components/vocabulary/VocabWord';
import VocabList from '../components/vocabulary/VocabList';
import Dashboard from '../components/vocabulary/Dashboard';
import Practice from '../components/vocabulary/Practice';

const VOCAB_WORDS = [
  { word: 'Admonish', definition: '(v.) to criticize or warn gently but seriously' },
  { word: 'Ephemeral', definition: '(adj.) lasting for a very short time; transitory; short-lived; existing only briefly; fleeting or temporary in nature' },
  { word: 'Ubiquitous', definition: '(adj.) present, appearing, or found everywhere simultaneously; being or seeming to be everywhere at the same time; omnipresent; constantly encountered' },
  { word: 'Pragmatic', definition: '(adj.) dealing with things sensibly and realistically; focused on practical considerations; concerned with actual circumstances and practical consequences' }
];

const VocabBuilderPage: React.FC = () => {
  const [wordList, setWordList] = useState<Array<{ word: string; definition: string }>>([]);
  const [practicingWord, setPracticingWord] = useState<string | null>(null);
  const [incorrectWords, setIncorrectWords] = useState<Set<string>>(new Set());
  
  const handleAddToList = (word: string, definition: string) => {
    if (!wordList.some(item => item.word === word)) {
      setWordList(prev => [...prev, { word, definition }]);
    }
  };
  
  const handleIncorrectAnswer = (word: string) => {
    setIncorrectWords(prev => new Set([...prev, word]));
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <PageLogo />
      <Navigation />
      <main className="container px-4 py-16 mx-auto grid grid-cols-3 gap-8 relative z-10">
        <div className="col-span-2 space-y-8">
          <Dashboard />
        </div>
        <div className="space-y-8">
          <Practice 
            onAddToList={handleAddToList} 
            onIncorrectAnswer={handleIncorrectAnswer}
          />
          <div className="space-y-4">
            {VOCAB_WORDS.map(({ word, definition }) => (
              <VocabWord 
                key={word}
                word={word}
                definition={definition}
                onPractice={() => setPracticingWord(word)}
                isPracticing={practicingWord === word}
                isCompleted={incorrectWords.has(word)}
                onAddToList={handleAddToList}
                onIncorrectAnswer={handleIncorrectAnswer}
              />
            ))}
          </div>
          <VocabList 
            words={wordList}
            onTryAgain={(word) => setPracticingWord(word)}
          />
        </div>
      </main>
    </div>
  );
};

export default VocabBuilderPage;