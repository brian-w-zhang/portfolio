// replace with a different envmap.jpg texture that is more dark and space-like

import { useTexture } from "@react-three/drei";
import { BackSide } from "three";

export function SphereEnv() {
  const map = useTexture("textures/envmap.jpg");

  return <mesh>
    <sphereGeometry args={[60, 50, 50]} />
    <meshBasicMaterial 
      side={BackSide}
      map={map}
    />
  </mesh>
}