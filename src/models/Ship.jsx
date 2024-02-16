import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import shipScene from '../assets/3d/ship.glb';

const Ship = () => {
  const meshRef = useRef();
  const { scene, animations } = useGLTF(shipScene);
  const { actions } = useAnimations(animations, meshRef);

  // Play default animation
  useEffect(() => {
    actions['Take 001'].play();
  }, [actions]);

  // Define variables for orbiting effect
  const radius = 4; // Radius of orbit
  const speed = -(2 * Math.PI) / 15; // Speed of orbit

  useFrame((state, delta) => {
    // Update position to orbit around origin
    const time = state.clock.getElapsedTime();
    meshRef.current.position.x = Math.cos(time * speed) * radius;
    meshRef.current.position.z = Math.sin(time * speed) * radius;

    // Calculate rotation angle based on orbital period
    const rotationAngle = time * Math.abs(speed);
    // Set rotation around its own center
    meshRef.current.rotation.y = rotationAngle + 1.6;
  });

  return (
    <>
      <mesh scale={0.003} ref={meshRef}>
        <primitive object={scene} />
      </mesh>
    </>
  );
};

export default Ship;
