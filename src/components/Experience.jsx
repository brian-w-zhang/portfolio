import { Environment, OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";
import { useRef } from "react";
import { CharacterController } from "./CharacterController";
import { Map } from "./Map";

const maps = {
  fantasy_island: { 
    scale: 0.2,
    position: [2, -10, 0],
  },
  issum_town: {
    scale: 1,
    position: [0, -10, 0],
  },
  fantasy_islands: {
    scale: 50,
    position: [0, -5, 0],
  },
  model_plane: { 
    scale: 30,
    position: [0, -1, 0],
  },
  steampunk_ship: {
    scale: 0.4,
    position: [0, -5, 0],
  },
  hover_rocket: {
    scale: 0.005,
    position: [0, -2, 0],
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
      {/* <OrbitControls /> */}
      <Environment preset="sunset" />
      <directionalLight
        intensity={0.65}
        castShadow
        position={[-15, 10, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00005}
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
        <Map
          scale={maps[map].scale}
          position={maps[map].position}
          model={`models/${map}.glb`}
        />
        <CharacterController />
      </Physics>
    </>
  );
};
