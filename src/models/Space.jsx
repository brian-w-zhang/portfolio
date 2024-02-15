import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

import spaceScene from '../assets/3d/milkyway.glb';

const Space = () => {
  const meshRef = useRef();
  const { scene } = useGLTF(spaceScene);

  // Use useFrame to update rotation every frame
  useFrame(() => {
    // Rotate the mesh around the y-axis
    meshRef.current.rotation.y += 0.002; // Adjust the rotation speed as needed
  });

  return (
    <mesh position={[0, 0, 0]} scale={20} ref={meshRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Space;
