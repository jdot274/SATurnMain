import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';
import ErrorBoundary from './ErrorBoundary';

const GlowingSphere: React.FC = () => {
  const coronaRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (coronaRef.current) {
      coronaRef.current.rotation.y -= 0.0005;
      coronaRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.02);
    }
  });

  return (
    <mesh ref={coronaRef} scale={1.1}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial
        color="#1a365d"
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

const SphereCopy: React.FC = () => {
  return (
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
          <GlowingSphere />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
          />
        </Canvas>
      </Suspense>
    </ErrorBoundary>
  );
};

export default SphereCopy;