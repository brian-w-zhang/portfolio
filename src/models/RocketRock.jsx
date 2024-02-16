import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';

import RocketRockScene from '../assets/3d/rocketrock.glb';

const RocketRock = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(RocketRockScene);

  // Use useFrame to update rotation every frame
  useFrame((state, delta) => {
    if (props.mode === 'normal') {
      group.current.rotation.y += delta * 0.2;
    } else {
      group.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <a.group ref={group} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 0]} rotation={[0.238, -0.545, 0.562]} scale={7}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet001_1.geometry}
            material={materials.scene}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet001_2.geometry}
            material={materials.scene}
          />
        </group>
      </group>
    </a.group>
  );
};

export default RocketRock;
