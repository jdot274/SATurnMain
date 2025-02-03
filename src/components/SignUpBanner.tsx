import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const SignUpBanner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-4 right-8 z-50">
      <button
        onClick={() => navigate('/register-exam')}
        className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500
                   rounded-xl text-white font-medium shadow-lg
                   hover:from-green-400 hover:to-emerald-400
                   transition-all duration-300 transform hover:scale-105
                   flex items-center gap-2 group"
      >
        <Calendar className="w-5 h-5 group-hover:animate-bounce" />
        <span>Register For Your SAT Exam</span>
      </button>
    </div>
  );
};

export default SignUpBanner;