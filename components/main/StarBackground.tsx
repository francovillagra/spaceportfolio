'use client';

import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import type { Points as ThreePoints } from 'three';

type Props = JSX.IntrinsicElements['points'];

const StarBackground = (props: Props) => {
  const ref = useRef<ThreePoints>(null); // ← esto es suficiente y seguro

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(24000), { radius: 10 }) // era 1.2
  );

  useFrame((_, delta) => {
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
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.015} // Ajustar tamaño estrellas
          sizeAttenuation
          depthWrite={false}
          opacity={0.95} // Ajustar brillo de estrellas
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full fixed inset-0 z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 15], fov: 75 }}> // sin fov 75 y 0,0,3
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
