import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, ChevronDown, Brain, Target, Activity, BookOpen } from 'lucide-react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import QuadraticTheory from '../components/QuadraticTheory';
import InteractiveGraph from '../components/InteractiveGraph';

const QuadraticEquationsPage: React.FC = () => {
  const navigate = useNavigate();
  const [isTheoryExpanded, setTheoryExpanded] = useState(true);
  const [isExamplesExpanded, setExamplesExpanded] = useState(false);
  const [isPracticeExpanded, setPracticeExpanded] = useState(false);

  const openJsxContent = () => {
    const jsxContent = `
// ... (same content as before)
`;

    const newWindow = window.open('', '_blank', 'width=1200,height=800');
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>QuadraticEquationsPage.tsx</title>
          <style>
            body {
              margin: 0;
              padding: 20px;
              box-sizing: border-box;
              font-family: monospace;
              background: #1e293b;
              color: #e2e8f0;
              line-height: 1.5;
            }
            pre {
              white-space: pre-wrap;
              word-wrap: break-word;
            }
          </style>
        </head>
        <body>
          <pre>${jsxContent}</pre>
        </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950
                    flex flex-col relative overflow-hidden">
      <PageLogo />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[200vw] h-[100vh] -top-[50vh] -left-[50vw] 
                      bg-gradient-to-b from-blue-600/20 via-blue-800/10 to-transparent
                      blur-3xl transform -rotate-12" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/90 to-slate-950" />
      </div>

      <Navigation />

      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          {/* Header with Title and Description */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Quadratic Equations</h1>
                <p className="text-lg text-white/60">Master the fundamentals of quadratic equations</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Math Section
                </span>
                <span className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  Advanced Topic
                </span>
              </div>
            </div>
          </div>

          {/* Theory Section */}
          <QuadraticTheory
            isExpanded={isTheoryExpanded}
            onToggle={() => setTheoryExpanded(!isTheoryExpanded)}
          />

          {/* Practice Section */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setPracticeExpanded(!isPracticeExpanded)}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
                  <Calculator className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Practice</h2>
              </div>
              <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
                isPracticeExpanded ? 'rotate-180' : ''
              }`} />
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ${
              isPracticeExpanded ? 'max-h-[2000px] mt-6 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="grid grid-cols-2 gap-6">
                <button
                  onClick={openJsxContent}
                  className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10
                           transition-all duration-300 text-left group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30
                                group-hover:bg-blue-500/30 transition-colors">
                      <Target className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">View Source Code</h3>
                  </div>
                  <p className="text-white/60">View the JSX source code</p>
                </button>

                <button
                  onClick={() => navigate('/practice')}
                  className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10
                           transition-all duration-300 text-left group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30
                                group-hover:bg-purple-500/30 transition-colors">
                      <Activity className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Practice Problems</h3>
                  </div>
                  <p className="text-white/60">Solve practice problems</p>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Graph */}
          <div className="mt-8 backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
            <InteractiveGraph />
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuadraticEquationsPage;