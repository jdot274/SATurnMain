import React from 'react';
import { Clock } from 'lucide-react';

const Dashboard: React.FC = () => (
  <div className="backdrop-blur-xl bg-white/5 rounded-lg border border-white/10 p-6">
    <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-blue-500/20 text-white p-6 rounded-lg border border-blue-500/30">
        <h3 className="text-xl font-bold">Vocabulary Progress</h3>
        <p className="mt-2 text-4xl text-blue-400">75%</p>
      </div>
      <div className="bg-blue-500/20 text-white p-6 rounded-lg border border-blue-500/30">
        <h3 className="text-xl font-bold">Words Mastered</h3>
        <p className="mt-2 text-4xl text-blue-400">120</p>
      </div>
    </div>
    <div className="mt-8">
      <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
      <ul className="space-y-4">
        <li className="flex items-center text-white/70">
          <Clock className="w-5 h-5 mr-2" />
          <span>Studied 20 words on May 21, 2023</span>
        </li>
        <li className="flex items-center text-white/70">
          <Clock className="w-5 h-5 mr-2" />
          <span>Mastered "Admonish" on May 20, 2023</span>
        </li>
        <li className="flex items-center text-white/70">
          <Clock className="w-5 h-5 mr-2" />
          <span>Added 5 words to list on May 19, 2023</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Dashboard;