import { useState, useMemo, useEffect } from "react";
import { Quaternion, TorusGeometry, Vector3 } from "three";
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

const TARGET_RAD = 0.1;

export function Targets() {
  const [targets, setTargets] = useState(() => {
    const arr = [];
    for (let i = 0; i < 30; i++) {
      arr.push({
        center: randomPoint(new Vector3(4, 0.1, 2)).add(
          new Vector3(-0.51, 1.6 + Math.random() * 1.5, -1)
        ),
        direction: randomPoint().normalize(),
        hit: false,
      });
    }
    return arr;
  });

  const [openYouTubeLink, setOpenYouTubeLink] = useState(false);

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
    targets.forEach((target) => {
      const v = rocketPosition.clone().sub(target.center);
      const dist = target.direction.dot(v);
      const projected = rocketPosition
        .clone()
        .sub(target.direction.clone().multiplyScalar(dist));

      const hitDist = projected.distanceTo(target.center);
      if (hitDist < TARGET_RAD) {
        target.hit = true;
        collisionOccurred = true;
      }
    });

    if (collisionOccurred) {
      setTargets(targets.filter((target) => !target.hit));
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