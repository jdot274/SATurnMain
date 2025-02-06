import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

const SplineViewer: React.FC = () => {
  useEffect(() => {
    const loadSplineViewer = async () => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@splinetool/viewer@0.9.506/build/spline-viewer.js';
      script.async = true;
      document.body.appendChild(script);
    };

    loadSplineViewer();
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <spline-viewer
        loading-anim
        url="https://prod.spline.design/UkwIN5rkFhwc6eNe/scene.splinecode"
        class="w-full h-full"
      />
    </div>
  );
};

export default SplineViewer;