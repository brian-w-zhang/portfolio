import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '../components/Loader';
// import Globe from '../models/Globe';
import RocketRock from '../models/RocketRock';
// import Space from '../models/Space';
// import Cluster from '../models/Cluster';
// import Stars from '../models/Stars';
import BlueSpace from '../models/BlueSpace';
import Fox from '../models/Fox';
import Ship from '../models/Ship';

/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          POPUP
        </div> */

function Home() {
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
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1.6, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={0.5}
          />

          <Ship />
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
