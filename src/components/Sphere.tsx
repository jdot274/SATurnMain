import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh, DoubleSide } from 'three';
import * as THREE from 'three';
import ErrorBoundary from './ErrorBoundary';

const GridSphere: React.FC = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.003;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y += 0.004;
      glowRef.current.scale.setScalar(1.004 + Math.sin(state.clock.elapsedTime * 2) * 0.05);
    }
  });

  return (
    <group>
      {/* Grid Sphere */}
      <mesh ref={sphereRef} scale={0.63}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshStandardMaterial
          color="#0066ff"
          emissive="#0044ff"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.4}
        opacity={0.35}
        opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Inner Glow */}
      <mesh ref={glowRef} scale={0.63}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial
          color="#0047AB"
          transparent
          opacity={0.025}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#0047AB" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#0047AB" />
      <GridSphere />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.5}
      />
    </>
  );
};

const Sphere: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <Canvas
          gl={{ antialias: true }}
          camera={{ position: [0, 0, 3], fov: 40 }}
          style={{ 
            background: 'transparent',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(250px, 40vh, 400px)',
            height: 'clamp(250px, 40vh, 400px)',
            zIndex: 10
          }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Sphere;