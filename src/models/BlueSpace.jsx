import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

import blueSpaceScene from '../assets/3d/bluespace.glb';

const BlueSpace = (props) => {
  const meshRef = useRef();
  const { scene } = useGLTF(blueSpaceScene);

  // Use useFrame to update rotation every frame
  useFrame(() => {
    if (props.mode == 'normal') {
      meshRef.current.rotation.y += 0.002;
    } else {
      meshRef.current.rotation.y -= 0.006;
    }
  });

  return (
    <mesh position={[0, 0, 0]} scale={20} ref={meshRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default BlueSpace;
