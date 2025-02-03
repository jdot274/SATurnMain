import React from 'react';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Layout {
  [key: string]: {
    x: number;
    y: number;
    width?: number;
    height?: number;
  };
}

interface LayoutContextType {
  layouts: Layout;
  initialLayouts: Layout;
  savedLayouts: Layout;
  updateLayout: (id: string, position: { x: number; y: number }) => void;
  saveLayouts: () => void;
  restoreLayouts: () => void;
  isDragging: boolean;
  setIsDragging: (dragging: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [layouts, setLayouts] = useState<Layout>({});
  const [initialLayouts, setInitialLayouts] = useState<Layout>({});
  const [savedLayouts, setSavedLayouts] = useState<Layout>({});
  const [isDragging, setIsDragging] = useState(false);

  const updateLayout = (id: string, position: { x: number; y: number }) => {
    if (!initialLayouts[id]) {
      setInitialLayouts(prev => ({
        ...prev,
        [id]: { ...position }
      }));
    }
    setLayouts(prev => ({
      ...prev,
      [id]: { ...prev[id], ...position }
    }));
  };

  const restoreLayouts = () => {
    setLayouts(initialLayouts);
  };

  const saveLayouts = async () => {
    setSavedLayouts(layouts);
    localStorage.setItem('saturnLayouts', JSON.stringify(layouts));
  };

  // Load saved layouts on mount
  useEffect(() => {
    const savedLayoutsStr = localStorage.getItem('saturnLayouts');
    if (savedLayoutsStr) {
      const saved = JSON.parse(savedLayoutsStr);
      setSavedLayouts(saved);
      setLayouts(saved);
    }
  }, []);

  return (
    <LayoutContext.Provider value={{ 
      layouts, 
      initialLayouts,
      savedLayouts,
      updateLayout, 
      saveLayouts,
      restoreLayouts,
      isDragging,
      setIsDragging
    }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}