import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import { VocabInfoModal } from '../components/practice/VocabInfoModal';
import { BookOpen, ChevronRight, Calculator, Brain, Target, Activity, Sparkles, Clock, Calendar, ChevronDown } from 'lucide-react';
import { skills } from '../data/practiceSkills';
import VocabWord from '../components/vocabulary/VocabWord';
import VocabList from '../components/vocabulary/VocabList';
import type { ReviewQuestion } from '@/types/practice';

const mockReviewQuestions: ReviewQuestion[] = [
  {
    id: '1',
    testName: 'Practice Test #1',
    section: 'Reading & Writing',
    questionNumber: 12,
    question: "The concept of time has puzzled philosophers and scientists for millennia. While we experience time as a continuous flow from past to future, modern physics suggests a more complex reality. What is the main purpose of this passage?",
    answer: "Explain modern physics' view of time",
    explanation: "The passage introduces the traditional view of time and contrasts it with modern physics' perspective, focusing on explaining how our understanding of time has evolved through scientific discovery.",
    savedAt: '2024-03-15T10:30:00Z'
  },
  {
    id: '2',
    testName: 'Practice Test #1',
    section: 'Math',
    questionNumber: 25,
    question: "A car manufacturer produces x cars per day. After upgrading their equipment, daily production increased by 25%. Which equation represents the new daily production?",
    answer: "1.25x",
    explanation: "The new production is 125% of the original, which can be written as 1.25x. This represents the original amount (x) plus a 25% increase (0.25x).",
    savedAt: '2024-03-15T11:15:00Z'
  }
];

const VOCAB_WORDS = [
  { word: 'Admonish', definition: '(v.) to criticize or warn gently but seriously' },
  { word: 'Ephemeral', definition: '(adj.) lasting for a very short time; transitory; short-lived' },
  { word: 'Ubiquitous', definition: '(adj.) present, appearing, or found everywhere' },
  { word: 'Pragmatic', definition: '(adj.) dealing with things sensibly and realistically' }
];

const PracticePage: React.FC = () => {
  const navigate = useNavigate();
  const [showVocabInfo, setShowVocabInfo] = useState(false);
  const [isPracticeExpanded, setIsPracticeExpanded] = useState(true);
  const [isVocabExpanded, setIsVocabExpanded] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());
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
    <div className="page-layout">
      <PageLogo />
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Planet */}
        <div className="absolute w-[120vh] h-[120vh] rounded-full
                      bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950
                      -top-[90vh] left-[50%] transform -translate-x-1/2 -z-10
                      blur-sm" />

        {/* Atmosphere glow effect */}
        <div className="absolute w-[200vw] h-[100vh] -top-[50vh] -left-[50vw] 
                      bg-gradient-to-b from-blue-600/20 via-blue-800/10 to-transparent
                      blur-3xl transform -rotate-12" />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/90 to-slate-950" />
      </div>

      <Navigation />

      <main className="container py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header with Sparkles */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 
                           rounded-xl blur opacity-75 group-hover:opacity-100 animate-pulse" />
              <div className="relative px-12 py-4 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-blue-400/20 
                           backdrop-blur-xl rounded-xl border border-blue-500/30">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-300 via-purple-200 to-blue-100 
                           bg-clip-text text-transparent flex items-center justify-center gap-3">
                  <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
                  Practice Center
                  <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
                </h1>
              </div>
            </div>
            <p className="text-lg text-white/60 mt-4">
              Continue your learning journey with personalized practice sessions
            </p>
          </div>

          {/* Continue Learning */}
          <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold text-white/90 mb-4">Continue Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center p-4 border border-white/10 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-white/90">Practice Test #4</h3>
                  <p className="text-sm text-white/60">Resume where you left off</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 border border-white/10 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/30">
                  <Calendar className="h-6 w-6 text-green-400" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-white/90">Daily Challenge</h3>
                  <p className="text-sm text-white/60">5 questions • Math</p>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Section */}
          <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsPracticeExpanded(!isPracticeExpanded)}
            >
              <h2 className="text-2xl font-bold text-white">Practice</h2>
              <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
                isPracticeExpanded ? 'rotate-180' : ''
              }`} />
            </div>
            <div className={`grid grid-cols-2 gap-8 overflow-hidden transition-all duration-500 ${
              isPracticeExpanded ? 'max-h-[2000px] mt-6 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            {/* Reading & Writing */}
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400
                             flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Reading & Writing</h2>
                  <p className="text-white/60">Master reading comprehension and writing skills</p>
                </div>
              </div>
              
              <Link
                to="/practice/flashcards"
                state={{ title: 'Reading & Writing', color: 'from-purple-600 to-purple-400' }}
                className="block w-full py-3 rounded-xl text-center font-medium
                         bg-purple-500/20 text-purple-400 border border-purple-500/30
                         hover:bg-purple-500/30 transition-all duration-300
                         mb-4"
              >
                Practice Flash Cards
              </Link>
            </div>
            {/* Math */}
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400
                             flex items-center justify-center">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Math</h2>
                  <p className="text-white/60">Master mathematical concepts and problem-solving</p>
                </div>
              </div>
              
              <Link
                to="/practice/flashcards"
                state={{ title: 'Math', color: 'from-blue-600 to-blue-400' }}
                className="block w-full py-3 rounded-xl text-center font-medium
                         bg-blue-500/20 text-blue-400 border border-blue-500/30
                         hover:bg-blue-500/30 transition-all duration-300
                         mb-4"
              >
                Practice Flash Cards
              </Link>
            </div>
            </div>
          </div>

          {/* Vocabulary Builder */}
          <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsVocabExpanded(!isVocabExpanded)}
            >
              <h2 className="text-2xl font-bold text-white">Vocabulary Builder</h2>
              <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
                isVocabExpanded ? 'rotate-180' : ''
              }`} />
            </div>
            <div className={`overflow-hidden transition-all duration-500 ${
              isVocabExpanded ? 'max-h-[2000px] mt-6 opacity-100' : 'max-h-0 opacity-0'
            }`}>
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
          </div>

          {/* Recommended Practice */}
          <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold text-white/90 mb-4">Recommended Practice</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center border border-red-500/30">
                    <span className="text-red-400 font-medium">-7</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-white/90">Quadratic Equations</h3>
                    <p className="text-sm text-white/60">Most missed topic</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 
                               hover:bg-blue-500/30 transition-colors">
                  Practice Now
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center border border-yellow-500/30">
                    <span className="text-yellow-400 font-medium">-4</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-white/90">Reading Inference</h3>
                    <p className="text-sm text-white/60">Needs improvement</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 
                               hover:bg-blue-500/30 transition-colors">
                  Practice Now
                </button>
              </div>
            </div>
          </div>

          {/* Questions for Review */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Questions for Review</h2>
            <div className="space-y-4">
              {mockReviewQuestions.map((question) => (
                <div
                  key={question.id}
                  className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6
                           hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                        {question.section}
                      </span>
                      <span className="text-white/60 text-sm">
                        Question {question.questionNumber}
                      </span>
                    </div>
                    <span className="text-white/40 text-sm">
                      {new Date(question.savedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg text-white/90 mb-4 line-clamp-2">{question.question}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">{question.testName}</span>
                    <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10
                                   text-white/90 hover:bg-white/10 transition-colors">
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vocabulary Info Modal */}
        {showVocabInfo && (
          <VocabInfoModal
            topic={skills[0].topics[3]}
            onClose={() => setShowVocabInfo(false)}
          />
        )}
      </main>
    </div>
  );
};

export default PracticePage;