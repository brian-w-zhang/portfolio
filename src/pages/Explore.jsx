import React, { Suspense } from "react";
import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";
import Loader from '../components/Loader'; // Import the Loader component


const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
  { name: "jump", keys: ["Space"] }, 
];

function Explore() {
  return (
    <div className="w-full h-screen relative">
      <KeyboardControls map={keyboardMap}>
        <Canvas
          shadows
          camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}
          className="w-full h-full"
          style={{
            touchAction: "none",
          }}
        >
          <Suspense fallback={<Loader />}>
            {/* <color attach="background" args={["#020a1c"]} /> */}
            <Experience />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

export default Explore;