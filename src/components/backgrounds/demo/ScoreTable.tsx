import React from 'react';

export const ScoreTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 bg-white/5 border border-white/10 text-white/90">Score Type</th>
            <th className="text-left p-4 bg-white/5 border border-white/10 text-white/90">Range</th>
            <th className="text-left p-4 bg-white/5 border border-white/10 text-white/90">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-white/10">
            <td className="p-4 text-white/70">1 total score</td>
            <td className="p-4"><span className="text-white font-medium">400-1600</span></td>
            <td className="p-4 text-white/70">Sum of 2 section scores</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-4 text-white/70">2 section scores</td>
            <td className="p-4"><span className="text-white font-medium">200-800</span></td>
            <td className="p-4 text-white/70">1 score for Math section, 1 score for Evidence-Based Reading and Writing section</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-4 text-white/70">3 test scores</td>
            <td className="p-4"><span className="text-white font-medium">10-40</span></td>
            <td className="p-4 text-white/70">Scores for Reading, Writing and Language, and Math</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-4 text-white/70">2 cross-test scores</td>
            <td className="p-4"><span className="text-white font-medium">10-40</span></td>
            <td className="p-4 text-white/70">Scores for Analysis in History/Social Studies and for Analysis in Science. Each score is based on selected questions from the Reading, Writing and Language, and Math tests.</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="p-4 text-white/70">7 subscores</td>
            <td className="p-4"><span className="text-white font-medium">1-15</span></td>
            <td className="p-4 text-white/70">
              <div className="space-y-2">
                <p>Scores for the following proficiencies based on selected questions from the Reading, Writing and Language, and Math tests:</p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>Command of Evidence</li>
                  <li>Words in Context</li>
                  <li>Expression of Ideas</li>
                  <li>Standard English Conventions</li>
                  <li>Heart of Algebra</li>
                  <li>Problem Solving and Data Analysis</li>
                  <li>Passport to Advanced Math</li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};