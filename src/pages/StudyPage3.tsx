import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen, Trophy, TrendingUp, Calendar, Clock, Brain, Calculator, ChevronDown, Sparkles, Check, Plus, Grid } from 'lucide-react';
import Navigation from '../components/Navigation';
import StudyPageLayout from '../components/StudyPageLayout';
import ComponentOutlines from '../components/ComponentOutlines';
import { useAuth } from '../contexts/AuthContext';
import VocabWord from '../components/vocabulary/VocabWord';
import VocabList from '../components/vocabulary/VocabList';
import Dashboard from '../components/vocabulary/Dashboard';
import Practice from '../components/vocabulary/Practice';
import type { ReviewQuestion } from '@/types/practice';

const VOCAB_WORDS = [
  { word: 'Admonish', definition: '(v.) to criticize or warn gently but seriously' },
  { word: 'Ephemeral', definition: '(adj.) lasting for a very short time; transitory; short-lived' },
  { word: 'Ubiquitous', definition: '(adj.) present, appearing, or found everywhere' },
  { word: 'Pragmatic', definition: '(adj.) dealing with things sensibly and realistically' }
];

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

const StudyPage3: React.FC = () => {
  const navigate = useNavigate();
  const [selectedQuestion, setSelectedQuestion] = useState<ReviewQuestion | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [wordList, setWordList] = useState<Array<{ word: string; definition: string }>>([]);
  const [isVocabExpanded, setIsVocabExpanded] = useState(false);
  const [practicingWord, setPracticingWord] = useState<string | null>(null);
  const [incorrectWords, setIncorrectWords] = useState<Set<string>>(new Set());
  const [isReadingExpanded, setIsReadingExpanded] = useState(false);
  const [isMathExpanded, setIsMathExpanded] = useState(false);
  const [isReviewExpanded, setIsReviewExpanded] = useState(false);
  const [isLearningTopicsExpanded, setIsLearningTopicsExpanded] = useState(false);
  const [isPracticeExpanded, setIsPracticeExpanded] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());
  const [showLayout, setShowLayout] = useState(true);

  const handleAddToList = (word: string, definition: string) => {
    if (!wordList.some(item => item.word === word)) {
      setWordList(prev => [...prev, { word, definition }]);
    }
  };

  const handleIncorrectAnswer = (word: string) => {
    setIncorrectWords(prev => new Set([...prev, word]));
  };

  const handleTopicClick = (topic: string) => {
    setSelectedTopics(prev => {
      const newTopics = new Set(prev);
      if (newTopics.has(topic)) {
        newTopics.delete(topic);
      } else {
        newTopics.add(topic);
      }
      return newTopics;
    });
  };

  const filteredQuestions = selectedSection 
    ? mockReviewQuestions.filter(q => q.section === selectedSection)
    : mockReviewQuestions;

  return (
    <div className="flex-1 flex flex-col relative">
      <StudyPageLayout show={showLayout} />
      <ComponentOutlines show={showLayout} />
      
      {/* Layout Toggle Button */}
      <button
        onClick={() => setShowLayout(!showLayout)}
        className="fixed top-4 right-4 z-[9999] px-3 py-1.5 rounded-lg bg-green-500/20 
                 border border-green-500/30 text-green-400 text-sm hover:bg-green-500/30 
                 transition-colors"
      >
        {showLayout ? 'Hide' : 'Show'} Layout
      </button>
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[200vw] h-[100vh] -top-[30vh] -left-[50vw] 
                      bg-gradient-to-b from-blue-400/30 via-blue-600/10 to-transparent
                      blur-3xl transform -rotate-12" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950" />
      </div>

      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 pt-8">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 space-y-8 relative">
          {/* Practice Section Header */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 
                         rounded-xl blur opacity-75 animate-pulse" />
            <div className="relative px-8 py-4 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-blue-400/20 
                         backdrop-blur-xl rounded-xl border border-blue-500/30">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 via-purple-200 to-blue-100 
                         bg-clip-text text-transparent">Practice</h2>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white/90">Practice Score</h3>
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <p className="text-3xl font-bold text-blue-400 mt-2">1420</p>
              <p className="text-sm text-white/60 mt-1">+50 points this week</p>
            </div>
            
            <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white/90">Study Streak</h3>
                <Trophy className="h-6 w-6 text-yellow-400" />
              </div>
              <p className="text-3xl font-bold text-blue-400 mt-2">12 days</p>
              <p className="text-sm text-white/60 mt-1">Keep it going!</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white/90">Questions Done</h3>
                <BookOpen className="h-6 w-6 text-blue-400" />
              </div>
              <p className="text-3xl font-bold text-blue-400 mt-2">847</p>
              <p className="text-sm text-white/60 mt-1">Top 10% of users</p>
            </div>
          </div>

          {/* Practice Flash Cards */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsPracticeExpanded(!isPracticeExpanded)}
            >
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold text-white">Practice Flash Cards</h2>
                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60">
                  Master key topics with flash cards
                </div>
              </div>
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
                
                <div className="flex items-center justify-between mb-6">
                  {['Reading Comprehension', 'Grammar & Usage', 'Writing Style', 'Expression of Ideas'].map((topic) => (
                    <span key={topic} 
                          onClick={() => handleTopicClick(topic)}
                          className={`text-xs px-3 py-1 rounded-full cursor-pointer
                                    transition-all duration-200 ${
                                      selectedTopics.has(topic)
                                        ? 'bg-purple-500/20 border border-purple-500/30 text-purple-400'
                                        : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10'
                                    }`}>
                      {topic}
                    </span>
                  ))}
                </div>

                <Link
                  to="/practice/flashcards2"
                  state={{ title: 'Reading & Writing', color: 'from-purple-600 to-purple-400' }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium mb-4
                           bg-purple-500/20 text-purple-400 border border-purple-500/30
                           hover:bg-purple-500/30 transition-all duration-300"
                >
                  <Grid className="w-5 h-5" />
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
                    <p className="text-white/60">Master key math concepts</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  {['Algebra', 'Problem Solving', 'Advanced Mathematics', 'Data Analysis'].map((topic) => (
                    <span key={topic} 
                          onClick={() => handleTopicClick(topic)}
                          className={`text-xs px-3 py-1 rounded-full cursor-pointer
                                    transition-all duration-200 ${
                                      selectedTopics.has(topic)
                                        ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
                                        : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10'
                                    }`}>
                      {topic}
                    </span>
                  ))}
                </div>

                <Link
                  to="/practice/flashcards2"
                  state={{ title: 'Math', color: 'from-blue-600 to-blue-400' }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium mb-4
                           bg-blue-500/20 text-blue-400 border border-blue-500/30
                           hover:bg-blue-500/30 transition-all duration-300"
                >
                  <Grid className="w-5 h-5" />
                  Practice Flash Cards
                </Link>
              </div>

              {/* Begin Practice Button */}
              <div className="col-span-2 flex items-center gap-4">
                <button
                  onClick={() => setSelectedTopics(new Set(['Reading Comprehension', 'Grammar & Usage', 'Writing Style', 'Expression of Ideas', 'Algebra', 'Problem Solving', 'Advanced Mathematics', 'Data Analysis']))}
                  className="px-6 py-3 rounded-xl bg-green-500/20 border border-green-500/30 
                           text-green-400 hover:bg-green-500/30 transition-all duration-200"
                >
                  Select All Topics
                </button>
                <button
                  onClick={() => navigate('/practice/flashcards')}
                  className="flex-1 py-4 rounded-xl font-medium transition-all duration-300
                           bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 text-white
                           hover:from-blue-500 hover:via-purple-400 hover:to-blue-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500/50
                           shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40
                           transform hover:scale-[1.02] active:scale-[0.98]
                           flex items-center justify-center gap-2"
                >
                  Begin Practice
                </button>
              </div>
            </div>
          </div>

          {/* Review Section Header */}
          <div className="relative mt-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 
                         rounded-xl blur opacity-75 animate-pulse" />
            <div className="relative px-8 py-4 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-blue-400/20 
                         backdrop-blur-xl rounded-xl border border-blue-500/30">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 via-purple-200 to-blue-100 
                         bg-clip-text text-transparent">Review</h2>
            </div>
          </div>

          {/* Vocabulary Builder */}
          <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsVocabExpanded(!isVocabExpanded)}
            >
              <div className="flex items-center gap-8">
                <h2 className="text-2xl font-bold text-white">Vocabulary Builder</h2>
                <div className="flex items-center gap-12">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-400">75%</span>
                      <span className="text-sm text-white/60">Progress</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-400">120</span>
                      <span className="text-sm text-white/60">Words Mastered</span>
                    </div>
                  </div>
                </div>
              </div>
              <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
                isVocabExpanded ? 'rotate-180' : ''
              }`} />
            </div>
             
            <div className={`grid grid-cols-2 gap-6 overflow-hidden transition-all duration-500 ${
              isVocabExpanded ? 'max-h-[2000px] mt-6 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="col-span-2 space-y-8">
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
            </div>
          </div>

          {/* Questions for Review */}
          <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6 mb-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsReviewExpanded(!isReviewExpanded)}
            >
              <h2 className="text-2xl font-bold text-white">Questions for Review</h2>
              <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
                isReviewExpanded ? 'rotate-180' : ''
              }`} />
            </div>
            <div className={`overflow-hidden transition-all duration-500 ${
              isReviewExpanded ? 'max-h-[2000px] mt-6 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              {/* Section Filters */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setSelectedSection('Reading & Writing')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedSection === 'Reading & Writing'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10'
                  }`}
                >
                  Reading & Writing
                </button>
                <button
                  onClick={() => setSelectedSection('Math')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedSection === 'Math'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10'
                  }`}
                >
                  Math
                </button>
                {selectedSection && (
                  <button
                    onClick={() => setSelectedSection(null)}
                    className="px-6 py-3 rounded-xl font-medium transition-all duration-300
                             bg-white/5 text-white/60 hover:bg-white/10"
                  >
                    Show All
                  </button>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-4">
                {filteredQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6
                             hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedQuestion(question)}
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

          {/* Learn Section Header */}
          <div className="relative mt-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 
                         rounded-xl blur opacity-75 animate-pulse" />
            <div className="relative px-8 py-4 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-blue-400/20 
                         backdrop-blur-xl rounded-xl border border-blue-500/30">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 via-purple-200 to-blue-100 
                         bg-clip-text text-transparent">Learn</h2>
            </div>
          </div>

          {/* Learning Topics */}
          <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsLearningTopicsExpanded(!isLearningTopicsExpanded)}
            >
              <div className="flex items-center gap-6">
                <h2 className="text-xl font-semibold text-white/90">Learning Topics</h2>
                {!isLearningTopicsExpanded && (
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <span className="text-sm text-white/60">Quadratic Equations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <span className="text-sm text-white/60">Reading Inference</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-sm text-white/60">Grammar & Usage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-sm text-white/60">Data Analysis</span>
                    </div>
                  </div>
                )}
              </div>
              <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
                isLearningTopicsExpanded ? 'rotate-180' : ''
              }`} />
            </div>
            <div className={`space-y-4 overflow-hidden transition-all duration-500 ${
              isLearningTopicsExpanded ? 'max-h-[2000px] mt-6 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30 animate-pulse">
                    <span className="text-blue-400 font-medium">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-white/90">Quadratic Equations</h3>
                    <p className="text-sm text-white/60">Most missed topic</p>
                    <div className="mt-2 text-sm text-white/60">
                      Master the fundamentals of quadratic equations and their applications
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm border border-blue-500/30">
                    Not Started
                  </span>
                  <button
                    onClick={() => navigate('/optimized-quadratic-page')}
                    className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg border border-purple-500/30 
                             hover:bg-purple-500/30 transition-colors flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    Learn
                  </button>
                  <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 
                                 hover:bg-blue-500/30 transition-colors">
                    Practice Now
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30 animate-pulse">
                    <span className="text-blue-400 font-medium">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-white/90">Reading Inference</h3>
                    <p className="text-sm text-white/60">Needs improvement</p>
                    <div className="mt-2 text-sm text-white/60">
                      Improve your ability to draw conclusions from complex texts
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm border border-blue-500/30">
                    Not Started
                  </span>
                  <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 
                               hover:bg-blue-500/30 transition-colors">
                    Practice Now
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30 animate-pulse">
                    <span className="text-blue-400 font-medium">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-white/90">Grammar & Usage</h3>
                    <p className="text-sm text-white/60">Review and practice</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm border border-blue-500/30">
                    In Progress
                  </span>
                  <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 
                                 hover:bg-blue-500/30 transition-colors">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPage3