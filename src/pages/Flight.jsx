import React, { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import { EffectComposer, HueSaturation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useSpring, animated } from '@react-spring/three';
import { Landscape } from "../components/Landscape";
import { SphereEnv } from "../components/SphereEnv";
import { Rocket } from "../components/Rocket";
import { Targets } from "../components/Targets";
import { MotionBlur } from "../components/MotionBlur";
import BlueSpace from '../models/BlueSpace';
import Loader from '../components/Loader'; 
import { City } from '../models/City';
import { startAnimation, endAnimation } from '../utils/animationState'; // Import animation state functions
import { controls } from '../utils/controls'; // Import controls



function Flight() {
  const { position: cityPosition } = useSpring({
    from: { position: [20, -1, -700] },
    to: { position: [20, -1, 7] },
    config: { duration: 3000 },
    onStart: () => {
      startAnimation(); // Disable input when animation starts
      controls["shift"] = true; // Simulate Shift key press
    },
    onRest: () => {
      controls["shift"] = false; // Release Shift key press
      endAnimation(); // Re-enable input when animation ends
    },
  });

  const { position: targetsPosition } = useSpring({
    from: { position: [0, -0, -700] },
    to: { position: [0, 0, 0] },
    config: { duration: 3000 },
  });

  return (
    <div className="w-full h-screen relative">
      <Canvas shadows>
        <Suspense fallback={<Loader />}>
          <BlueSpace mode={'normal'} />
          <Environment background={false} files={"/textures/earth-horizon.hdr"} />
          <ambientLight intensity={0} />

          <PerspectiveCamera makeDefault position={[0, 10, 10]} />

          <animated.group position={cityPosition}>
            <City scale={0.5} />
          </animated.group>

          <Rocket />

          <animated.group position={targetsPosition}>
            <Targets />
          </animated.group>

          <directionalLight
            castShadow
            color={"#f3d29a"}
            intensity={2.5}
            position={[10, 5, 4]}
            shadow-bias={-0.0005}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={0.01}
            shadow-camera-far={20}
            shadow-camera-top={6}
            shadow-camera-bottom={-6}
            shadow-camera-left={-6.2}
            shadow-camera-right={6.4}
          />

          <EffectComposer>
            <MotionBlur />
            <HueSaturation
              blendFunction={BlendFunction.NORMAL}
              hue={-0.15}
              saturation={0.1}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Flight;