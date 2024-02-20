import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import Loader from '../components/Loader';
import RocketRock from '../models/RocketRock';
import BlueSpace from '../models/BlueSpace';
import Ship from '../models/Ship';
import { OrbitControls } from '@react-three/drei';
import DialogueBox from '../components/Dialogue';
import Instructions from '../components/Instructions';

function Home() {
  const [mode, setMode] = useState('dialogue'); // Initial mode
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]); // Initial camera position
  const [canvasKey, setCanvasKey] = useState(0); // Key to force Canvas reload
  const [modelsLoaded, setModelsLoaded] = useState(false); // State to track if models have loaded
  const [showTextBox, setShowTextBox] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true); // State to track if start button should be shown
  const [showDialogue, setShowDialogue] = useState(false); // State to track if dialogue should be shown

  useEffect(() => {
    // Show the textbox after 1.5 seconds
    const showTimeout = setTimeout(() => {
      setShowTextBox(true);
    }, 100);

    // Hide the textbox after 3 seconds
    const hideTimeout = setTimeout(() => {
      setShowTextBox(false);
    }, 7000); // 1500 (show time) + 3000 (display time)

    // Clear timeouts to prevent memory leaks
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [mode]);

  useEffect(() => {
    // Simulate loading time for models (1 second delay)
    const timeout = setTimeout(() => {
      setModelsLoaded(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const toggleMode = () => {
    setMode(mode === 'normal' ? 'dialogue' : 'normal');
    setCameraPosition(mode === 'normal' ? [0, 0, 5] : [0, 0, 6]);
    setCanvasKey((prevKey) => prevKey + 1); // Increment key to force reload
    setShowStartButton(mode == 'normal' ? true : false);
    setShowDialogue(false);
  };

  const startDialogue = () => {
    setShowStartButton(false); // Hide the start button
    setShowDialogue(true); // Show the dialogue
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    let islandRotation = [0.4, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.15, 0.15, 0.15];
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
    <section className="main-section">
      <Canvas
        className={`canvas-container ${
          mode === 'normal' ? 'grabby-cursor' : ''
        }`} // Conditionally apply grabby cursor class
        key={canvasKey}
        camera={{
          position: cameraPosition,
          fov: 60,
        }}
      >
        {mode === 'normal' && ( // Render OrbitControls only if mode is 'normal'
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            zoomSpeed={1}
            minDistance={2}
            maxDistance={200}
          />
        )}
        <Suspense
          fallback={<Loader onLoaderDisappear={() => setModelsLoaded(true)} />}
        >
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
            // onLoad={() => setModelsLoaded(true)} // Update state when models are loaded
          />
        </Suspense>
      </Canvas>
      {showStartButton && mode === 'dialogue' && (
        <button className="start-button" onClick={startDialogue}>
          Start Dialogue
        </button>
      )}
      <button className="toggle-button" onClick={toggleMode}>
        {mode === 'normal' ? 'Dialogue' : 'Orbit'}
      </button>

      {modelsLoaded && showTextBox && mode === 'normal' && (
        <Instructions
          text={[``, 'Click and drag to rotate.', 'Scroll to zoom in and out.']}
        />
      )}

      {modelsLoaded && showDialogue && mode === 'dialogue' && (
        <DialogueBox
          text={[
            '',
            `Hi! 
            I'm Brian. 
            Welcome to my online portfolio!`,
            "I'm a Software Engineering student at the University of Waterloo.",
            `Currently, I'm a Web Developer for Mcgill University,
            and a Firmware Developer for UW Orbital.`,
            `Click 'About' for more of my skills and experience,
            and 'Projects' to see cool stuff I've brought to life.`,
            'Feel free to contact me by sending a message!',
            `Click 'Orbit' to continue exploring this universe.`,
          ]}
        />
      )}
    </section>
  );
}

export default Home;
