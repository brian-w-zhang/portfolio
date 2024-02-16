import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import shipScene from '../assets/3d/ship.glb';

const Ship = (props) => {
  const meshRef = useRef();
  const { scene, animations } = useGLTF(shipScene);
  const { actions } = useAnimations(animations, meshRef);

  // Play default animation
  useEffect(() => {
    actions['Take 001'].play();
  }, [actions]);

  // Define variables for orbiting effect
  const radius = 4; // Radius of orbit

  // comment line out later
  const speed2 = -(2 * Math.PI) / 10; // Speed of orbit

  // enable for normal orbit, disable/comment out for dialogue
  useFrame((state, delta) => {
    if (props.mode === 'normal') {
      // Update position to orbit around origin
      const time = state.clock.getElapsedTime();
      meshRef.current.position.x = Math.cos(time * speed2) * radius;
      meshRef.current.position.z = Math.sin(time * speed2) * radius;
      meshRef.current.position.y = -0.5;

      // Calculate rotation angle based on orbital period
      const rotationAngle = time * Math.abs(speed2);
      // Set rotation around its own center
      meshRef.current.rotation.y = rotationAngle + 1.6;
    } else {
      meshRef.current.position.x = -0.4;
      meshRef.current.position.z = 4;
      meshRef.current.position.y = -0.5;
      meshRef.current.rotation.y = 0;
    }
  });

  return (
    <>
      <mesh scale={0.003} position={[-0.4, -0.5, 4]} ref={meshRef}>
        <primitive object={scene} />
      </mesh>
    </>
  );
};

export default Ship;
