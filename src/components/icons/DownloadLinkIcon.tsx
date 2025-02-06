import React from 'react';
import { Download } from 'lucide-react';

interface DownloadLinkIconProps {
  className?: string;
  size?: number;
}

export const DownloadLinkIcon: React.FC<DownloadLinkIconProps> = ({ 
  className = '',
  size = 20 
}) => {
  return (
    <div className={`inline-flex items-center justify-center p-2 rounded-lg 
                   bg-blue-500/20 border border-blue-500/30 
                   text-blue-400 hover:bg-blue-500/30 
                   transition-all duration-300 cursor-pointer
                   hover:scale-105 active:scale-95 ${className}`}>
      <Download size={size} />
    </div>
  );
};