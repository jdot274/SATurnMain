import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen, Trophy, TrendingUp, Calendar, Clock, Brain, Calculator, ChevronDown, Sparkles, Check, Plus, Grid } from 'lucide-react';
import Navigation from '../components/Navigation';
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

const StudyStreakDetailsPage: React.FC = () => {
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

        {/* Practice Flash Cards - Sleek Design */}
        <div className="backdrop-blur-xl bg-[#1a1d23] rounded-2xl border border-white/10 p-8 mb-8">
          <div 
            className="flex items-center justify-between cursor-pointer mb-8"
            onClick={() => setIsPracticeExpanded(!isPracticeExpanded)}
          >
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-bold text-white">
                Practice Flash Cards
              </h2>
            </div>
            <p className="text-white/60">Master key topics with flash cards</p>
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
                to="/practice/flashcards"
                state={{ title: 'Reading & Writing', color: 'from-purple-600 to-purple-400' }}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-medium mb-2
                         bg-blue-500/20 text-blue-400 border border-blue-500/30
                         hover:bg-blue-500/30 transition-all duration-300 text-lg"
              >
                <Grid className="w-5 h-5" />
                Practice Flash Cards
              </Link>
              <Link
                to="/practice/flashcards2"
                state={{ title: 'Reading & Writing', color: 'from-purple-600 to-purple-400' }}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-medium mb-4
                         bg-blue-500/20 text-blue-400 border border-blue-500/30
                         hover:bg-blue-500/30 transition-all duration-300 text-lg"
              >
                <Grid className="w-5 h-5" />
                Flashcards 2
              </Link>
              <Link
                to="/practice/flashcards2"
                state={{ title: 'Reading & Writing', color: 'from-purple-600 to-purple-400' }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium mb-4
                         bg-purple-500/20 text-purple-400 border border-purple-500/30
                         hover:bg-purple-500/30 transition-all duration-300"
              >
                <Grid className="w-5 h-5" />
                Flashcards 2
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
                to="/practice/flashcards"
                state={{ title: 'Math', color: 'from-blue-600 to-blue-400' }}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-medium mb-2
                         bg-blue-500/20 text-blue-400 border border-blue-500/30
                         hover:bg-blue-500/30 transition-all duration-300 text-lg"
              >
                <Grid className="w-5 h-5" />
                Practice Flash Cards
              </Link>
              <Link
                to="/practice/flashcards2"
                state={{ title: 'Math', color: 'from-blue-600 to-blue-400' }}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-medium mb-4
                         bg-blue-500/20 text-blue-400 border border-blue-500/30
                         hover:bg-blue-500/30 transition-all duration-300 text-lg"
              >
                <Grid className="w-5 h-5" />
                Flashcards 2
              </Link>
              <Link
                to="/practice/flashcards2"
                state={{ title: 'Math', color: 'from-blue-600 to-blue-400' }}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-medium mb-4
                         bg-blue-500/20 text-blue-400 border border-blue-500/30
                         hover:bg-blue-500/30 transition-all duration-300 text-lg"
              >
                <Grid className="w-5 h-5" />
                Flashcards 2
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

        {/* Review Section - Sleek Design */}
        <div className="backdrop-blur-xl bg-[#1a1d23] rounded-2xl border border-white/10 p-8 mb-8">
          <div 
            className="flex items-center justify-between cursor-pointer mb-8"
            onClick={() => setIsReviewExpanded(!isReviewExpanded)}
          >
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-bold text-white">
                Review Questions
              </h2>
            </div>
            <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
              isReviewExpanded ? 'rotate-180' : ''
            }`} />
          </div>
          
          <div className={`space-y-4 overflow-hidden transition-all duration-500 ${
            isReviewExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {mockReviewQuestions.map((question) => (
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

        {/* Learning Topics - Sleek Design */}
        <div className="backdrop-blur-xl bg-[#1a1d23] rounded-2xl border border-white/10 p-8">
          <div 
            className="flex items-center justify-between cursor-pointer mb-8"
            onClick={() => setIsLearningTopicsExpanded(!isLearningTopicsExpanded)}
          >
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-bold text-white">
                Learning Topics
              </h2>
            </div>
            <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
              isLearningTopicsExpanded ? 'rotate-180' : ''
            }`} />
          </div>
          
          <div className={`grid grid-cols-3 gap-6 overflow-hidden transition-all duration-500 ${
            isLearningTopicsExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {/* Quadratic Equations */}
            <Link 
              to="/topics/quadratic-equations"
              className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6
                      hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30
                            group-hover:bg-blue-500/30 transition-colors">
                  <Calculator className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Quadratic Equations</h3>
              </div>
              <p className="text-white/60 mb-4">Master the fundamentals of quadratic equations</p>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">Math</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">Advanced</span>
              </div>
            </Link>

            {/* Placeholder for future topics */}
            <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6
                         hover:bg-white/10 transition-all duration-300 opacity-50 cursor-not-allowed">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gray-500/20 border border-gray-500/30">
                  <Brain className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Coming Soon</h3>
              </div>
              <p className="text-white/60">New topics will be added soon</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6
                         hover:bg-white/10 transition-all duration-300 opacity-50 cursor-not-allowed">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gray-500/20 border border-gray-500/30">
                  <Brain className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Coming Soon</h3>
              </div>
              <p className="text-white/60">New topics will be added soon</p>
            </div>
          </div>
        </div>

        {/* Rest of the code remains the same */}
        {/* ... */}
      </div>
      </div>
    </div>
  );
};

export default StudyStreakDetailsPage;