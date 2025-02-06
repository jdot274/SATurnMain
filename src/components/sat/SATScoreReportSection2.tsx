import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ScoreTable } from '../backgrounds/demo/ScoreTable';

interface SATScoreReportSection2Props {
  isExpanded: boolean;
  onToggle: () => void;
}

const SATScoreReportSection2: React.FC<SATScoreReportSection2Props> = ({ isExpanded, onToggle }) => {
  return (
    <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8">
      <div className="flex items-center justify-between cursor-pointer"
           onClick={onToggle}>
        <h2 className="text-3xl font-bold text-white/90">Your SAT Score Report</h2>
        <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
          isExpanded ? 'rotate-180' : ''
        }`} />
      </div>
      {!isExpanded && (
        <p className="mt-3 text-white/70">
          You will find your total score and your section scores on your official SAT score report.
        </p>
      )}
      <div className={`overflow-hidden transition-all duration-500 ${
        isExpanded ? 'max-h-[2000px] mt-6 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <p className="text-white/70 leading-relaxed mb-6">
          You will find your <span className="text-white font-medium">total score</span> and your <span className="text-white font-medium">section scores</span> on your official SAT score report from the College Board. These
          are the scores that college admissions committees consider when they review your application. On your SAT score
          report, you will also find a series of cross-test scores and subscores that analyze various proficiencies.
        </p>

        <ScoreTable />
      </div>
    </div>
  );
};

export default SATScoreReportSection2;