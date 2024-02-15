import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

import starScene from '../assets/3d/starbasic.glb';

const Stars = () => {
  const meshRef = useRef();
  const { scene } = useGLTF(starScene);

  // Use useFrame to update rotation every frame
  useFrame(() => {
    // Rotate the mesh around the y-axis
    meshRef.current.rotation.y += 0.002; // Adjust the rotation speed as needed
  });

  return (
    <mesh position={[0, 0, 0]} scale={1} ref={meshRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Stars;
