import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment, OrbitControls } from "@react-three/drei";
import { EffectComposer, HueSaturation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Landscape } from "../components/Landscape";
import { SphereEnv } from "../components/SphereEnv";
import { Rocket } from "../components/Rocket";
import { Targets } from "../components/Targets";
import { MotionBlur } from "../components/MotionBlur";
import BlueSpace from '../models/BlueSpace';
import Loader from '../components/Loader'; 
import { City } from '../models/City';

function Flight() {
  return (
    <div className="w-full h-screen relative">
      <Canvas shadows>
        <Suspense fallback={<Loader />}>
          <BlueSpace mode={'normal'} />
          <Environment background={false} files={"/textures/earth-horizon.hdr"} />
          <ambientLight intensity={0} />

          <PerspectiveCamera makeDefault position={[0, 10, 10]} />

          <City position={[20, -1, 7]} scale={0.5}/>
          {/* <Landscape /> */}
          {/* Comment out rocket for testing */}
          <Rocket />
          {/* Add OrbitControls for testing */}
          <OrbitControls />
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