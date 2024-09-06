import React, { useMemo, useRef, useState } from "react";
import { Text3D } from "@react-three/drei";
import { Vector3, MeshPhysicalMaterial, Raycaster } from "three";
import { useFrame } from "@react-three/fiber";
import { rocketPosition } from "./Rocket"; 

function TextCollider({ text, position, url, onCollision }) {
  const groupRef = useRef();
  const [lastRocketPosition, setLastRocketPosition] = useState(new Vector3());
  const raycaster = useMemo(() => new Raycaster(), []);

  const material = useMemo(() => new MeshPhysicalMaterial({
    color: 'black',
    transmission: 0.6,
    opacity: 1,
    metalness: 0.1,
    roughness: 0.1,
    ior: 1.5,
    reflectivity: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    thickness: 0.5,
  }), []);

  useFrame(() => {
    if (groupRef.current) {
      const direction = new Vector3().subVectors(rocketPosition, lastRocketPosition).normalize();
      raycaster.set(lastRocketPosition, direction);
      
      const intersects = raycaster.intersectObjects(groupRef.current.children, true);
      
      if (intersects.length > 0) {
        const distance = lastRocketPosition.distanceTo(rocketPosition);
        if (intersects[0].distance <= distance) {
          onCollision(url);
        }
      }
      
      setLastRocketPosition(rocketPosition.clone());
    }
  });

  return (
    <group position={position} ref={groupRef}>
      {text.split("").map((letter, index) => (
        <Text3D
          key={index}
          font="/test-font.json"
          position={[index * 0.5, 0, 0]}
          size={0.5}
          height={0.2}
          curveSegments={32}
          bevelEnabled
          bevelThickness={0.03}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          material={material}
        >
          {letter}
        </Text3D>
      ))}
    </group>
  );
}

export default TextCollider;