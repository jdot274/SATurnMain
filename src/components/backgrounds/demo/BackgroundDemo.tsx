import React, { useState } from 'react';
import { Download, BookOpen, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SATExplainedModal from '../../SATExplainedModal';
import { Button } from '@/components/ui/button';
import { AnimatedBackground } from '../../AnimatedBackground';
import PageLogo from '@/components/PageLogo';

export const BackgroundDemo: React.FC = () => {
  const navigate = useNavigate();
  const [showSATInfo, setShowSATInfo] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <PageLogo />
      <AnimatedBackground />
      
      <main className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {showSATInfo && (
            <SATExplainedModal onClose={() => setShowSATInfo(false)} />
          )}
        </div>
      </main>
    </div>
  );
};