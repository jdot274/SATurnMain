import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ZoomContextType {
  zoom: number;
  setZoom: (zoom: number) => void;
  saveZoom: () => void;
}

const ZoomContext = createContext<ZoomContextType | undefined>(undefined);

export function ZoomProvider({ children }: { children: ReactNode }) {
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    // Load saved zoom level for current page
    const pathname = window.location.pathname;
    const savedZoom = localStorage.getItem(`zoom-${pathname}`);
    if (savedZoom) {
      setZoom(Number(savedZoom));
      applyZoom(Number(savedZoom));
    }
  }, []);

  const applyZoom = (zoomLevel: number) => {
    const root = document.getElementById('root');
    if (root) {
      root.style.transform = `scale(${zoomLevel / 100})`;
      root.style.transformOrigin = 'center top';
    }
  };

  const saveZoom = () => {
    const pathname = window.location.pathname;
    localStorage.setItem(`zoom-${pathname}`, zoom.toString());
    applyZoom(zoom);
  };

  return (
    <ZoomContext.Provider value={{ zoom, setZoom, saveZoom }}>
      {children}
    </ZoomContext.Provider>
  );
}

export function useZoom() {
  const context = useContext(ZoomContext);
  if (context === undefined) {
    throw new Error('useZoom must be used within a ZoomProvider');
  }
  return context;
}