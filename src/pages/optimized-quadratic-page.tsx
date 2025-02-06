import React, { useState } from 'react';
import { BookOpen, Brain, Calculator, ChevronDown, Target, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <img src="/api/placeholder/32/32" alt="Logo" className="w-8 h-8" />
        <span className="font-bold text-white">SATurn</span>
      </div>
      <nav className="flex gap-4 items-center">
        <a href="#" className="text-white/70 hover:text-white transition-colors">Dashboard</a>
        <a href="#" className="text-white/70 hover:text-white transition-colors">Practice</a>
        <a href="#" className="text-white/70 hover:text-white transition-colors">Progress</a>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2">
          <img src="/api/placeholder/24/24" alt="Avatar" className="w-6 h-6 rounded-full" />
          Profile
        </button>
      </nav>
    </div>
  );
};

const Section = ({ title, icon: Icon, color = "blue", children }) => {
  return (
    <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg bg-${color}-500/20 border border-${color}-500/30`}>
          <Icon className={`w-6 h-6 text-${color}-400`} />
        </div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
};

const InteractiveGraph = () => {
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
    <div className="space-y-4">
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

const QuadraticEquationsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Header />
      
      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Theory Section */}
          <Section title="Theory" icon={BookOpen}>
            <div className="space-y-4">
              <div className="text-white/70">
                <h3 className="text-xl font-semibold text-white mb-3">What is a Quadratic Equation?</h3>
                <p className="leading-relaxed">
                  A quadratic equation is a polynomial equation of degree 2, typically written in the form:
                </p>
                <div className="my-4 p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                  <p className="text-xl text-blue-400">ax² + bx + c = 0</p>
                </div>
                <ul className="list-disc list-inside space-y-2 mt-2 [&>li]:text-green-400">
                  <li>a ≠ 0 (if a = 0, the equation becomes linear)</li>
                  <li>a, b, and c are real numbers</li>
                  <li>x is the variable</li>
                </ul>
              </div>

              <div className="text-white/70">
                <h3 className="text-xl font-semibold text-white mb-3">Solving Methods</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-lg font-medium text-white mb-2">1. Quadratic Formula</h4>
                    <p className="mb-3">The quadratic formula is:</p>
                    <p className="text-center text-blue-400 text-lg mb-3">x = (-b ± √(b² - 4ac)) / 2a</p>
                    <p>This formula always works and gives all solutions.</p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-lg font-medium text-white mb-2">2. Factoring</h4>
                    <p>When possible, rewrite the equation as a product of linear factors:</p>
                    <p className="text-center text-blue-400 text-lg my-3">ax² + bx + c = (px + q)(rx + s)</p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-lg font-medium text-white mb-2">3. Completing the Square</h4>
                    <p>Useful for deriving the quadratic formula and understanding the relationship to parabolas.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Interactive Graph */}
          <Section title="Interactive Graph" icon={Activity} color="blue">
            <div className="space-y-6">
              <p className="text-white/70 leading-relaxed">
                This interactive graph demonstrates how each coefficient affects the parabola's shape and position. 
                Experiment with the sliders to see how:
              </p>
              <ul className="list-disc list-inside space-y-2 [&>li]:text-green-400">
                <li>The 'a' coefficient changes the opening direction and steepness</li>
                <li>The 'b' coefficient shifts the parabola left or right</li>
                <li>The 'c' coefficient moves the entire parabola up or down</li>
              </ul>
              <InteractiveGraph />
            </div>
          </Section>

          {/* Example Problems */}
          <Section title="Example Problems" icon={Brain} color="purple">
            <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-lg font-medium text-white mb-3">Problem 1: Solve 2x² - 3x - 5 = 0</h3>
                <div className="pl-4 border-l-2 border-purple-500/30 space-y-3">
                  <p className="text-white/70">1. Identify a = 2, b = -3, and c = -5</p>
                  <p className="text-white/70">2. Use quadratic formula: x = (-b ± √(b² - 4ac)) / 2a</p>
                  <p className="text-white/70">3. Plug in values: x = (3 ± √(9 + 40)) / 4</p>
                  <p className="text-white/70">4. Simplify: x = (3 ± 7) / 4</p>
                  <p className="text-blue-400">Solution: x = 2.5 or x = -1</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Practice Problems */}
          <Section title="Practice" icon={Calculator} color="green">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <h3 className="text-lg font-medium text-white mb-2">Basic Problems</h3>
                  <ul className="space-y-3 text-white/70">
                    <li>1. Solve x² - 4x - 12 = 0</li>
                    <li>2. Find the x-intercepts of y = x² - 5x + 6</li>
                    <li>3. Rewrite y = 2x² + 8x + 6 in vertex form</li>
                  </ul>
                </div>

                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <h3 className="text-lg font-medium text-white mb-2">Try Interactive Practice</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-white">
                      Step-by-Step Solutions
                    </button>
                    <button className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-white">
                      Graph Transformations
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
};

export default QuadraticEquationsPage;