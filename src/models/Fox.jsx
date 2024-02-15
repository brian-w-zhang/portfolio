import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

import foxScene from '../assets/3d/floating_fox.glb';

const Fox = () => {
  const meshRef = useRef();
  const { scene, animations } = useGLTF(foxScene);

  return (
    <mesh
      position={[0, -0.2, 2]}
      rotation={[0.3, 0, 0]}
      scale={0.15}
      ref={meshRef}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Fox;
