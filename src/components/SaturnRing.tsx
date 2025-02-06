import React, { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

const SaturnRing: React.FC = () => {
  const ringRef = useRef<Mesh>(null);

  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.x = -0.5;
      ringRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, 0]}>
      <torusGeometry args={[1.2, 0.15, 2, 48]} />
      <meshStandardMaterial
        color="#4488ff"
        metalness={0.8}
        roughness={0.1}
        opacity={0.8}
        transparent
      />
    </mesh>
  );
}

export default SaturnRing;