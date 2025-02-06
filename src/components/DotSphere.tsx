import React, { useRef } from 'react';
import { Points as ThreePoints, Mesh, Color } from 'three';
import { useFrame } from '@react-three/fiber';
import { BufferGeometry, Float32BufferAttribute, AdditiveBlending, DoubleSide } from 'three';

const DotSphere: React.FC = () => {
  const pointsRef = useRef<ThreePoints>(null);
  const coronaRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    if (coronaRef.current) {
      coronaRef.current.rotation.y -= 0.0005;
      coronaRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.02);
    }
  });

  // Create dot matrix sphere
  const geometry = new BufferGeometry();
  const positions = [];
  const colors = [];
  const radius = 1;
  
  for (let i = 0; i < 2500; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    positions.push(x, y, z);
    
    // Add color variation
    const color = new Color();
    color.setHSL(0.6 + Math.random() * 0.05, 0.8, 0.7 + Math.random() * 0.2);
    colors.push(color.r, color.g, color.b);
  }
  
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));

  return (
    <group position={[0, 0, 0]}>
      {/* Core sphere points */}
      <points ref={pointsRef} geometry={geometry} renderOrder={1}>
        <pointsMaterial
          size={0.015}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </points>
      
      {/* White inner corona */}
      <mesh ref={coronaRef} scale={1.1} renderOrder={2}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#4488ff"
          transparent
          opacity={0.15}
          blending={AdditiveBlending}
          depthWrite={false}
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default DotSphere;