import { useState, useMemo, useEffect } from "react";
import { Quaternion, TorusGeometry, Vector3, Sphere } from "three";
import { mergeBufferGeometries } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { rocketPosition } from "./Rocket";

function randomPoint(scale) {
  return new Vector3(
    Math.random() * 2 - 1,
    Math.random() * 2 - 1,
    Math.random() * 2 - 1
  ).multiply(scale || new Vector3(1, 1, 1));
}

function generateNewTarget() {
  return {
    center: randomPoint(new Vector3(4, 0.1, 2)).add(
      new Vector3(-0.51, 1.6 + Math.random() * 1.5, -1)
    ),
    direction: randomPoint().normalize(),
    hit: false,
  };
}

const TARGET_RAD = 0.1;

export function Targets() {
  const [targets, setTargets] = useState(() => {
    const initialTargets = [];
    for (let i = 0; i < 1; i++) {
      initialTargets.push(generateNewTarget());
    }
    return initialTargets;
  });

  const [openYouTubeLink, setOpenYouTubeLink] = useState(false);

  const collisionSound = new Audio('/audio/sonic_ring.mp3');
  collisionSound.volume = 1.0; // Set volume to 100%

  const geometry = useMemo(() => {
    let geo;

    targets.forEach((target) => {
      const torusGeo = new TorusGeometry(TARGET_RAD, 0.02, 8, 25);
      torusGeo.applyQuaternion(
        new Quaternion().setFromUnitVectors(
          new Vector3(0, 0, 1),
          target.direction
        )
      );
      torusGeo.translate(target.center.x, target.center.y, target.center.z);

      if (!geo) geo = torusGeo;
      else geo = mergeBufferGeometries([geo, torusGeo]);
    });

    return geo;
  }, [targets]);

  useFrame(() => {
    let collisionOccurred = false;
    const updatedTargets = targets.map((target) => {
      const targetSphere = new Sphere(target.center, TARGET_RAD);
      if (targetSphere.containsPoint(rocketPosition)) {
        collisionOccurred = true;
        return generateNewTarget(); // Replace hit target with a new one
      }
      return target;
    });

    if (collisionOccurred) {
      collisionSound.play();
      setTargets(updatedTargets);
      // Uncomment the following line if you want to open the YouTube link on collision
      // setOpenYouTubeLink(true);
    }
  });

  useEffect(() => {
    if (openYouTubeLink) {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
      setOpenYouTubeLink(false);
    }
  }, [openYouTubeLink]);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="#6effcc" roughness={0.5} metalness={0.5} />
    </mesh>
  );
}
