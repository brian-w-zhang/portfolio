import { Html } from '@react-three/drei';
import CircleLoader from 'react-spinners/CircleLoader';
import Spinner from '/astronaut-flipping.mp4';

const Loader = () => {
  return (
    <Html fullscreen className="load-background">
      {/* <CircleLoader color="rgb(255,255,255)" /> */}
      <video src={Spinner} autoPlay loop muted />
    </Html>
  );
};

export default Loader;
