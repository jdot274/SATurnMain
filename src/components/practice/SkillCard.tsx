import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '../InfoIcon';
import MathInfoModal from './MathInfoModal';
import { BookOpen, ChevronRight } from 'lucide-react';
import type { SkillCard as SkillCardType } from '@/types/practice';

interface SkillCardProps {
  skill: SkillCardType;
  onShowInfo: (topicName: string) => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, onShowInfo }) => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleInfoClick = (topicName: string) => {
    setSelectedTopic(topicName);
  };

  return (
    <div
      onClick={() => navigate('/practice/flashcards', { 
        state: { 
          title: skill.title,
          color: skill.color
        }
      })}
      className="group cursor-pointer"
    >
      <div className="relative backdrop-blur-md bg-white/5 rounded-2xl p-8
                   border border-white/10 overflow-hidden h-full
                   transition-all duration-300
                   hover:bg-white/10 hover:scale-[1.02]">
        <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${skill.color}`} />

        <div className="relative z-10">
          <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${skill.color}
                         p-2.5 text-white shadow-lg`}>
             <skill.icon className="w-full h-full" />
           </div>

           <h3 className="text-2xl font-bold text-white mb-3">{skill.title}</h3>
           <p className="text-base text-white/60 mb-6">{skill.description}</p>

           <div className="space-y-6">
             <div className="space-y-2">
               {skill.topics.map((topic) => (
                 <div key={topic.name} className="flex items-center justify-between text-white/60 text-sm">
                  <span className="text-white/90">{topic.name}</span>
                   {topic.info && (
                     <div className="w-6 h-6 rounded-full bg-yellow-500/20 border border-yellow-500/30 
                                 flex items-center justify-center text-yellow-400 cursor-help"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleInfoClick(topic.name);
                          }}>
                       i
                     </div>
                   )}
                 </div>
               ))}
             </div>

             {selectedTopic && (
               <MathInfoModal
                 title={skill.topics.find(t => t.name === selectedTopic)?.info?.title || ''}
                 content={skill.topics.find(t => t.name === selectedTopic)?.info?.content || []}
                 onClose={() => setSelectedTopic(null)}
               />
             )}

             <div className="flex justify-between items-center pt-4 border-t border-white/10">
               <span className="text-sm text-white/60">Total Duration</span>
               <span className="text-sm text-white/90">{skill.duration}</span>
             </div>
             <div className="flex justify-between items-center">
               <span className="text-sm text-white/60">Total Questions</span>
               <span className="text-sm text-white/90">{skill.questions}</span>
             </div>
           </div>
         </div>
       </div>
     </div>
  );
};