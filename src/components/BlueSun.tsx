import React, { useEffect, useRef } from 'react';

const BlueSun: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full h-full">
      <spline-viewer
        style={{ opacity: 0.6 }}
        loading="lazy"
        url="https://prod.spline.design/UkwIN5rkFhwc6eNe/scene.splinecode"
        class="w-full h-full"
      />
    </div>
  );
};

export default BlueSun;
