import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SATInfoSection: React.FC = () => {
  const [isCoverExpanded, setCoverExpanded] = useState(false);
  const [isScoringExpanded, setScoringExpanded] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-950 via-slate-950 to-purple-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto px-4 py-24 relative">
        <div className="space-y-12">
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setCoverExpanded(!isCoverExpanded)}
            >
              <h2 className="text-3xl font-bold text-white/90">What Does the SAT Cover?</h2>
              <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 
                                  ${isCoverExpanded ? 'rotate-180' : ''}`} />
            </div>
            <div className={`mt-6 space-y-6 overflow-hidden transition-all duration-500 
                         ${isCoverExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-white/70 leading-relaxed">
                The SAT has two main sections: Reading and Writing, followed by Math. Both of these sections are 
                separated into modules. So you'll take the two Reading and Writing modules, have a ten-minute 
                break, then take the two Math modules. <span className="text-white font-medium">Most SAT questions are multiple choice</span>, 
                but eleven questions on the Math section will be grid-ins.
              </p>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setScoringExpanded(!isScoringExpanded)}
            >
              <h2 className="text-3xl font-bold text-white/90">How Is the SAT Scored?</h2>
              <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 
                                  ${isScoringExpanded ? 'rotate-180' : ''}`} />
            </div>
            <div className={`mt-6 space-y-6 overflow-hidden transition-all duration-500 
                         ${isScoringExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-white/70 leading-relaxed">
                <span className="text-white font-medium">When you take the SAT, you'll be given a total score between 400 and 1600.</span> As mentioned
                above, the SAT has two major sections: Reading + Writing and Math. You'll earn a scaled score of
                between 200 and 800 points on each section. But where does the scoring scale come from?
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
                  tier school you'll likely need to score about <span className="text-white font-medium">1500 or higher</span>, but for the local branch of the state
                  university you might be just fine with a 1050.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SATInfoSection;