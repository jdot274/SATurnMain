import React from 'react';
import { Code, Save, RotateCcw } from 'lucide-react';
import { useDevMode } from '../contexts/DevModeContext';
import { useLayout } from '../contexts/LayoutContext';

const DevModeControls: React.FC = () => {
  const { isDevMode, toggleDevMode } = useDevMode();
  const { saveLayouts, restoreLayouts } = useLayout();

  const handleSave = async () => {
    await saveLayouts();
    // Here you would typically trigger a deployment
  };

  return (
    <div className="fixed top-24 right-8 z-50 flex items-center gap-2">
      <button
        onClick={toggleDevMode}
        className="p-2 bg-white/5 border border-white/10 rounded-lg
                 hover:bg-white/10 transition-colors"
      >
        <Code className={`w-5 h-5 ${isDevMode ? 'text-green-400' : 'text-white/60'}`} />
      </button>
      
      {isDevMode && (
        <>
        <button
          onClick={restoreLayouts}
          className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg
                   border border-blue-500/30 hover:bg-blue-500/30
                   transition-colors flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Restore Layout</span>
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg
                   border border-green-500/30 hover:bg-green-500/30
                   transition-colors flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Layout</span>
        </button>
        </>
      )}
    </div>
  );
}

export default DevModeControls;