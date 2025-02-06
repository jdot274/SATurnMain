import React from 'react';
import { cn } from '@/lib/utils';

interface InfoHovercardProps {
  title: string;
  content: React.ReactNode;
  className?: string;
}

const InfoHovercard: React.FC<InfoHovercardProps> = ({ title, content, className }) => {
  return (
    <div className={cn(
      "absolute z-50 w-96 p-6 rounded-xl",
      "backdrop-blur-xl bg-white/5 border border-white/10",
      "shadow-[0_8px_32px_rgba(31,38,135,0.37)]",
      "transform-style-preserve-3d rotate-x-12",
      "animate-[modal-pop_0.3s_ease-out_forwards]",
      "invisible group-hover:visible opacity-0 group-hover:opacity-100",
      "transition-all duration-200",
      className
    )}>
      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-200 to-blue-400 
                   bg-clip-text text-transparent mb-4">{title}</h3>
      {content}
    </div>
  );
};

export default InfoHovercard;