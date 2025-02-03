import React, { useState } from 'react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import { SkillCard } from '../components/practice/SkillCard'; 
import { VocabInfoModal } from '../components/practice/VocabInfoModal';
import { skills } from '../data/practiceSkills';
import { BackgroundDemo } from '../components/backgrounds/demo/BackgroundDemo';
import GridInsModal from '../components/GridInsModal';
import MultipleChoiceModal from '../components/MultipleChoiceModal';
import SATScoreReportSection2 from '../components/sat/SATScoreReportSection2';
import SATExplainedModal from '../components/SATExplainedModal';
import { ChevronDown, BookOpen, Info } from 'lucide-react';
import { HelpCircle } from 'lucide-react';
import InfoHovercard from '../components/InfoHovercard';

const PracticePage2: React.FC = () => {
  const [showVocabInfo, setShowVocabInfo] = useState(false);
  const [showGridInsInfo, setShowGridInsInfo] = useState(false);
  const [isBackgroundExpanded, setIsBackgroundExpanded] = useState(false);
  const [showMultipleChoiceInfo, setShowMultipleChoiceInfo] = useState(false);
  const [isSATCoverExpanded, setIsSATCoverExpanded] = useState(false);
  const [isScoringExpanded, setIsScoringExpanded] = useState(false);
  const [isScoreReportExpanded, setIsScoreReportExpanded] = useState(false);
  const [showSATInfo, setShowSATInfo] = useState(false);

  const renderInfoIcon = (topic: string) => (
    <div className="relative group">
      <button className="w-6 h-6 rounded-full bg-yellow-500/20 border border-yellow-500/30 
                      flex items-center justify-center text-yellow-400 cursor-help">
        <Info className="w-4 h-4" />
      </button>
      <InfoHovercard
        title={topic}
        content={
          topic === 'Vocabulary' ? (
            <div className="space-y-4 text-white/70">
              <p>Words in Context questions test your ability to understand vocabulary in context and use words precisely.</p>
              <ul className="space-y-2">
                <li>• 18 questions per test</li>
                <li>• Tests understanding of word meanings and connotations</li>
                <li>• Focuses on commonly used words in academic contexts</li>
              </ul>
            </div>
          ) : topic === 'Grid-ins' ? (
            <div className="space-y-4 text-white/70">
              <p>Grid-in questions require you to calculate and enter your own answers rather than selecting from choices.</p>
              <ul className="space-y-2">
                <li>• 13 questions in Math section</li>
                <li>• No multiple choice options provided</li>
                <li>• Must be exact - no partial credit</li>
              </ul>
            </div>
          ) : (
            <div className="space-y-4 text-white/70">
              <p>Multiple choice questions test your ability to analyze and select the best answer from given options.</p>
              <ul className="space-y-2">
                <li>• Four answer choices per question</li>
                <li>• No penalty for wrong answers</li>
                <li>• Process of elimination is key</li>
              </ul>
            </div>
          )
        }
        className="-right-2 top-8 transform translate-x-full"
      />
    </div>
  );

  const handleSATInfoClick = () => {
    const satWindow = window.open('', '_blank', 'width=800,height=800');
    if (satWindow) {
      satWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>SAT Info</title>
          <link rel="stylesheet" href="/src/index.css">
        </head>
        <body class="bg-slate-950">
          <div id="sat-modal"></div>
        </body>
        </html>
      `);
      const root = satWindow.document.getElementById('sat-modal');
      if (root) {
        ReactDOM.render(
          <SATExplainedModal onClose={() => satWindow.close()} />,
          root
        );
      }
    }
  };

  return (
    <div className="practice-page min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950
                    flex flex-col relative overflow-hidden">
      <PageLogo />
      {/* Background Effects */}
      <div className="fixed inset-0 w-[200vw] h-[200vh] -top-[50vh] -left-[50vw]">
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
        <div className="fixed inset-0 w-[200vw] h-[200vh] -top-[50vh] -left-[50vw] bg-gradient-to-b from-transparent via-slate-950/90 to-slate-950" />
      </div>

      <Navigation />

      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 rounded-xl blur opacity-75 animate-pulse" />
                <div className="relative px-4 py-2 backdrop-blur-xl bg-white/5 rounded-xl border border-white/20">
                  <div className="flex items-center justify-between cursor-pointer"
                       onClick={() => setIsBackgroundExpanded(!isBackgroundExpanded)}>
                    <h1 className="text-lg font-bold bg-gradient-to-r from-blue-300 via-purple-200 to-blue-100 bg-clip-text text-transparent">Background</h1>
                    <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
                      isBackgroundExpanded ? 'rotate-180' : ''
                    }`} />
                  </div>
                  <div className={`mt-4 overflow-hidden transition-all duration-500 ${
                    isBackgroundExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="flex flex-col items-center gap-3">
                      <button
                        onClick={() => handleSATInfoClick()}
                        className="px-4 py-2 rounded-lg backdrop-blur-xl border border-pink-500/30 
                               bg-pink-500/20 text-pink-400 hover:bg-pink-500/30
                               transition-all duration-300 flex items-center gap-3 font-medium
                               mx-auto text-base shadow-lg shadow-pink-500/20"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Summary</span>
                      </button>
                      <button
                        onClick={() => {
                          const element = document.querySelector('.demo-content');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-4 py-2 rounded-lg backdrop-blur-xl border border-blue-500/30 
                               bg-blue-500/20 text-blue-400 hover:bg-blue-500/30
                               transition-all duration-300 flex items-center gap-3 font-medium
                               mx-auto text-base shadow-lg shadow-blue-500/20"
                      >
                        <HelpCircle className="w-4 h-4" />
                        <span>FAQ</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SAT Format Table Section */}
            <div className="mt-8">
              <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-4">
                <div className="flex items-center justify-between cursor-pointer"
                     onClick={() => setIsSATCoverExpanded(!isSATCoverExpanded)}>
                  <div>
                    <h2 className="text-lg font-bold text-white/90 mb-2">What Does the SAT Cover?</h2>
                    <div className="text-white/70 leading-relaxed space-y-2">
                      <p className="text-sm">The SAT has two main sections: Reading and Writing, followed by Math.</p>
                      <p className="text-sm">Most SAT questions are <span className="text-green-400 font-medium">multiple choice</span>, but thirteen questions on the Math section will be <span className="text-orange-400 font-medium">grid-ins</span>.</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
                    isSATCoverExpanded ? 'rotate-180' : ''
                  }`} />
                </div>
                <div className={`overflow-hidden transition-all duration-500 ${
                  isSATCoverExpanded ? 'max-h-[2000px] mt-6 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-2 text-sm bg-blue-500/20 border border-blue-500/30 text-white font-bold rounded-lg">Section</th>
                    <th className="text-left p-2 text-sm bg-blue-500/20 border border-blue-500/30 text-white font-bold rounded-lg"># of Questions</th>
                    <th className="text-left p-2 text-sm bg-blue-500/20 border border-blue-500/30 text-white font-bold rounded-lg">Time</th>
                    <th className="text-left p-2 text-sm bg-blue-500/20 border border-blue-500/30 text-white font-bold rounded-lg"># of Modules</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 text-sm border border-white/10 bg-white/5 text-white/90">Reading and Writing</td>
                    <td className="p-2 text-sm border border-white/10 bg-white/5 text-purple-400 font-medium">54</td>
                    <td className="p-2 text-sm border border-white/10 bg-white/5 text-blue-400 font-medium">64 min</td>
                    <td className="p-2 text-sm border border-white/10 bg-white/5 text-green-400 font-medium">2 (32 min each)</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-sm border border-white/10 bg-white/5 text-white/90">Math</td>
                    <td className="p-2 text-sm border border-white/10 bg-white/5 text-purple-400 font-medium">44</td>
                    <td className="p-2 text-sm border border-white/10 bg-white/5 text-blue-400 font-medium">70 min</td>
                    <td className="p-2 text-sm border border-white/10 bg-white/5 text-green-400 font-medium">2 (35 min each)</td>
                  </tr>
                </tbody>
                </table>
                
                <div className="mt-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="text-left p-4 bg-blue-500/20 border border-blue-500/30 text-white font-bold rounded-lg">Order</th>
                        <th className="text-left p-4 bg-blue-500/20 border border-blue-500/30 text-white font-bold rounded-lg">Section</th>
                        <th className="text-left p-4 bg-blue-500/20 border border-blue-500/30 text-white font-bold rounded-lg">Time Allotted</th>
                        <th className="text-left p-4 bg-blue-500/20 border border-blue-500/30 text-white font-bold rounded-lg"># of Questions</th>
                        <th className="text-left p-4 bg-blue-500/20 border border-blue-500/30 text-white font-bold rounded-lg">Time per question</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90">1</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90">Reading and Writing Module 1</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-blue-400">32 minutes</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-purple-400">27</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-green-400">71 seconds</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90">2</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90">Reading and Writing Module 2</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-blue-400">32 minutes</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-purple-400">27</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-green-400">71 seconds</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90">3</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90">Break</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-blue-400">10 minutes</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90">---</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90">---</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90">4</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90">Math Module 1</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-blue-400">35 minutes</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-purple-400">22</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-green-400">95 seconds</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90">5</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90">Math Module 2</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-blue-400">35 minutes</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-purple-400">22</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-green-400">95 seconds</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90">Total:</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90"></td>
                        <td className="p-4 border border-white/10 bg-white/5 text-blue-400">134 minutes (2 hours and 14 minutes)</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-purple-400">98</td>
                        <td className="p-4 border border-white/10 bg-white/5 text-white/90">--</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
              </div>

            {/* How is the SAT Scored? */}
            <div className="mt-8 backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-8">
                <div className="flex items-center justify-between cursor-pointer"
                     onClick={() => setIsScoringExpanded(!isScoringExpanded)}>
                  <div>
                    <h2 className="text-2xl font-bold text-white/90 mb-3">How is the SAT Scored?</h2>
                    <p className="text-white/70">When you take the SAT, you'll be given a total score between 400 and 1600.</p>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
                    isScoringExpanded ? 'rotate-180' : ''
                  }`} />
                </div>
                <div className={`overflow-hidden transition-all duration-500 ${
                  isScoringExpanded ? 'max-h-[2000px] mt-6 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="space-y-6">
                    <p className="text-white/70 leading-relaxed text-sm">
                      <span className="text-white font-medium">When you take the SAT, you'll be given a total score between 400 and 1600.</span> As mentioned
                      above, the SAT has two major sections: Reading + Writing and Math. You'll earn a scaled score of
                      between 200 and 800 points on each section. But where does the scoring scale come from?
                    </p>
                    <p className="text-white/70 leading-relaxed text-sm">
                      You start with a raw score for each topic area. <span className="text-white font-medium">Your raw score is simply the number of
                      questions you answered correctly;</span> skipped or wrong questions do not add or subtract from your
                      raw score. That number is then converted into a scaled score through a process called equating—
                      the College Board is a bit cagey about how exactly this works, but it's based on years worth of data
                      rather than how people do on a specific test date.
                    </p>
                    <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
                      <p className="text-white/70 leading-relaxed text-sm">
                        The <span className="text-white font-medium">average SAT score is around 1060</span>, with some variation from year to year, but what counts
                        as a good score for you will really depend on where you're looking to apply. To get into a top-
                        tier school you'll likely need to score about 1500 or higher, but for the local branch of the state
                        university you might be just fine with a 1050.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="backdrop-blur-xl bg-white/5 rounded-lg p-3 border border-white/10">
                        <h3 className="text-base font-semibold text-white mb-2">Raw Score</h3>
                        <p className="text-white/60 text-sm">Number of questions answered correctly</p>
                      </div>
                      <div className="backdrop-blur-xl bg-white/5 rounded-lg p-3 border border-white/10">
                        <h3 className="text-base font-semibold text-white mb-2">Scaled Score</h3>
                        <p className="text-white/60 text-sm">Converted score (200-800 per section)</p>
                      </div>
                      <div className="backdrop-blur-xl bg-white/5 rounded-lg p-3 border border-white/10">
                        <h3 className="text-base font-semibold text-white mb-2">Total Score</h3>
                        <p className="text-white/60 text-sm">Sum of section scores (400-1600)</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

              {/* Your SAT Score Report */}
              <div className="mt-8">
                <SATScoreReportSection2
                  isExpanded={isScoreReportExpanded}
                  onToggle={() => setIsScoreReportExpanded(!isScoreReportExpanded)}
                />
              </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.title}
                  skill={skill}
                  onShowInfo={() => {
                    const topic = skill.topics.find(t => t.name === skill.title);
                    if (topic) {
                      renderInfoIcon(topic.name);
                    }
                  }}
                />
              ))}
            </div>
          
            {/* Demo Content */}
            <div className="border-t border-white/10 demo-content mt-8">
              <BackgroundDemo />
            </div>
          </div>
        </div>
    </main>
    </div>
  );
};

export default PracticePage2;