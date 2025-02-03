import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SATScoringSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const SATScoringSection: React.FC<SATScoringSectionProps> = ({ isExpanded, onToggle }) => {
  return (
    <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-6">
      <div className="flex items-center justify-between cursor-pointer"
           onClick={onToggle}
      >
        <h2 className="text-2xl font-bold text-white/90">How is the SAT Scored?</h2>
        <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
          isExpanded ? 'rotate-180' : ''
        }`} />
      </div>
      {!isExpanded && (
        <p className="mt-2 text-white/70">
          When you take the SAT, you'll be given a total score between 400 and 1600.
        </p>
      )}
      <div className={`overflow-hidden transition-all duration-500 ${
        isExpanded ? 'max-h-[2000px] mt-4 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="space-y-6">
          <p className="text-white/70 leading-relaxed">
            <span className="text-white font-medium">When you take the SAT, you'll be given a total score between 400 and 1600.</span> As mentioned
            above, the SAT has two major sections: Reading + Writing and Math. You'll earn a scaled score of
            between 200 and 800 points on each section.
          </p>

          <p className="text-white/70 leading-relaxed">
            You start with a raw score for each topic area. <span className="text-white font-medium">Your raw score is simply the number of
            questions you answered correctly;</span> skipped or wrong questions do not add or subtract from your
            raw score.
          </p>

          <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
            <p className="text-white/70 leading-relaxed">
              The <span className="text-white font-medium">average SAT score is around 1060</span>, with some variation from year to year, but what counts
              as a good score for you will really depend on where you're looking to apply. To get into a top-
              tier school you'll likely need to score about 1500 or higher, but for the local branch of the state
              university you might be just fine with a 1050.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="backdrop-blur-xl bg-white/5 rounded-xl p-4 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">Raw Score</h3>
              <p className="text-white/60">Number of questions answered correctly</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 rounded-xl p-4 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">Scaled Score</h3>
              <p className="text-white/60">Converted score (200-800 per section)</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 rounded-xl p-4 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">Total Score</h3>
              <p className="text-white/60">Sum of section scores (400-1600)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SATScoringSection;