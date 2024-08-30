import { Environment, OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";
import { useRef } from "react";
import { CharacterController } from "./CharacterController";
import BlueSpace from '../models/BlueSpace';
import { Map } from "./Map";

const maps = {
  fantasy_island: { 
    scale: 0.2,
    position: [2, -5, 0],
    rotation: [0, Math.PI, 0], 
  },
  issum_town: {
    scale: 1,
    position: [0, -10, 0],
    rotation: [0, Math.PI / 4, 0],
  },
  fantasy_islands: {
    scale: 50,
    position: [0, -5, 0],
    rotation: [0, 0, 0], 
  },
  model_plane: { 
    scale: 30,
    position: [0, -1, 0],
    rotation: [0, 0, 0],
  },
  penguin_island: {
    scale: 0.01,
    position: [0, -5, 0],
    rotation: [0, Math.PI/2, 0],
  },
  forest_island: {
    scale: 1,
    position: [0, -5, 0],
    rotation: [0, Math.PI, 0],
  },
  space_apartment: {
    scale: 0.4,
    position: [0, -3, 0],
    rotation: [0, Math.PI, 0], 
  },
};

export const Experience = () => {
  const shadowCameraRef = useRef();
  const { map } = useControls("Map", {
    map: {
      value: "fantasy_island",
      options: Object.keys(maps),
    },
  });

  return (
    <>
      {/* Remove OrbitControls when doing keyboard interaction and not looking for models in the scene to adjust properties */}
      {/* <OrbitControls /> */}
      {/* <Environment preset="warehouse" /> */}
      <Environment background={false} files={"/textures/earth-horizon.hdr"} />

      <ambientLight intensity={1} />
      <directionalLight
        // intensity={0.6}
        // castShadow
        // position={[-15, 15, 15]}
        // shadow-mapSize-width={2048}
        // shadow-mapSize-height={2048}
        // shadow-bias={-0.00005}
        
        // Flight Page directional light properties
        castShadow
        color={"#f3d29a"}
        intensity={2}
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
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef}
          attach={"shadow-camera"}
        />
      </directionalLight>
      <Physics key={map} gravity={[0, -5, 0]}>
      <BlueSpace mode={'normal'} />
      {/* <Physics key={map} gravity={[0, 0, 0]}> */}
        <Map
          scale={maps[map].scale}
          position={maps[map].position}
          rotation={maps[map].rotation} // New line
          model={`models/${map}.glb`}
        />
        <CharacterController />
      </Physics>
    </>
  );
};
