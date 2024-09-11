import React, { useState } from 'react';
import { FaGamepad, FaTimes } from 'react-icons/fa';

const GameControls = () => {
  const [showControls, setShowControls] = useState(true);

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!showControls && (
        <FaGamepad
          size={30}
          className="text-white cursor-pointer hover:text-gray-300 transition-colors"
          onClick={toggleControls}
        />
      )}
      {showControls && (
        <div className="bg-black bg-opacity-70 rounded-lg p-4 text-white w-64 relative">
          <FaTimes
            size={20}
            className="absolute top-2 right-2 cursor-pointer hover:text-gray-300 transition-colors"
            onClick={toggleControls}
          />
          <h3 className="text-xl font-bold mb-3 text-center">Rocket Controls</h3>
          <ul className="space-y-2">
            <li><strong>WASD</strong> - Change Direction</li>
            <li><strong>Shift</strong> - Turbo Speed</li>
            <li><strong>R</strong> - Reset</li>
            <li><strong>Q</strong> - Rotate Left</li>
            <li><strong>E</strong> - Rotate Right</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default GameControls;