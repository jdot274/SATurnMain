import React, { useState, useRef, useEffect } from 'react';
import { useDevMode } from '../contexts/DevModeContext';
import { cn } from '@/lib/utils';

interface DraggableElementProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const DraggableElement: React.FC<DraggableElementProps> = ({ id, children, className }) => {
  const { isDevMode } = useDevMode();
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const elementStartPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Load saved position from localStorage
    const savedLayouts = localStorage.getItem('saturnLayouts');
    if (savedLayouts) {
      const layouts = JSON.parse(savedLayouts);
      if (layouts[id]) {
        setPosition(layouts[id]);
      }
    }
  }, [id]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isDevMode) return;
    
    e.preventDefault();
    setIsDragging(true);
    
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    elementStartPos.current = position;

    // Add data attribute for layout editor
    if (elementRef.current) {
      elementRef.current.dataset.componentId = id;
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;

    const newPosition = {
      x: elementStartPos.current.x + dx,
      y: elementStartPos.current.y + dy
    };

    setPosition(newPosition);

    // Update localStorage
    const savedLayouts = localStorage.getItem('saturnLayouts');
    const layouts = savedLayouts ? JSON.parse(savedLayouts) : {};
    layouts[id] = newPosition;
    localStorage.setItem('saturnLayouts', JSON.stringify(layouts));
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  useEffect(() => {
    if (isDevMode) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDevMode, isDragging]);

  return (
    <div
      ref={elementRef}
      className={cn(
        className,
        isDevMode && 'cursor-move hover:outline hover:outline-2 hover:outline-blue-500/50',
        isDragging && 'opacity-50'
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isDragging ? 'none' : 'transform 0.2s',
        position: 'relative',
        zIndex: isDragging ? 100 : undefined
      }}
      onMouseDown={handleMouseDown}
      data-component-id={id}
    >
      {children}
    </div>
  );
}

export default DraggableElement;