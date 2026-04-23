import { Vector3 } from 'three';
import { isAnimating } from './animationState';
import { initAudio, updateAudio, ensureAudioPlaying, cleanupAudio } from './howlerAudio';


export let controls = {};

let currentRoute = '';

export function setCurrentRoute(route) {
  currentRoute = route;
  console.log('Current route:', currentRoute);
}

window.addEventListener("keydown", (e) => {
  
  if (!isAnimating) {
    controls[e.key.toLowerCase()] = true;
    ensureAudioPlaying(); // Ensure audio is playing before adjusting it
    if (e.key.toLowerCase() === 'shift' && currentRoute === '/') {
      updateAudio(1); // Immediately start turbo audio transition
    }
  }
});

window.addEventListener("keyup", (e) => {
  if (!isAnimating) {
    controls[e.key.toLowerCase()] = false;
  }
  if (e.key.toLowerCase() === 'shift' && currentRoute === '/') {
    updateAudio(0); // Immediately start normal audio transition
    if (currentRoute !== '/') {
      cleanupAudio(); // Stop audio when not in Flight route
    }
  }
});

let maxVelocity = 0.04;
let jawVelocity = 0;
let pitchVelocity = 0;
let rollVelocity = 0;
let planeSpeed = 0.006;
export let turbo = 0;

export function resetVelocities() {
  jawVelocity = 0;
  pitchVelocity = 0;
  rollVelocity = 0;
  turbo = 0;
}

export function resetControlsState() {
  controls = {};
}

function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}

export function updatePlaneAxis(x, y, z, planePosition, camera, delta = 1 / 60) {
  const frameFactor = Math.min(Math.max(delta * 60, 0.25), 2);

  jawVelocity *= Math.pow(0.95, frameFactor);
  pitchVelocity *= Math.pow(0.95, frameFactor);
  rollVelocity *= Math.pow(0.95, frameFactor);

  if (Math.abs(jawVelocity) > maxVelocity) 
    jawVelocity = Math.sign(jawVelocity) * maxVelocity;

  if (Math.abs(pitchVelocity) > maxVelocity) 
    pitchVelocity = Math.sign(pitchVelocity) * maxVelocity;

  if (Math.abs(rollVelocity) > maxVelocity)
    rollVelocity = Math.sign(rollVelocity) * maxVelocity;

  if (controls["q"]) jawVelocity += 0.001 * frameFactor;
  if (controls["e"]) jawVelocity -= 0.001 * frameFactor;
  if (controls["w"]) pitchVelocity += 0.001 * frameFactor;
  if (controls["s"]) pitchVelocity -= 0.001 * frameFactor;
  if (controls["a"]) rollVelocity += 0.001 * frameFactor;
  if (controls["d"]) rollVelocity -= 0.001 * frameFactor;

  if (controls["r"]) {
    jawVelocity = 0;
    pitchVelocity = 0;
    rollVelocity = 0;
    turbo = 0;
    x.set(1, 0, 0);
    y.set(0, 1, 0);
    z.set(0, 0, 1);
    planePosition.set(-0.5, 4, 7);
  }

  x.applyAxisAngle(z, jawVelocity);
  y.applyAxisAngle(z, jawVelocity);
  y.applyAxisAngle(x, pitchVelocity);
  z.applyAxisAngle(x, pitchVelocity);
  x.applyAxisAngle(y, rollVelocity);
  z.applyAxisAngle(y, rollVelocity);

  x.normalize();
  y.normalize();
  z.normalize();

  if (controls.shift) {
    turbo += 0.025 * frameFactor;
  } else {
    turbo *= Math.pow(0.95, frameFactor);
  }
  turbo = Math.min(Math.max(turbo, 0), 1);

  let turboSpeed = easeOutQuad(turbo) * 0.06;

  camera.fov = 45 + turboSpeed * 900;
  camera.updateProjectionMatrix();

  planePosition.add(
    z.clone().multiplyScalar((-planeSpeed - turboSpeed) * frameFactor)
  );

  // Update audio based on turbo value
  updateAudio(turbo);
}

// Initialize audio when this module is loaded
initAudio();
