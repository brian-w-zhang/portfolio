import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Loader from '../components/Loader';
import RocketRock from '../models/RocketRock';
import BlueSpace from '../models/BlueSpace';
import Ship from '../models/Ship';
import { OrbitControls } from '@react-three/drei';
import DialogueBox from '../components/Dialogue';

function Home() {
  const [mode, setMode] = useState('dialogue'); // Initial mode
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]); // Initial camera position
  const [canvasKey, setCanvasKey] = useState(0); // Key to force Canvas reload
  const [dialogueIndex, setDialogueIndex] = useState(0); // Index to track dialogue progress

  const dialogues = [
    'Hello, welcome to the dialogue!',
    'This is the second line of dialogue.',
    'And this is the third line.',
    'Switch back to orbit',
  ];

  const handleNextDialogue = () => {
    if (dialogueIndex < dialogues.length - 1) {
      setDialogueIndex((prevIndex) => prevIndex + 1);
    } else {
      setMode('normal'); // Switch back to normal mode when dialogue ends
    }
  };

  const toggleMode = () => {
    setMode(mode === 'normal' ? 'dialogue' : 'normal');
    setDialogueIndex(0); // Reset dialogue index when mode changes
    setCameraPosition(mode === 'normal' ? [0, 0, 5] : [0, 0, 6]);
    setCanvasKey((prevKey) => prevKey + 1); // Increment key to force reload
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    let islandRotation = [0.4, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, 0, 0];
    } else {
      screenScale = [0.15, 0.15, 0.15];
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
        key={canvasKey} // Key to force reload
        camera={{
          position: cameraPosition,
          fov: 60,
        }}
      >
        <OrbitControls
          enablePan={false} // Disable panning to prevent user from changing the initial view
          enableZoom={true} // Enable zooming
          zoomSpeed={1} // Adjust the zoom speed if needed
          minDistance={2} // Set the minimum distance (zoom in limit)
          maxDistance={200} // Set the maximum distance (zoom out limit)
        />
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 0]} intensity={4} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={0.5}
          />
          <Ship position={[0, 0, 0]} mode={mode} />
          <BlueSpace mode={mode} />
          <RocketRock
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            mode={mode}
          />
        </Suspense>
      </Canvas>
      <button className="toggle-button" onClick={toggleMode}>
        {mode === 'normal' ? 'Dialogue' : 'Orbit'}
      </button>
      <DialogueBox
        text={dialogues[dialogueIndex]}
        onNext={handleNextDialogue}
      />
    </section>
  );
}

export default Home;
