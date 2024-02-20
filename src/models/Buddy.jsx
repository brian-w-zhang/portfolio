// this model is for the contact page, lowest priority for now

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

import buddyScene from '../assets/3d/space_buddy.glb';

const Buddy = () => {
  const meshRef = useRef();
  const { scene } = useGLTF(buddyScene);

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

export default Buddy;
