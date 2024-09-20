import React, { useRef, useMemo, useState } from "react";
import { Text3D } from "@react-three/drei";
import { MeshPhysicalMaterial, Box3 } from "three";
import { useFrame } from "@react-three/fiber";
import { rocketPosition } from "./Rocket";

function TextCollider({ text, position, route, onCollision }) {
  const groupRef = useRef();
  const boundingBox = useRef(new Box3());
  const [hovered, setHovered] = useState(false);

  const material = useMemo(() => new MeshPhysicalMaterial({
    color: hovered ? '#05184d' : 'black',
    emissive: hovered ? '#05184d' : 'black',
    emissiveIntensity: hovered ? 0.5 : 0,
    transmission: 0.6,
    opacity: 1,
    metalness: 0.1,
    roughness: 0.1,
    ior: 1.5,
    reflectivity: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    thickness: 0.5,
  }), [hovered]);

  useFrame(() => {
    if (groupRef.current) {
      boundingBox.current.setFromObject(groupRef.current);
      
      if (boundingBox.current.containsPoint(rocketPosition)) {
        onCollision(route);
      }
    }
  });

  const handlePointerOver = (e) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
    setHovered(true);
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    document.body.style.cursor = 'auto';
    setHovered(false);
  };

  return (
    <group position={position} ref={groupRef}>
      {text.split("").map((letter, index) => (
        <Text3D
          key={index}
          font="/test-font.json"
          position={[index * 0.3, 0, 0]}
          size={0.3}
          height={0.15}
          curveSegments={32}
          bevelEnabled
          bevelThickness={0.03}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          material={material}
          onClick={() => onCollision(route)}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          {letter}
        </Text3D>
      ))}
    </group>
  );
}

export default TextCollider;