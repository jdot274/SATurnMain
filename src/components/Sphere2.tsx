import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import ErrorBoundary from './ErrorBoundary';

const GridSphere: React.FC = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const raysRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.001;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y += 0.002;
      glowRef.current.scale.setScalar(1.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05);
    }
    if (raysRef.current) {
      raysRef.current.rotation.z += 0.001;
      raysRef.current.scale.setScalar(1.2 + Math.sin(state.clock.elapsedTime) * 0.1);
    }
  });

  return (
    <group>
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#0066ff"
          emissive="#0044ff"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={glowRef}>
        <sphereGeometry args={[0.98, 32, 32]} />
        <meshBasicMaterial
          color="#00aaff"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={raysRef}>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial
          color="#0088ff"
          transparent
          opacity={0.1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#0088ff" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#0044ff" />
      <GridSphere />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const Sphere2: React.FC = () => {
  return (
    <div className="relative w-[800px] h-[800px] max-w-[100vw] transform-gpu scale-75 sm:scale-90 md:scale-100">
      <ErrorBoundary>
        <Suspense fallback={null}>
          <Canvas
            gl={{ antialias: true }}
            camera={{ position: [0, 0, 4], fov: 45 }}
            style={{ background: 'transparent' }}
          >
            <Scene />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Sphere2;