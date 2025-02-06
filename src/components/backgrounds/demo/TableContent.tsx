import React from 'react';

const formatData = [
  { order: 1, section: 'Reading and Writing Module 1', time: '32 minutes', questions: 27, timePerQ: '71 seconds' },
  { order: 2, section: 'Reading and Writing Module 2', time: '32 minutes', questions: 27, timePerQ: '71 seconds' },
  { order: 3, section: 'Break', time: '10 minutes', questions: '---', timePerQ: '---' },
  { order: 4, section: 'Math Module 1', time: '35 minutes', questions: 22, timePerQ: '95 seconds' },
  { order: 5, section: 'Math Module 2', time: '35 minutes', questions: 22, timePerQ: '95 seconds' },
  { order: 'Total:', section: '', time: '134 minutes (2 hours and 14 minutes)', questions: 98, timePerQ: '--' }
];

export const TableContent: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 bg-white/5 border border-white/10 text-white/90">Order</th>
            <th className="text-left p-4 bg-white/5 border border-white/10 text-white/90">Section</th>
            <th className="text-left p-4 bg-white/5 border border-white/10 text-white/90">Time Allotted</th>
            <th className="text-left p-4 bg-white/5 border border-white/10 text-white/90"># of Questions</th>
            <th className="text-left p-4 bg-white/5 border border-white/10 text-white/90">Time per question</th>
          </tr>
        </thead>
        <tbody>
          {formatData.map((row, index) => (
            <tr key={index} className="border-t border-white/10">
              <td className="p-4 text-white/70">{row.order}</td>
              <td className="p-4 text-white/70">{row.section}</td>
              <td className="p-4 text-white/70">{row.time}</td>
              <td className="p-4 text-white/70">{row.questions}</td>
              <td className="p-4 text-white/70">{row.timePerQ}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};