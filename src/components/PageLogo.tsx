import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import DotSphere from './DotSphere';
import ErrorBoundary from './ErrorBoundary';

const PageLogo: React.FC = () => {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = () => {
    if (window.location.pathname === '/') {
      scrollToTop();
    } else {
      navigate('/');
    }
  };

  return (
    <div className="absolute left-[5%] top-[5%] flex items-center gap-1
                    cursor-pointer group z-[100]" onClick={handleClick}>
      <div className="w-12 h-12 relative">
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Canvas
              gl={{ antialias: true }}
              camera={{ position: [0, 0, 3], fov: 40 }}
              style={{ 
                background: 'transparent',
                width: '100%',
                height: '100%'
              }}
            >
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={2} color="#0047AB" />
              <pointLight position={[-10, -10, -10]} intensity={2} color="#0047AB" />
              <DotSphere />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={1.5}
              />
            </Canvas>
          </Suspense>
        </ErrorBoundary>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/20 blur-xl"></div>
      </div>

      <span className="text-base font-bold bg-clip-text text-transparent 
                    bg-gradient-to-r from-blue-400 to-blue-200
                    group-hover:from-blue-300 group-hover:to-blue-100
                    transition-all duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
        SATurn
      </span>
    </div>
  );
};

export default PageLogo;