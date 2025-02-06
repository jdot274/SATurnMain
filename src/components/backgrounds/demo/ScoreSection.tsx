import React from 'react';
import { SectionContent } from './SectionContent';
import { SectionHeader } from './SectionHeader';
import { ScoreTable } from './ScoreTable';

interface ScoreSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export const ScoreSection: React.FC<ScoreSectionProps> = ({ isExpanded, onToggle }) => {
  return (
    <SectionHeader 
      title="Your SAT Score Report"
      isExpanded={isExpanded}
      onToggle={onToggle}
    >
      <SectionContent isExpanded={isExpanded}>
        <p className="text-white/70 leading-relaxed">
          You will find your <span className="text-white font-medium">total score</span> and your <span className="text-white font-medium">section scores</span> on your official SAT score report from the College Board. These
          are the scores that college admissions committees consider when they review your application. On your SAT score
          report, you will also find a series of cross-test scores and subscores that analyze various proficiencies.
        </p>

        <ScoreTable />
      </SectionContent>
    </SectionHeader>
  );
};