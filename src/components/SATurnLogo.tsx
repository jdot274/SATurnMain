import React from 'react';
import { useNavigate } from 'react-router-dom';

const SATurnLogo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/')}
      className="flex items-center gap-4 cursor-pointer group fixed top-4 left-4 z-[100] scale-90">
      <div className="w-12 h-12 relative bg-gradient-to-br from-blue-600 to-blue-400 rounded-full">
        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl scale-150"></div>
        <div className="absolute inset-4 rounded-full blur-md bg-blue-800/30 animate-pulse"></div>
      </div>

      <span className="text-xl font-bold bg-clip-text text-transparent 
                     bg-gradient-to-r from-blue-600 to-blue-400
                     group-hover:from-blue-500 group-hover:to-blue-300
                     transition-all duration-300">
        SATurn
      </span>
    </div>
  );
};

export default SATurnLogo;