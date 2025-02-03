import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Rocket, Brain, Target, Clock, Award, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';

const mockScoreData = [
  { date: 'Test 1', score: 1280 },
  { date: 'Test 2', score: 1350 },
  { date: 'Test 3', score: 1320 },
  { date: 'Test 4', score: 1410 },
  { date: 'Test 5', score: 1380 },
  { date: 'Test 6', score: 1450 },
];

const ProgressPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col relative">
      <Navigation />

      <div className="flex-1 max-w-7xl mx-auto px-4 pt-2 pb-4 overflow-y-auto
                    [mask-image:linear-gradient(to_bottom,transparent,black_20px,black_calc(100%-20px),transparent)]">
        {/* Top Stats */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 relative overflow-hidden shadow-lg shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/10"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-400">Current Score</h3>
                <div className="relative">
                  <Brain className="h-5 w-5 text-blue-400" />
                  <div className="absolute inset-0 blur-sm bg-blue-400/50"></div>
                </div>
              </div>
              <p className="text-4xl font-bold mb-2 text-white">1450</p>
              <p className="text-green-400 flex items-center">
                +70 points
                <ChevronRight className="h-4 w-4 ml-1" />
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 relative overflow-hidden shadow-lg shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/10"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400">Target Score</h3>
                <div className="relative">
                  <Target className="h-5 w-5 text-blue-400" />
                  <div className="absolute inset-0 blur-sm bg-blue-400/50"></div>
                </div>
              </div>
              <p className="text-4xl font-bold mb-2 text-white">1500</p>
              <p className="text-gray-400 flex items-center">
                50 points to go
                <ChevronRight className="h-4 w-4 ml-1" />
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 relative overflow-hidden shadow-lg shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/10"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400">Study Time</h3>
                <div className="relative">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <div className="absolute inset-0 blur-sm bg-blue-400/50"></div>
                </div>
              </div>
              <p className="text-4xl font-bold mb-2 text-white">127h</p>
              <p className="text-green-400 flex items-center">
                Top 5%
                <ChevronRight className="h-4 w-4 ml-1" />
              </p>
            </div>
          </div>
        </div>

        {/* Study Habits Analysis */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 shadow-lg shadow-blue-500/20">
            <h2 className="text-lg font-semibold mb-3 text-white">Study Patterns</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Peak Performance Time</span>
                  <span className="text-blue-400">9:00 AM - 11:00 AM</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Average Session Length</span>
                  <span className="text-blue-400">45 minutes</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 shadow-lg shadow-blue-500/20">
            <h2 className="text-lg font-semibold mb-3 text-white">Learning Style Analysis</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <p className="text-3xl font-bold text-blue-400 mb-2">75%</p>
                <p className="text-sm text-gray-400">Visual Learning</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <p className="text-3xl font-bold text-blue-400 mb-2">65%</p>
                <p className="text-sm text-gray-400">Practice Tests</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <p className="text-3xl font-bold text-blue-400 mb-2">85%</p>
                <p className="text-sm text-gray-400">Problem Solving</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <p className="text-3xl font-bold text-blue-400 mb-2">70%</p>
                <p className="text-sm text-gray-400">Concept Review</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          {/* Score Chart */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 shadow-lg shadow-blue-500/20">
            <h2 className="text-lg font-semibold mb-2 text-white">Score Progression</h2>
            <div className="h-36">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockScoreData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#6B7280"
                    tick={{ fill: '#6B7280' }}
                  />
                  <YAxis 
                    stroke="#6B7280"
                    domain={[1200, 1600]}
                    tick={{ fill: '#6B7280' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(17, 24, 39, 0.8)',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                      borderRadius: '0.5rem',
                      boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)',
                    }}
                    itemStyle={{ color: '#9CA3AF' }}
                    labelStyle={{ color: '#9CA3AF' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="url(#colorScore)"
                    strokeWidth={3}
                    dot={{ fill: '#111827', stroke: '#3B82F6', strokeWidth: 2, r: 4 }}
                  />
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#60A5FA" />
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Section Scores */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 shadow-lg shadow-blue-500/20">
            <h2 className="text-xl font-semibold mb-6 text-white">Section Breakdown</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Math</span>
                  <span className="text-blue-400">740</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-lg shadow-blue-500/50"
                    style={{width: '74%'}}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Reading</span>
                  <span className="text-blue-400">710</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-lg shadow-blue-500/50"
                    style={{width: '71%'}}
                  ></div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <h3 className="text-lg font-semibold mb-4 text-white">Time Usage</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Clock className="h-5 w-5 text-blue-400" />
                        <div className="absolute inset-0 blur-sm bg-blue-400/50"></div>
                      </div>
                      <span className="text-gray-400">Math Section</span>
                    </div>
                    <span className="text-gray-300">45/60 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Clock className="h-5 w-5 text-blue-400" />
                        <div className="absolute inset-0 blur-sm bg-blue-400/50"></div>
                      </div>
                      <span className="text-gray-400">Reading Section</span>
                    </div>
                    <span className="text-gray-300">52/65 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20 shadow-lg shadow-blue-500/20">
            <div className="flex items-center space-x-2 mb-2">
              <div className="relative">
                <Award className="h-5 w-5 text-blue-400" />
                <div className="absolute inset-0 blur-sm bg-blue-400/50"></div>
              </div>
              <h3 className="text-gray-400">Questions Completed</h3>
            </div>
            <p className="text-3xl font-bold text-white">2,847</p>
            <div className="flex items-center mt-2">
              <div className="h-2 w-2 bg-green-400 rounded-full mr-2 shadow-lg shadow-green-500/50"></div>
              <span className="text-gray-400">92% accuracy</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 shadow-lg shadow-blue-500/20">
            <div className="flex items-center space-x-3 mb-2">
              <div className="relative">
                <Target className="h-5 w-5 text-blue-400" />
                <div className="absolute inset-0 blur-sm bg-blue-400/50"></div>
              </div>
              <h3 className="text-gray-400">Weak Areas</h3>
            </div>
            <p className="text-3xl font-bold text-white">Geometry</p>
            <div className="flex items-center mt-2">
              <div className="h-2 w-2 bg-red-400 rounded-full mr-2 shadow-lg shadow-red-500/50"></div>
              <span className="text-gray-400">Focus needed</span>
            </div>
          </div>

          <div className="col-span-2 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 shadow-lg shadow-blue-500/20 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Study Streak</h3>
              <p className="text-gray-400">12 days - Keep up the momentum!</p>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20 shadow-lg shadow-blue-500/20">
            <h3 className="text-base font-semibold text-white mb-2">Consistency Score</h3>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-blue-400">92%</div>
              <div className="text-sm text-gray-400">Last 30 days</div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 shadow-lg shadow-blue-500/20">
            <h3 className="text-base font-semibold text-white mb-2">Focus Time</h3>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-blue-400">18.5h</div>
              <div className="text-sm text-gray-400">This week</div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 shadow-lg shadow-blue-500/20">
            <h3 className="text-base font-semibold text-white mb-2">Improvement Rate</h3>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-green-400">+15%</div>
              <div className="text-sm text-gray-400">Month over month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;