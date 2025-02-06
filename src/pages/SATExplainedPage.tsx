import React, { useState } from 'react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import SATCoverSection from '../components/sat/SATCoverSection';
import SATScoringSection from '../components/sat/SATScoringSection';
import SATScoreReportSection from '../components/sat/SATScoreReportSection';

const SATExplainedPage: React.FC = () => {
  const [isCoverExpanded, setCoverExpanded] = useState(false);
  const [isScoringExpanded, setScoringExpanded] = useState(false);
  const [isScoreReportExpanded, setScoreReportExpanded] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[200vw] h-[100vh] -top-[30vh] -left-[50vw] 
                      bg-gradient-to-b from-blue-400/30 via-blue-600/10 to-transparent
                      blur-3xl transform -rotate-12" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950" />
      </div>

      {/* Header */}
      <div className="relative z-50">
        <PageLogo />
        <Navigation />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white text-center mb-6">Understanding the SAT</h1>

          <div className="space-y-6 h-[calc(100vh-16rem)] overflow-hidden rounded-b-[clamp(24px,5vh,44px)]">
            <SATCoverSection
              isExpanded={isCoverExpanded}
              onToggle={() => {
                setCoverExpanded(!isCoverExpanded);
                setScoringExpanded(false);
                setScoreReportExpanded(false);
              }}
            />

            <SATScoringSection
              isExpanded={isScoringExpanded}
              onToggle={() => {
                setScoringExpanded(!isScoringExpanded);
                setCoverExpanded(false);
                setScoreReportExpanded(false);
              }}
            />

            <SATScoreReportSection
              isExpanded={isScoreReportExpanded}
              onToggle={() => {
                setScoreReportExpanded(!isScoreReportExpanded);
                setCoverExpanded(false);
                setScoringExpanded(false);
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SATExplainedPage;