import React from 'react';
import { X, BookOpen } from 'lucide-react';
import type { Topic } from '@/types/practice';

interface VocabInfoModalProps {
  topic: Topic;
  onClose: () => void;
}

export const VocabInfoModal: React.FC<VocabInfoModalProps> = ({ topic, onClose }) => {
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 perspective-1000">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" 
           onClick={onClose} />
      <div className="relative w-full max-w-3xl backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-blue-900/80 
                   rounded-2xl p-8 border border-white/10 space-y-6
                   shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                   transform-style-preserve-3d rotate-x-12
                   animate-[modal-pop_0.4s_ease-out_forwards]">
        <div className="absolute -top-3 -left-3 p-2 bg-blue-500/20 rounded-full
                     border border-blue-500/30 backdrop-blur-sm
                     group-hover:scale-110 transition-transform duration-300">
          <BookOpen className="w-5 h-5 text-blue-400" />
        </div>
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 border border-white/20
                   hover:bg-white/20 transition-all duration-200 group/close z-50
                   hover:scale-110 active:scale-95"
        >
          <X className="w-4 h-4 text-white/70 group-hover/close:text-white" />
        </button>
        
        <div className="space-y-2">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-blue-400 
                     bg-clip-text text-transparent">{topic.info.title}</h3>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 
                         text-blue-400 text-sm">Reading and Writing section</div>
            <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 
                         text-purple-400 text-sm">18 questions</div>
          </div>
        </div>
        
        <div className="space-y-6">
          {topic.info.content.map((section, index) => (
            <div key={index} 
                 className="group bg-white/5 rounded-xl p-6 border border-white/10
                          hover:bg-white/10 transition-all duration-300
                          hover:border-white/20 hover:shadow-lg">
              {section.heading && (
                <h4 className="text-lg font-semibold text-white mb-4 group-hover:text-blue-400
                           transition-colors">{section.heading}</h4>
              )}
              <p className="text-white/70 mb-4 leading-relaxed">{section.text}</p>
              {section.items && (
                <ul className="space-y-3 text-white/70">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        <div className="pt-4 border-t border-white/10 mt-8">
          <p className="text-white/60 text-sm text-center">
            Click anywhere outside to close this window
          </p>
        </div>
      </div>
    </div>
  );
};