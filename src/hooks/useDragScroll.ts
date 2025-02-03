import { useCallback, useRef } from 'react';

export const useDragScroll = () => {
  const isDragging = useRef(false);
  const startY = useRef(0);
  const scrollTop = useRef(0);
  const lastY = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef<number>();

  const onMouseDown = useCallback((e: React.MouseEvent | TouchEvent) => {
    // Only enable drag scroll on desktop with left mouse button
    if ('button' in e && e.button !== 0) return;
    
    // Get the scrollable element
    const scrollElement = (e.target as HTMLElement).closest('#root > div > div');
    if (!scrollElement) return;

    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    isDragging.current = true;
    startY.current = clientY;
    lastY.current = clientY;
    scrollTop.current = scrollElement.scrollTop;
    velocity.current = 0;

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      
      const clientY = 'touches' in e ? (e as TouchEvent).touches[0].clientY : (e as MouseEvent).clientY;
      const delta = startY.current - clientY;
      const currentTime = Date.now();
      
      // Calculate velocity for momentum scrolling
      velocity.current = (lastY.current - clientY) / 16; // 16ms is roughly one frame
      lastY.current = clientY;

      scrollElement.scrollTop = scrollTop.current + delta;
    };

    const onMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;

      // Apply momentum scrolling
      const momentum = () => {
        if (Math.abs(velocity.current) > 0.1) {
          scrollElement.scrollTop += velocity.current * 16;
          velocity.current *= 0.95; // Decay factor
          animationFrame.current = requestAnimationFrame(momentum);
        }
      };
      momentum();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('touchend', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: false });
    document.addEventListener('touchmove', onMouseMove, { passive: false });
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchend', onMouseUp);
  }, []);

  return { onMouseDown };
};