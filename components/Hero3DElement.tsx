import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const BlinkingDot = ({ position, color }: { position: THREE.Vector3; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mountedTime] = useState(Date.now());

  useFrame(() => {
    if (!meshRef.current) return;
    const age = Date.now() - mountedTime;
    const life = 1000; // 1 second life

    if (age < life) {
      const progress = age / life;
      // Sine wave for smooth pop-in and pop-out: 0 -> 1 -> 0
      const scale = Math.sin(progress * Math.PI);
      meshRef.current.scale.setScalar(scale);
    } else {
      meshRef.current.scale.setScalar(0);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.02, 16, 16]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
};

const AnimatedSphere = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [activeDots, setActiveDots] = useState<{ index: number; id: number; color: string }[]>([]);

  // Create geometry once
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1, 4), []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  useEffect(() => {
    const vertexCount = geometry.attributes.position.count;
    let timeoutId: NodeJS.Timeout;
    const colors = ["#8552F6", "#60ECFC"];

    const spawnDot = () => {
      const randomIndex = Math.floor(Math.random() * vertexCount);
      const id = Date.now() + Math.random();
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      setActiveDots(prev => [...prev, { index: randomIndex, id, color: randomColor }]);

      // Remove after 1s
      setTimeout(() => {
        setActiveDots(prev => prev.filter(d => d.id !== id));
      }, 1000);

      // Schedule next spawn
      // Random interval between 100ms and 500ms for "busy" network feel
      const nextDelay = Math.random() * 400 + 100; 
      timeoutId = setTimeout(spawnDot, nextDelay);
    };

    spawnDot();

    return () => clearTimeout(timeoutId);
  }, [geometry]);

  const getPosition = (index: number) => {
    const pos = new THREE.Vector3();
    pos.fromBufferAttribute(geometry.attributes.position as THREE.BufferAttribute, index);
    return pos;
  };

  return (
    <group ref={groupRef} scale={4.5}>
      {/* Wireframe Sphere */}
      <mesh geometry={geometry}>
        <meshStandardMaterial
          color="#8552F6"
          wireframe
          transparent
          opacity={0.15}
          roughness={0}
          metalness={0.5}
        />
      </mesh>

      {/* Active Dots */}
      {activeDots.map(dot => (
        <BlinkingDot key={dot.id} position={getPosition(dot.index)} color={dot.color} />
      ))}
    </group>
  );
};

const Hero3DElement: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <Canvas 
        camera={{ position: [0, 0, 5] }} 
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default Hero3DElement;
