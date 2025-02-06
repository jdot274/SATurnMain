import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SATCoverSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const SATCoverSection: React.FC<SATCoverSectionProps> = ({ isExpanded, onToggle }) => {
  return (
    <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-6">
      <div className="flex items-center justify-between cursor-pointer"
           onClick={onToggle}>
        <div>
          <h2 className="text-2xl font-bold text-white/90 mb-2">What Does the SAT Cover?</h2>
          <div className="text-white/70 leading-relaxed space-y-2">
            <p>The SAT has two main sections: Reading and Writing, followed by Math.</p>
            <p>Most SAT questions are <span className="text-green-400 font-medium">multiple choice</span>, but thirteen questions on the Math section will be <span className="text-orange-400 font-medium">grid-ins</span>.</p>
          </div>
        </div>
        <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
          isExpanded ? 'rotate-180' : ''
        }`} />
      </div>

      <div className={`overflow-hidden transition-all duration-500 ${
        isExpanded ? 'max-h-[2000px] mt-4 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-4 bg-blue-500/20 border border-blue-500/30 text-white font-bold rounded-lg">Section</th>
              <th className="text-left p-4 bg-blue-500/20 border border-blue-500/30 text-white font-bold rounded-lg"># of Questions</th>
              <th className="text-left p-4 bg-blue-500/20 border border-blue-500/30 text-white font-bold rounded-lg">Time</th>
              <th className="text-left p-4 bg-blue-500/20 border border-blue-500/30 text-white font-bold rounded-lg"># of Modules</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border border-white/10 bg-white/5 text-white/90">Reading and Writing</td>
              <td className="p-4 border border-white/10 bg-white/5 text-purple-400 font-medium">54</td>
              <td className="p-4 border border-white/10 bg-white/5 text-blue-400 font-medium">64 min</td>
              <td className="p-4 border border-white/10 bg-white/5 text-green-400 font-medium">2 (32 min each)</td>
            </tr>
            <tr>
              <td className="p-4 border border-white/10 bg-white/5 text-white/90">Math</td>
              <td className="p-4 border border-white/10 bg-white/5 text-purple-400 font-medium">44</td>
              <td className="p-4 border border-white/10 bg-white/5 text-blue-400 font-medium">70 min</td>
              <td className="p-4 border border-white/10 bg-white/5 text-green-400 font-medium">2 (35 min each)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SATCoverSection;