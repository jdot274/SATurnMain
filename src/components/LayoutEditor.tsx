import React, { useState, useRef } from 'react';
import { Move, Save, RotateCcw, History } from 'lucide-react';
import { useLayout } from '../contexts/LayoutContext';
import { cn } from '@/lib/utils';

interface LayoutVersion {
  timestamp: number;
  layouts: Record<string, { x: number; y: number }>;
}

export const LayoutEditor: React.FC = () => {
  const { layouts, updateLayout, saveLayouts, restoreLayouts } = useLayout();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [versions, setVersions] = useState<LayoutVersion[]>([]);
  const [showVersions, setShowVersions] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const elementStartPos = useRef({ x: 0, y: 0 });

  const handleStartEdit = () => {
    setIsEditing(true);
    document.body.style.cursor = 'crosshair';
  };

  const handleComponentClick = (e: MouseEvent) => {
    if (!isEditing) return;

    e.preventDefault();
    e.stopPropagation();

    // Find the nearest parent with a data-component-id
    let target = e.target as HTMLElement;
    while (target && !target.dataset.componentId) {
      target = target.parentElement as HTMLElement;
    }

    if (target?.dataset.componentId) {
      setSelectedComponent(target.dataset.componentId);
      document.body.style.cursor = 'move';
      
      // Store initial positions for dragging
      dragStartPos.current = { x: e.clientX, y: e.clientY };
      const rect = target.getBoundingClientRect();
      elementStartPos.current = {
        x: rect.left,
        y: rect.top
      };

      // Add highlight outline
      target.style.outline = '2px solid #3b82f6';
      target.style.outlineOffset = '2px';
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!selectedComponent || !isEditing) return;

    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;

    const newPosition = {
      x: elementStartPos.current.x + dx,
      y: elementStartPos.current.y + dy
    };

    updateLayout(selectedComponent, newPosition);

    // Update visual position of element
    const element = document.querySelector(`[data-component-id="${selectedComponent}"]`);
    if (element) {
      (element as HTMLElement).style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    }
  };

  const handleMouseUp = () => {
    if (selectedComponent) {
      // Save current state to versions
      setVersions(prev => [...prev, {
        timestamp: Date.now(),
        layouts: { ...layouts }
      }]);
    }
    setSelectedComponent(null);
    document.body.style.cursor = 'default';
  };

  const handleSave = async () => {
    await saveLayouts();
    setIsEditing(false);
    setSelectedComponent(null);
    document.body.style.cursor = 'default';
    
    // Remove all highlight outlines
    document.querySelectorAll('[data-component-id]').forEach(el => {
      (el as HTMLElement).style.outline = '';
      (el as HTMLElement).style.outlineOffset = '';
    });
  };

  const handleUndo = () => {
    if (versions.length > 0) {
      const previousVersion = versions[versions.length - 2];
      if (previousVersion) {
        Object.entries(previousVersion.layouts).forEach(([id, position]) => {
          updateLayout(id, position);
        });
        setVersions(prev => prev.slice(0, -1));
      } else {
        restoreLayouts();
        setVersions([]);
      }
    } else {
      restoreLayouts();
    }
  };

  const handleRevertToVersion = (version: LayoutVersion) => {
    Object.entries(version.layouts).forEach(([id, position]) => {
      updateLayout(id, position);
    });
    setVersions(prev => prev.slice(0, prev.findIndex(v => v.timestamp === version.timestamp) + 1));
    setShowVersions(false);
  };

  React.useEffect(() => {
    if (isEditing) {
      window.addEventListener('click', handleComponentClick, true);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('click', handleComponentClick, true);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isEditing, selectedComponent]);

  return (
    <>
      {/* Edit Mode Toggle */}
      <button
        onClick={handleStartEdit}
        className={cn("fixed bottom-4 right-4 z-[200] p-2 rounded-lg backdrop-blur-xl border transition-colors",
          isEditing
            ? "bg-blue-500/20 border-blue-500/30 text-blue-400"
            : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
        )}
        title="Edit Layout"
      >
        <Move className="w-5 h-5" />
      </button>

      {/* Save Button */}
      {isEditing && (
        <button
          onClick={handleSave}
          className="fixed bottom-4 right-16 z-[200] p-2 rounded-lg backdrop-blur-xl bg-green-500/20 border border-green-500/30 
                   text-green-400 hover:bg-green-500/30 transition-colors"
          title="Save Layout"
        >
          <Save className="w-5 h-5" />
        </button>
      )}

      {/* Undo Button */}
      {isEditing && versions.length > 0 && (
        <button
          onClick={handleUndo}
          className="fixed bottom-4 right-28 z-[200] p-2 rounded-lg backdrop-blur-xl bg-yellow-500/20 border border-yellow-500/30 
                   text-yellow-400 hover:bg-yellow-500/30 transition-colors"
          title="Undo Last Change"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      )}

      {/* Version History */}
      {isEditing && versions.length > 0 && (
        <div className="fixed bottom-4 right-40 z-[200]">
          <button
            onClick={() => setShowVersions(!showVersions)}
            className="p-2 rounded-lg backdrop-blur-xl bg-purple-500/20 border border-purple-500/30 
                     text-purple-400 hover:bg-purple-500/30 transition-colors"
            title="Version History"
          >
            <History className="w-5 h-5" />
          </button>

          {showVersions && (
            <div className="absolute bottom-full right-0 mb-2 w-64 backdrop-blur-xl bg-white/5 
                         rounded-lg border border-white/10 overflow-hidden">
              <div className="max-h-[300px] overflow-y-auto">
                {versions.map((version, index) => (
                  <button
                    key={version.timestamp}
                    onClick={() => handleRevertToVersion(version)}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-white/5 transition-colors
                             flex items-center justify-between"
                  >
                    <span className="text-white/60">Version {index + 1}</span>
                    <span className="text-white/40 text-xs">
                      {new Date(version.timestamp).toLocaleTimeString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};