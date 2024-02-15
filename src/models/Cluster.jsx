import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

import clusterScene from '../assets/3d/starcluster.glb';

const Cluster = () => {
  const meshRef = useRef();
  const { scene } = useGLTF(clusterScene);

  // Use useFrame to update rotation every frame
  useFrame(() => {
    // Rotate the mesh around the y-axis
    meshRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
  });

  return (
    <mesh position={[0, -3, 0]} scale={3} ref={meshRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Cluster;
