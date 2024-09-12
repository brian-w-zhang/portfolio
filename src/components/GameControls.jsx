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
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="flex space-x-1">
                <span className="bg-gray-800 text-white px-2 py-1 rounded text-sm">W</span>
                <span className="bg-gray-800 text-white px-2 py-1 rounded text-sm">A</span>
                <span className="bg-gray-800 text-white px-2 py-1 rounded text-sm">S</span>
                <span className="bg-gray-800 text-white px-2 py-1 rounded text-sm">D</span>
              </div>
              <span className="ml-2">Steering</span>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-1">
                <span className="bg-gray-800 text-white px-2 py-1 rounded text-sm">Shift</span>
              </div>
              <span className="ml-2">Turbo Speed</span>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-1">
                <span className="bg-gray-800 text-white px-2 py-1 rounded text-sm">R</span>
              </div>
              <span className="ml-2">Reset</span>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-1">
                <span className="bg-gray-800 text-white px-2 py-1 rounded text-sm">Q</span>
              </div>
              <span className="ml-2">Rotate Left</span>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-1">
                <span className="bg-gray-800 text-white px-2 py-1 rounded text-sm">E</span>
              </div>
              <span className="ml-2">Rotate Right</span>
            </div>
            <div className="mt-3 italic text-sm text-center">
              Fly into the words and rings!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameControls;
