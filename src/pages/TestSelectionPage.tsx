import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ChevronRight, Plus, CheckCircle2, Circle, PlayCircle, BookText, GraduationCap, Download, ChevronDown } from 'lucide-react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';

interface TestStatus {
  id: number;
  status: 'not_started' | 'in_progress' | 'completed';
  progress?: number;
  timeSpent?: string;
}

const testStatuses: TestStatus[] = [
  { id: 1, status: 'completed', timeSpent: '3h 12m' },
  { id: 2, status: 'completed', timeSpent: '3h 05m' },
  { id: 3, status: 'in_progress', progress: 65, timeSpent: '2h 15m' },
  { id: 4, status: 'in_progress', progress: 30, timeSpent: '1h 20m' },
  { id: 5, status: 'not_started' },
  { id: 6, status: 'not_started' },
  { id: 7, status: 'not_started' },
  { id: 8, status: 'not_started' },
  { id: 9, status: 'not_started' },
  { id: 10, status: 'not_started' }
];

const TestSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const [expandedTest, setExpandedTest] = useState<number | null>(null);
  const [showDownloadDropdown, setShowDownloadDropdown] = useState(false);
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const handleTestSelect = (type: 'current' | 'recommended' | number) => {
    navigate('/tests/viewer');
  };

  const handleDownload = () => {
    if (!selectedTest) return;
    // In a real app, this would trigger the actual PDF download
    console.log(`Downloading ${selectedTest}`);
    setShowDownloadDropdown(false);
    setSelectedTest(null);
  };

  const getStatusIcon = (status: TestStatus['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-400" />;
      case 'in_progress':
        return <PlayCircle className="w-5 h-5 text-blue-400" />;
      default:
        return <Circle className="w-5 h-5 text-white/40" />;
    }
  };

  const getStatusText = (status: TestStatus['status']) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in_progress':
        return 'In Progress';
      default:
        return 'Not Started';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex flex-col relative overflow-hidden">
      <PageLogo />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[200vw] h-[100vh] -top-[50vh] -left-[50vw] bg-gradient-to-b from-blue-600/20 via-blue-800/10 to-transparent blur-3xl transform -rotate-12" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/90 to-slate-950" />
      </div>

      <Navigation />

      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header with Title and Download Button */}
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-4xl font-bold text-white">SAT Practice Tests</h1>

            <div className="relative">
              <button
                onClick={() => setShowDownloadDropdown(!showDownloadDropdown)}
                className="px-4 py-2 backdrop-blur-md bg-white/10 rounded-lg border border-white/20
                         flex items-center gap-2 hover:bg-white/20 transition-colors"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">Download Test</span>
                <ChevronDown className={`w-4 h-4 text-blue-400 transition-transform duration-300 ${
                  showDownloadDropdown ? 'rotate-180' : ''
                }`} />
              </button>

              {showDownloadDropdown && (
                <div className="absolute top-full right-0 mt-2 w-64 backdrop-blur-xl bg-white/5 
                             rounded-xl border border-white/10 overflow-hidden z-50">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedTest(`SAT Practice Test #${i + 1}`);
                        handleDownload();
                      }}
                      className="w-full px-4 py-2 text-left text-white/90 hover:bg-white/10 
                               transition-colors flex items-center gap-2"
                    >
                      <Download className="w-4 h-4 text-blue-400" />
                      SAT Practice Test #{i + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Current & Recommended Tests */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            {/* Current Test */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-3">Current Test</h3>
                <p className="text-lg text-white/60 mb-6">Continue your progress on SAT Practice Test #8</p>
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>45 min left</span>
                  </div>
                  <span>•</span>
                  <span>28/38 complete</span>
                </div>
                <button 
                  className="w-full py-3 mt-6 rounded-xl font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => handleTestSelect('current')}
                >
                  Resume Test
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Recommended Test */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-3">Recommended Test</h3>
                <p className="text-lg text-white/60 mb-6">Start SAT Practice Test #10</p>
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <span>3h 15m</span>
                  <span>•</span>
                  <span>154 questions</span>
                </div>
                <button 
                  className="w-full py-3 mt-6 rounded-xl font-medium bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => handleTestSelect('recommended')}
                >
                  <Plus className="w-4 h-4" />
                  Start New Test
                </button>
              </div>
            </div>
          </div>

          {/* Test List */}
          <div className="grid grid-cols-2 gap-6">
            {testStatuses.map((test) => (
              <div key={test.id} onClick={() => setExpandedTest(expandedTest === test.id ? null : test.id)} className="group cursor-pointer">
                <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">SAT Practice Test #{test.id}</h3>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(test.status)}
                      <span className={`text-sm ${
                        test.status === 'completed' ? 'text-green-400' :
                        test.status === 'in_progress' ? 'text-blue-400' :
                        'text-white/40'
                      }`}>
                        {getStatusText(test.status)}
                      </span>
                    </div>
                  </div>

                  {test.status !== 'not_started' && expandedTest === test.id && (
                    <div className="mt-4 space-y-4">
                      {test.progress && (
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-white/60">Progress</span>
                            <span className="text-blue-400">{test.progress}%</span>
                          </div>
                          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" style={{ width: `${test.progress}%` }} />
                          </div>
                        </div>
                      )}
                      {test.timeSpent && (
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Clock className="w-4 h-4" />
                          <span>Time spent: {test.timeSpent}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {expandedTest === test.id && (
                    <button onClick={(e) => {
                      e.stopPropagation();
                      handleTestSelect(test.id);
                    }} className="w-full mt-4 py-2.5 rounded-lg font-medium bg-white/5 text-white/90 border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                      {test.status === 'in_progress' ? 'Resume' : 'Start'} Test
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* External Practice Tests */}
          <div className="mt-16 space-y-6">
            <h2 className="text-2xl font-bold text-white">External Practice Tests</h2>
            <div className="grid grid-cols-6 gap-4">
              {/* College Board */}
              <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10
                           hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 
                               flex items-center justify-center mb-4">
                    <BookText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">CLGB</h3>
                  <p className="text-2xl font-bold text-white mb-2">$49.99</p>
                  <div className="flex items-center gap-1">
                    <span className="text-green-400 text-sm">+$2.50</span>
                    <span className="text-green-400 text-sm">(+5.26%)</span>
                  </div>
                </div>
              </div>

              {/* Princeton Review */}
              <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10
                           hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 
                               flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">PRNCTN</h3>
                  <p className="text-2xl font-bold text-white mb-2">$39.99</p>
                  <div className="flex items-center gap-1">
                    <span className="text-red-400 text-sm">-$1.50</span>
                    <span className="text-red-400 text-sm">(-3.61%)</span>
                  </div>
                </div>
              </div>

              {/* Kaplan */}
              <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10
                           hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-400 
                               flex items-center justify-center mb-4">
                    <BookText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">KPLN</h3>
                  <p className="text-2xl font-bold text-white mb-2">$44.99</p>
                  <div className="flex items-center gap-1">
                    <span className="text-green-400 text-sm">+$3.25</span>
                    <span className="text-green-400 text-sm">(+7.78%)</span>
                  </div>
                </div>
              </div>
              
              {/* Barron's */}
              <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10
                           hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-400 
                               flex items-center justify-center mb-4">
                    <BookText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">BRNS</h3>
                  <p className="text-2xl font-bold text-white mb-2">$34.99</p>
                  <div className="flex items-center gap-1">
                    <span className="text-red-400 text-sm">-$0.75</span>
                    <span className="text-red-400 text-sm">(-2.10%)</span>
                  </div>
                </div>
              </div>

              {/* McGraw Hill */}
              <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10
                           hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-400 
                               flex items-center justify-center mb-4">
                    <BookText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">MGRW</h3>
                  <p className="text-2xl font-bold text-white mb-2">$29.99</p>
                  <div className="flex items-center gap-1">
                    <span className="text-green-400 text-sm">+$1.25</span>
                    <span className="text-green-400 text-sm">(+4.35%)</span>
                  </div>
                </div>
              </div>

              {/* Peterson's */}
              <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10
                           hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-400 
                               flex items-center justify-center mb-4">
                    <BookText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">PTRS</h3>
                  <p className="text-2xl font-bold text-white mb-2">$24.99</p>
                  <div className="flex items-center gap-1">
                    <span className="text-green-400 text-sm">+$0.89</span>
                    <span className="text-green-400 text-sm">(+3.69%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TestSelectionPage;