import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import Loader from '../components/Loader';
import RocketRock from '../models/RocketRock';
import BlueSpace from '../models/BlueSpace';
import Ship from '../models/Ship';
import { OrbitControls } from '@react-three/drei';

function Home() {
  const [rotationAngle, setRotationAngle] = useState(0);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    let islandRotation = [0.4, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, 0, 0];
    } else {
      screenScale = [0.17, 0.17, 0.17];
      screenPosition = [0, 0, 0];
    }

    return [screenScale, screenPosition, islandRotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ position: [0, 0, 7], fov: 60 }}
      >
        <OrbitControls
          enablePan={false} // Disable panning to prevent user from changing the initial view
          enableZoom={true} // Enable zooming
          zoomSpeed={1} // Adjust the zoom speed if needed
          minDistance={2} // Set the minimum distance (zoom in limit)
          maxDistance={200} // Set the maximum distance (zoom out limit)
        />
        <Suspense fallback={<Loader />}>
          <directionalLight
            position={[1, 1, 0]}
            intensity={4}
            rotation={[rotationAngle, 0, 0]} // Rotate the entire scene instead of the light
          />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={0.5}
          />
          <Ship position={[0, 0, 0]} />
          <BlueSpace />
          <RocketRock
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
