import { Html, useProgress } from '@react-three/drei';
import Spinner from '/flipping-480.mp4';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html fullscreen className="h-full w-full flex flex-col justify-center items-center bg-black">
      <video src={Spinner} autoPlay loop muted playsInline className="w-32 h-32"/>
      <div className="mt-5 text-xl text-white" style={{ fontFamily: "'Press Start 2P', sans-serif" }}>
        {Math.round(progress)}%
      </div>
    </Html>
  );
};

export default Loader;