import React from 'react';
import { cn } from '@/lib/utils';

interface ShimmerCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const ShimmerCard: React.FC<ShimmerCardProps> = ({
  title,
  children,
  className
}) => {
  return (
    <div className={cn(
      "relative group perspective-1000",
      className
    )}>
      {/* Animated shimmer background */}
      <div className="absolute -inset-[2px] rounded-2xl opacity-75 group-hover:opacity-100
                   bg-gradient-to-r from-white/0 via-white/40 to-white/0
                   animate-[gradient-x_2s_linear_infinite] blur-lg" />

      {/* Main card container */}
      <div className="relative backdrop-blur-xl bg-blue-950/50 rounded-xl h-full
                   border border-white/20 overflow-hidden
                   transform-gpu group-hover:scale-[1.02] transition-transform duration-500">
        {/* Moving outline effect */}
        <div className="absolute inset-0 rounded-xl">
          {/* Top border */}
          <div className="absolute -top-[1px] left-0 right-0 h-[1px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent
                         animate-[gradient-x_1.5s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent
                         animate-[gradient-x_1.5s_linear_infinite_reverse] delay-[750ms]" />
          </div>

          {/* Bottom border */}
          <div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent
                         animate-[gradient-x_1.5s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent
                         animate-[gradient-x_1.5s_linear_infinite_reverse] delay-[750ms]" />
          </div>

          {/* Left border */}
          <div className="absolute top-0 -left-[1px] bottom-0 w-[1px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400 to-transparent
                         animate-[gradient-y_1.5s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-transparent
                         animate-[gradient-y_1.5s_linear_infinite_reverse] delay-[750ms]" />
          </div>

          {/* Right border */}
          <div className="absolute top-0 -right-[1px] bottom-0 w-[1px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400 to-transparent
                         animate-[gradient-y_1.5s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-transparent
                         animate-[gradient-y_1.5s_linear_infinite_reverse] delay-[750ms]" />
          </div>
        </div>

        {/* Inner shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0
                     animate-[gradient-x_3s_linear_infinite] opacity-0 group-hover:opacity-100
                     transition-opacity duration-500" />

        {/* Content */}
        <div className="relative p-6">
          {title && (
            <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 
                        bg-clip-text text-transparent mb-4">
              {title}
            </h3>
          )}
          {children}
        </div>

        {/* Corner highlights */}
        <div className="absolute top-0 left-0 w-16 h-16">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-16 h-16">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 w-16 h-16">
          <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16">
          <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;