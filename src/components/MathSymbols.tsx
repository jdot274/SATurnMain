import React, { useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const MathSymbols = () => {
  const ringRef = useRef<Group>(null);
  const mathSymbols = Array(32).fill('').map((_, i) => {
    const symbols = ['∑', '∫', '√', 'π', '∞', '±', '×', '÷', 'θ', 'Δ', 'Ω', 'μ', '∂', '∇', '∈', '∉'];
    return symbols[i % symbols.length];
  });
  
  const radius = 1.2;
  const tilt = Math.PI * 0.15; // Reduced tilt for better front visibility

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.y += 0.001;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.03;
    }
  });

  return (
    <group ref={ringRef} rotation={[tilt, 0, 0]}>
      {mathSymbols.map((symbol, idx) => {
        const angle = (idx / mathSymbols.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = 0;
        const z = Math.sin(angle) * radius;
        
        return (
          <Text
            key={`symbol-${idx}`}
            position={[x, y, z]}
            rotation={[0, -angle, 0]}
            fontSize={0.15}
            color="#60a5fa"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Inter-Bold.woff"
            material-transparent={true}
            material-opacity={0.9}
            renderOrder={2}
          >
            {symbol}
          </Text>
        );
      })}
    </group>
  );
};

export default MathSymbols;