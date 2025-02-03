import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Brain, Search, Filter, Activity, ChevronRight, Calculator, ClipboardCheck, TestTube } from 'lucide-react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import OrbConsole from '../components/OrbConsole';
import { FlashcardBackground } from '../components/FlashcardBackground';

interface ReviewQuestion {
  id: string;
  testName: string;
  section: string;
  questionNumber: number;
  question: string;
  answer: string;
  explanation: string;
  savedAt: string;
}

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

const ReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedQuestion, setSelectedQuestion] = useState<ReviewQuestion | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const filteredQuestions = selectedSection 
    ? mockReviewQuestions.filter(q => q.section === selectedSection)
    : mockReviewQuestions;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950
                    flex flex-col relative overflow-hidden">
      <PageLogo />
      <FlashcardBackground />
      <Navigation />

      <main className="flex-1 relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Questions for Review</h1>
            <p className="text-lg text-white/60">Review questions you've saved from practice tests</p>
          </div>

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
                className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-6
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
      </main>

      {/* Question Review Modal */}
      {selectedQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedQuestion(null)} />
          <div className="relative w-full max-w-3xl backdrop-blur-xl bg-white/5 rounded-2xl p-8
                       border border-white/10 space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                  {selectedQuestion.section}
                </span>
                <span className="text-white/60">
                  Question {selectedQuestion.questionNumber}
                </span>
              </div>
              <span className="text-white/40">
                {selectedQuestion.testName}
              </span>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl text-white/90">{selectedQuestion.question}</h3>
                <p className="text-lg text-blue-400 font-medium">Answer: {selectedQuestion.answer}</p>
              </div>

              {showExplanation ? (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white/90">Explanation</h4>
                  <p className="text-white/70 leading-relaxed">{selectedQuestion.explanation}</p>
                </div>
              ) : (
                <button
                  onClick={() => setShowExplanation(true)}
                  className="px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl
                           text-blue-400 hover:bg-blue-500/30 transition-colors w-full"
                >
                  Show Explanation
                </button>
              )}
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setSelectedQuestion(null)}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl
                         text-white/90 hover:bg-white/10 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => navigate(`/tests/${selectedQuestion.testName}`)}
                className="px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl
                         text-blue-400 hover:bg-blue-500/30 transition-colors"
              >
                Go to Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;