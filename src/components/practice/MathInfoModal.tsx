import React from 'react';
import { X } from 'lucide-react';

interface MathInfoModalProps {
  onClose: () => void;
  title: string;
  content: Array<{
    text: string;
    items?: string[];
  }>;
}

const MathInfoModal: React.FC<MathInfoModalProps> = ({ onClose, title, content }) => {
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-8 perspective-1000">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-[90vw] max-w-6xl backdrop-blur-xl bg-white/5 rounded-2xl p-8
                   border border-white/10 space-y-6 animate-fade-in
                   shadow-[0_8px_32px_rgba(30,64,175,0.3)]
                   transform-style-preserve-3d rotate-x-12
                   animate-[modal-pop_0.4s_ease-out_forwards]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 transition-colors
                   hover:scale-110 active:scale-95"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow-lg">
            <thead>
              <tr>
                <th className="text-left p-6 bg-blue-600/20 border border-blue-500/30 text-white font-bold rounded-tl-lg">
                  Math Area
                </th>
                <th className="text-left p-6 bg-blue-600/20 border border-blue-500/30 text-white font-bold">
                  Examples
                </th>
                <th className="text-left p-6 bg-blue-600/20 border border-blue-500/30 text-white font-bold rounded-tr-lg">
                  # of Questions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-6 border border-white/10 text-white/90 bg-white/5 font-medium">
                  Number and Operations
                </td>
                <td className="p-6 border border-white/10 text-white/70 bg-white/5 leading-relaxed">
                  properties of integers; arithmetic word problems; number lines; squares and square roots; 
                  fractions and rational numbers; factors, multiples, and remainders; prime numbers; ratios, 
                  proportions, and percents; sequences; sets; counting problems; and logical reasoning
                </td>
                <td className="p-6 border border-white/10 text-white/90 bg-white/5 font-medium">
                  11-13 questions
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-white/10 text-white/90 bg-white/5">
                  Algebra and Functions
                </td>
                <td className="p-4 border border-white/10 text-white/70 bg-white/5">
                  operations on algebraic expressions; factoring; exponents; evaluating expressions with 
                  exponents and roots; solving equations; absolute value; direct translation into mathematical 
                  expressions; inequalities; systems of linear equations and inequalities; factoring; rational 
                  equations and inequalities; direct and inverse variation; word problems; and functions
                </td>
                <td className="p-4 border border-white/10 text-white/90 bg-white/5">
                  19-21 questions
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-white/10 text-white/90 bg-white/5">
                  Geometry and Measurement
                </td>
                <td className="p-4 border border-white/10 text-white/70 bg-white/5">
                  geometric notation; points and lines; angles in the plane; triangles; quadrilaterals; 
                  areas and perimeters; other polygons; circles; solid geometry; geometric perception; 
                  coordinate geometry; and transformations
                </td>
                <td className="p-4 border border-white/10 text-white/90 bg-white/5">
                  14-16 questions
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-white/10 text-white/90 bg-white/5 rounded-bl-lg">
                  Data Analysis, Statistics, and Probability
                </td>
                <td className="p-4 border border-white/10 text-white/70 bg-white/5">
                  data interpretation; statistics; elementary probability; and geometric probability
                </td>
                <td className="p-4 border border-white/10 text-white/90 bg-white/5 rounded-br-lg">
                  6-7 questions
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pt-6 border-t border-white/10 mt-8">
          <p className="text-white/60 text-sm text-center">
            Click anywhere outside to close this window
          </p>
        </div>
      </div>
    </div>
  );
};

export default MathInfoModal;