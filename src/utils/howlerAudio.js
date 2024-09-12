// howlerAudio.js

import { Howl } from 'howler';

const NORMAL_VOLUME = 0.2;
const TURBO_VOLUME = 0.8;
const NORMAL_RATE = 1.0;
const TURBO_RATE = 2.3;
const TRANSITION_DURATION = 500; 

let engineSound;
let currentState = 'normal';
let transitionTimeout;

export function initAudio() {
  if (engineSound) return; // Audio already initialized

  engineSound = new Howl({
    src: ['/audio/engine.ogg'],
    loop: true,
    volume: NORMAL_VOLUME,
    rate: NORMAL_RATE,
    autoplay: true,
  });

  engineSound.on('load', () => {
    console.log('Audio loaded successfully');
  });

  engineSound.on('loaderror', (id, err) => {
    console.error('Error loading audio:', err);
  });
}


function transitionAudio(targetVolume, targetRate) {
  if (!engineSound) {
    console.warn('Audio not initialized');
    return;
  }

  clearTimeout(transitionTimeout);

  const startVolume = engineSound.volume();
  const startRate = engineSound.rate();
  const startTime = Date.now();

  function updateAudio() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / TRANSITION_DURATION, 1);

    const newVolume = startVolume + (targetVolume - startVolume) * progress;
    const newRate = startRate + (targetRate - startRate) * progress;

    engineSound.volume(newVolume);
    engineSound.rate(newRate);

    if (progress < 1) {
      transitionTimeout = setTimeout(updateAudio, 16); // ~60fps
    }
  }

  updateAudio();
}

export function updateAudio(turbo) {
  if (!engineSound) {
    console.warn("Engine sound not initialized. Initializing now...");
    initAudio(); // Call initAudio to make sure the sound is initialized
    return; // Exit early since the sound is not ready
  }

  const targetState = turbo > 0.5 ? 'turbo' : 'normal';

  if (targetState !== currentState) {
    currentState = targetState;
    const targetVolume = targetState === 'turbo' ? TURBO_VOLUME : NORMAL_VOLUME;
    const targetRate = targetState === 'turbo' ? TURBO_RATE : NORMAL_RATE;
    transitionAudio(targetVolume, targetRate);
  }
}

export function ensureAudioPlaying() {
  if (engineSound && !engineSound.playing()) {
    engineSound.play();
  }
}

export function cleanupAudio() {
  if (engineSound) {
    engineSound.stop();  // Stop the sound
    engineSound.unload();  // Then unload it
    engineSound = null;  // Set to null to ensure it's fully cleaned up
  }
  clearTimeout(transitionTimeout);
  console.log('Audio cleaned up');  // Add this log for debugging
}