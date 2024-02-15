import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

import shipScene from '../assets/3d/ship.glb';

const Ship = () => {
  const meshRef = useRef();
  const { scene, animations } = useGLTF(shipScene);

  return (
    <mesh
      position={[0, -0.4, 3]}
      rotation={[0, -0.6, 0]}
      scale={0.0026}
      ref={meshRef}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Ship;
