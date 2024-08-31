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

const TARGET_RAD = 0.125;

export function Targets() {
  const [targets, setTargets] = useState(() => {
    const arr = [];
    for (let i = 0; i < 60; i++) {
      arr.push({
        center: randomPoint(new Vector3(17, 2, 11)).add(
          new Vector3(-2, 2 + Math.random() * 2, -13)
        ),
        direction: randomPoint().normalize(),
        hit: false,
      });
    }
    return arr;
  });

  const [targetsAbove, setTargetsAbove] = useState(() => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        center: randomPoint(new Vector3(4, 1, 4)).add(
          new Vector3(0, 4 + Math.random() * 2, 0) // Adjusted to be above the current targets
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

  const geometryAbove = useMemo(() => {
    let geo;

    targetsAbove.forEach((target) => {
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
  }, [targetsAbove]);

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
      setOpenYouTubeLink(true);
    }

    collisionOccurred = false;
    targetsAbove.forEach((target) => {
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
      setTargetsAbove(targetsAbove.filter((target) => !target.hit));
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
    <>
      <mesh geometry={geometry}>
        <meshStandardMaterial color="#6effcc" roughness={0.5} metalness={0.5} />
      </mesh>
      {/* <mesh geometry={geometryAbove}>
        <meshStandardMaterial color="blue" roughness={0.5} metalness={0.5} />
      </mesh> */}
    </>
  );
}