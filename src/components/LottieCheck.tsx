import React from 'react';
import { CheckCircle } from 'lucide-react';

const LottieCheck: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <CheckCircle className="w-16 h-16 text-green-400 animate-pulse" />
    </div>
  );
};

export default LottieCheck;