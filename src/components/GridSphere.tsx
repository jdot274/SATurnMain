import React, { useRef } from 'react';
import { Points, Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { BufferGeometry, Float32BufferAttribute } from 'three';

const GridSphere: React.FC = () => {
  const pointsRef = useRef<Points>(null);
  const coronaRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
    if (coronaRef.current) {
      coronaRef.current.rotation.y -= 0.0005;
      coronaRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.02);
    }
  });

  // Create dot matrix sphere
  const geometry = new BufferGeometry();
  const positions = [];
  const radius = 1;
  
  for (let i = 0; i < 2500; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    positions.push(x, y, z);
  }
  
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));

  return (
    <>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          size={0.025}
          color="#4488ff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
      
      {/* Corona layer */}
      <mesh ref={coronaRef} scale={1.1}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#1a365d"
          transparent
          opacity={0.3}
        />
      </mesh>
    </>
  );
};

export default GridSphere;