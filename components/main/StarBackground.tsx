'use client';

import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import { Group, MathUtils } from 'three';

const StarBackground = (props: any) => {
  const ref = useRef<Group>(null);
  const materialRef = useRef<any>(null); // Referencia al PointMaterial

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;

      // Twinkle: variamos la opacidad de forma suave
      if (materialRef.current) {
        const time = state.clock.getElapsedTime();
        const flicker = 0.5 + Math.sin(time * 2.0) * 0.3; // entre 0.2 y 0.8
        const smooth = MathUtils.lerp(materialRef.current.opacity, flicker, 0.05);
        materialRef.current.opacity = smooth;
      }
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
          ref={materialRef}
          transparent
          color="#ffffff"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full fixed inset-0 z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
