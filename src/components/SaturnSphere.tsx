import React, { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

const SaturnSphere: React.FC = () => {
  const sphereRef = useRef<Mesh>(null);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]} renderOrder={1}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color="#0039a6"
        metalness={0.8}
        roughness={0.2}
        emissive="#001f3f"
        emissiveIntensity={0.4}
        transparent={true}
        opacity={0.9}
      />
    </mesh>
  );
};

export default SaturnSphere;