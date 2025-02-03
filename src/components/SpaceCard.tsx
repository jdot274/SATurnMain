import React from 'react';
import { cn } from '@/lib/utils';

interface SpaceCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SpaceCard: React.FC<SpaceCardProps> = ({
  title,
  children,
  className
}) => {
  return (
    <div className={cn(
      "relative group perspective-1000 h-auto",
      className
    )}>
      {/* Animated gradient background */}
      <div className="absolute -inset-[2px] rounded-[24px] opacity-75 group-hover:opacity-100
                   bg-gradient-to-r from-white/0 via-white/30 to-white/0
                   animate-[gradient-x_3s_linear_infinite] blur-lg" />

      {/* Main card container */}
      <div className="relative backdrop-blur-xl bg-[#1a1a2e]/80 rounded-[22px] h-full
                   border border-white/20 overflow-hidden
                   transform-gpu group-hover:scale-[1.02] transition-transform duration-500">
        {/* Moving outline effect */}
        <div className="absolute inset-0 rounded-[22px]">
          {/* Top border */}
          <div className="absolute -top-[1px] left-0 right-0 h-[1px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent
                         animate-[gradient-x_2s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent
                         animate-[gradient-x_2s_linear_infinite_reverse] delay-1000" />
          </div>

          {/* Bottom border */}
          <div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent
                         animate-[gradient-x_2s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent
                         animate-[gradient-x_2s_linear_infinite_reverse] delay-1000" />
          </div>

          {/* Left border */}
          <div className="absolute top-0 -left-[1px] bottom-0 w-[1px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400 to-transparent
                         animate-[gradient-y_2s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent
                         animate-[gradient-y_2s_linear_infinite_reverse] delay-1000" />
          </div>

          {/* Right border */}
          <div className="absolute top-0 -right-[1px] bottom-0 w-[1px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400 to-transparent
                         animate-[gradient-y_2s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent
                         animate-[gradient-y_2s_linear_infinite_reverse] delay-1000" />
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-3">
            {title}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;