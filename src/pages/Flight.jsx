import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import { EffectComposer, HueSaturation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Landscape } from "../components/Landscape";
import { SphereEnv } from "../components/SphereEnv";
import { Rocket } from "../components/Rocket";
import { Targets } from "../components/Targets";
import { MotionBlur } from "../components/MotionBlur";

import BlueSpace from '../models/BlueSpace';


function Flight() {
  return (
    <div className="w-full h-screen relative">
      <Canvas shadows>
        <Suspense fallback={null}>
          {/* <SphereEnv /> */}
          <BlueSpace mode={'normal'} />
          <Environment background={false} files={"/textures/earth-horizon.hdr"} />
          <ambientLight intensity={0} />

          <PerspectiveCamera makeDefault position={[0, 10, 10]} />

          <Landscape />
          <Rocket />
          <Targets />

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
              blendFunction={BlendFunction.NORMAL} // blend mode
              hue={-0.15} // hue in radians
              saturation={0.1} // saturation in radians
            />
          </EffectComposer>
          </Suspense>
      </Canvas>
    </div>
  );
}

export default Flight;
