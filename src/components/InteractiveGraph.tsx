import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const InteractiveGraph: React.FC = () => {
  const [eq, setEq] = useState({ a: 1, b: -2, c: -3 });

  const generatePoints = () => {
    const points = [];
    for (let x = -5; x <= 5; x += 0.5) {
      points.push({
        x,
        y: eq.a * x * x + eq.b * x + eq.c
      });
    }
    return points;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
          <Activity className="w-6 h-6 text-blue-400" />
        </div>
        <h2 className="text-xl font-bold text-white">Interactive Graph</h2>
      </div>

      <p className="text-blue-400 text-xl font-medium mb-3">
        Experiment with the coefficients to see how they affect the parabola:
      </p>
      <ul className="list-disc list-inside space-y-1 [&>li]:text-green-400">
        <li>The 'a' coefficient changes the opening direction and steepness</li>
        <li>The 'b' coefficient shifts the parabola left or right</li>
        <li>The 'c' coefficient moves the entire parabola up or down</li>
      </ul>

      <div className="flex gap-6 mb-4">
        {Object.entries(eq).map(([key, val]) => (
          <div key={key} className="flex-1">
            <label className="text-white/60 text-sm block mb-1">
              {key === 'a' ? 'a (opens up/down)' : 
               key === 'b' ? 'b (left/right shift)' : 
               'c (up/down shift)'}
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.5"
              value={val}
              onChange={(e) => setEq((prev) => ({ ...prev, [key]: +e.target.value }))}
              className="w-full"
            />
            <div className="text-white/70 text-sm mt-1">
              {key}: {val}
            </div>
          </div>
        ))}
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={generatePoints()}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="x"
              tickLine={{ stroke: 'rgba(255,255,255,0.2)' }}
              axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
              tick={{ fill: 'rgba(255,255,255,0.6)' }}
            />
            <YAxis 
              tickLine={{ stroke: 'rgba(255,255,255,0.2)' }}
              axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
              tick={{ fill: 'rgba(255,255,255,0.6)' }}
            />
            <Line 
              type="monotone" 
              dataKey="y" 
              stroke="#3b82f6"
              dot={false} 
              strokeWidth={2}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(15,23,42,0.9)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.5rem',
                color: 'white'
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center">
        <p className="text-lg text-blue-400">
          y = {eq.a}x² {eq.b >= 0 ? '+' : ''}{eq.b}x {eq.c >= 0 ? '+' : ''}{eq.c}
        </p>
        <p className="text-white/60 text-sm mt-2">
          {eq.a > 0 ? 'Opens upward' : 'Opens downward'} • 
          Vertex at ({-eq.b/(2*eq.a)}, {-(eq.b*eq.b - 4*eq.a*eq.c)/(4*eq.a)})
        </p>
      </div>
    </div>
  );
};

export default InteractiveGraph;