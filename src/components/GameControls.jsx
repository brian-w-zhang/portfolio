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
        <button
          type="button"
          onClick={toggleControls}
          aria-label="Open game controls"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md transition hover:bg-black/60 hover:text-gray-200"
        >
          <FaGamepad size={18} />
        </button>
      )}
      {showControls && (
        <div className="relative w-52 rounded-xl border border-white/15 bg-black/45 p-3 text-white shadow-xl backdrop-blur-md">
          <button
            type="button"
            aria-label="Close game controls"
            className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-white"
            onClick={toggleControls}
          >
            <FaTimes size={12} />
          </button>
          <h3 className="mb-2 text-center text-base font-semibold tracking-wide">Rocket Controls</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between gap-2">
              <div className="flex space-x-1">
                <span className="rounded bg-gray-800 px-2 py-1 text-xs text-white">W</span>
                <span className="rounded bg-gray-800 px-2 py-1 text-xs text-white">A</span>
                <span className="rounded bg-gray-800 px-2 py-1 text-xs text-white">S</span>
                <span className="rounded bg-gray-800 px-2 py-1 text-xs text-white">D</span>
              </div>
              <span className="text-white/90">Steer</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex space-x-1">
                <span className="rounded bg-gray-800 px-2 py-1 text-xs text-white">Q</span>
                <span className="rounded bg-gray-800 px-2 py-1 text-xs text-white">E</span>
              </div>
              <span className="text-white/90">Roll</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex space-x-1">
                <span className="rounded bg-gray-800 px-2 py-1 text-xs text-white">Shift</span>
              </div>
              <span className="text-white/90">Boost</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex space-x-1">
                <span className="rounded bg-gray-800 px-2 py-1 text-xs text-white">R</span>
              </div>
              <span className="text-white/90">Reset</span>
            </div>
            <div className="mt-2 border-t border-white/10 pt-2 text-center text-xs italic text-white/80">
              Fly into the words and rings!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameControls;
