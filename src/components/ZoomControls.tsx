import React from 'react';
import { ZoomIn, ZoomOut, Save } from 'lucide-react';
import { useZoom } from '../contexts/ZoomContext';

interface ZoomControlsProps {
  className?: string;
}

const ZoomControls: React.FC<ZoomControlsProps> = ({ className }) => {
  const { zoom, setZoom, saveZoom } = useZoom();

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 200));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 50));

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={handleZoomOut}
        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        title="Zoom Out"
      >
        <ZoomOut className="w-4 h-4 text-white/60" />
      </button>
      
      <span className="text-sm text-white/60 min-w-[3ch] text-center">{zoom}%</span>
      
      <button
        onClick={handleZoomIn}
        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        title="Zoom In"
      >
        <ZoomIn className="w-4 h-4 text-white/60" />
      </button>

      <button
        onClick={saveZoom}
        className="p-2 bg-blue-500/20 border border-blue-500/30 rounded-lg
                 text-blue-400 hover:bg-blue-500/30 transition-colors ml-2
                 flex items-center gap-2"
        title="Save Zoom Level"
      >
        <Save className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ZoomControls;