'use client';

import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import { Group } from 'three';

const StarBackground = (props: any) => {
  const ref = useRef<Group>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000), { radius: 1.2 }) // 6000 % 3 === 0
  );

  useFrame((state, delta) => {
    console.log('stars render');
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <pointsMaterial
        color="#ffffff"
        size={0.7}
        sizeAttenuation
        transparent
        opacity={0.9}
        />

      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full fixed inset-0 z-[-10] pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
