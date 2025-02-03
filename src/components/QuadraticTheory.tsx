import React from 'react';
import { BookOpen } from 'lucide-react';

interface QuadraticTheoryProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const QuadraticTheory: React.FC<QuadraticTheoryProps> = ({ isExpanded, onToggle }) => {
  return (
    <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
            <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Theory</h2>
        </div>
        <svg
          className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      <div className={`overflow-hidden transition-all duration-500 ${
        isExpanded ? 'max-h-[2000px] mt-6 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="text-white/70">
          <h3 className="text-xl font-semibold text-white mb-3">What is a Quadratic Equation?</h3>
          <p className="leading-relaxed">
            A quadratic equation is a polynomial equation of degree 2, typically written in the form:
          </p>
          <div className="my-4 p-4 bg-white/5 rounded-lg border border-white/10 text-center">
            <p className="text-xl text-blue-400">ax² + bx + c = 0</p>
          </div>
          <p className="leading-relaxed">
            where:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2 [&>li]:text-green-400">
            <li>a ≠ 0 (if a = 0, the equation becomes linear)</li>
            <li>a, b, and c are real numbers</li>
            <li>x is the variable</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8">
          {/* Left Column - Solving Methods */}
          <div className="text-white/70">
            <h3 className="text-xl font-semibold text-white mb-3">Solving Methods</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 h-[140px] flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">1. Quadratic Formula</h4>
                  <p className="mb-3">The quadratic formula is:</p>
                </div>
                <div>
                  <p className="text-center text-blue-400 text-lg">x = (-b ± √(b² - 4ac)) / (2a)</p>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-lg border border-white/10 h-[140px] flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">2. Factoring</h4>
                  <p>When possible, rewrite the equation as a product of linear factors:</p>
                </div>
                <p className="text-center text-blue-400 text-lg">ax² + bx + c = (px + q)(rx + s)</p>
              </div>

              <div className="p-4 bg-white/5 rounded-lg border border-white/10 h-[140px] flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">3. Completing the Square</h4>
                  <p>Useful for deriving the quadratic formula and understanding the relationship to parabolas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Examples */}
          <div className="text-white/70">
            <h3 className="text-xl font-semibold text-white mb-3">Examples</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 h-[140px] flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Example 1: Using Formula</h4>
                  <p>Solve: x² + 5x + 6 = 0</p>
                </div>
                <div className="text-blue-400">x = -3 or -2</div>
              </div>

              <div className="p-4 bg-white/5 rounded-lg border border-white/10 h-[140px] flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Example 2: Factoring</h4>
                  <p>Solve: x² - 7x + 12 = 0</p>
                </div>
                <div className="text-blue-400">x = 3 or x = 4</div>
              </div>

              <div className="p-4 bg-white/5 rounded-lg border border-white/10 h-[140px] flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Example 3: Square</h4>
                  <p>Solve: x² + 6x + 5 = 0</p>
                </div>
                <div className="text-blue-400">x = -5 or -1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuadraticTheory;