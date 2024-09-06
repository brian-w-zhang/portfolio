import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import { EffectComposer, HueSaturation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useSpring, animated } from '@react-spring/three';
import { Rocket, rocketPosition } from "../components/Rocket";
import { Targets } from "../components/Targets";
import { MotionBlur } from "../components/MotionBlur";
import BlueSpace from '../models/BlueSpace';
import Loader from '../components/Loader'; 
import { City } from '../models/City';
import { startAnimation, endAnimation } from '../utils/animationState'; 
import { controls } from '../utils/controls';
import TextCollider from "../components/TextCollider"; // Import TextCollider



function Flight() {
  useEffect(() => {
    // Reset rocketPosition when Flight component mounts
    rocketPosition.set(0, 4, 15);
  }, []);

  const { position: cityPosition } = useSpring({
    from: { position: [0, 0, -500] },
    to: { position: [0, 0, 0] },
    config: { duration: 2500 },
    onStart: () => {
      startAnimation(); // Disable input when animation starts
      controls["shift"] = true; // Simulate Shift key press
    },
    onRest: () => {
      controls["shift"] = false; // Release Shift key press
      endAnimation(); // Re-enable input when animation ends
    },
  });
  
  // State to handle YouTube link opening
  const [openYouTubeLink, setOpenYouTubeLink] = useState(null);

  const handleCollision = (url) => {
    setOpenYouTubeLink(url);
  };

  useEffect(() => {
    if (openYouTubeLink) {
      window.open(openYouTubeLink, "_blank");
      setOpenYouTubeLink(null);
    }
  }, [openYouTubeLink]);


  return (
    <div className="w-full h-screen relative">
      <Canvas shadows>
        <Suspense fallback={<Loader />}>
          <BlueSpace mode={'normal'} />
          <Environment background={false} files={"/textures/earth-horizon.hdr"} />
          <ambientLight intensity={0} />

          <PerspectiveCamera makeDefault position={[0, 10, 10]} />

          <animated.group position={cityPosition}>
            <City position = {[8, 1, 7]} scale={0.2} />
            <Targets />
            <TextCollider
              text="ABOUT"
              position={[-5, 4.5, -1]} // Adjust position as needed
              url="https://www.youtube.com/watch?v=OXtZfPZIex4"
              onCollision={handleCollision}
            />
            <TextCollider
            text="PROJECTS"
            position={[2, 4.5, -1]} // Adjust position as needed
            url="https://www.youtube.com/watch?v=c4pBkDV-H5U"
            onCollision={handleCollision}
            />
          </animated.group>

          <Rocket />

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