import { Vector3 } from 'three';
import { isAnimating } from './animationState';
import { initAudio, updateAudio, ensureAudioPlaying } from './howlerAudio';

export let controls = {};

window.addEventListener("keydown", (e) => {
  if (!isAnimating) {
    controls[e.key.toLowerCase()] = true;
    ensureAudioPlaying(); // Ensure audio is playing before adjusting it
    if (e.key.toLowerCase() === 'shift') {
      updateAudio(1); // Immediately start turbo audio transition
    }
  }
});

window.addEventListener("keyup", (e) => {
  if (!isAnimating) {
    controls[e.key.toLowerCase()] = false;
  }
  if (e.key.toLowerCase() === 'shift') {
    updateAudio(0); // Immediately start normal audio transition
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

function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}

export function updatePlaneAxis(x, y, z, planePosition, camera) {
  jawVelocity *= 0.95;
  pitchVelocity *= 0.95;
  rollVelocity *= 0.95;

  if (Math.abs(jawVelocity) > maxVelocity) 
    jawVelocity = Math.sign(jawVelocity) * maxVelocity;

  if (Math.abs(pitchVelocity) > maxVelocity) 
    pitchVelocity = Math.sign(pitchVelocity) * maxVelocity;

  if (Math.abs(rollVelocity) > maxVelocity)
    rollVelocity = Math.sign(rollVelocity) * maxVelocity;

  if (controls["q"]) jawVelocity += 0.0025;
  if (controls["e"]) jawVelocity -= 0.0025;
  if (controls["w"]) pitchVelocity += 0.002;
  if (controls["s"]) pitchVelocity -= 0.002;
  if (controls["a"]) rollVelocity += 0.002;
  if (controls["d"]) rollVelocity -= 0.002;

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
    turbo += 0.025;
  } else {
    turbo *= 0.95;
  }
  turbo = Math.min(Math.max(turbo, 0), 1);

  let turboSpeed = easeOutQuad(turbo) * 0.06;

  camera.fov = 45 + turboSpeed * 900;
  camera.updateProjectionMatrix();

  planePosition.add(z.clone().multiplyScalar(-planeSpeed - turboSpeed));

  // Update audio based on turbo value
  updateAudio(turbo);
}

// Initialize audio when this module is loaded
initAudio();