import { Howl } from 'howler';

let engineSound;
const normalVolume = 0.2;
const turboVolume = 1.0;
const normalRate = 1.0;
const turboRate = 1.5;

export function initAudio() {
  engineSound = new Howl({
    src: ['/audio/engine.ogg'],
    loop: true,
    volume: normalVolume,
    rate: normalRate,
    autoplay: true,
  });
}

export function updateAudio(turbo) {
  if (!engineSound) return;

  const targetVolume = turbo ? turboVolume : normalVolume;
  const targetRate = turbo ? turboRate : normalRate;

  engineSound.volume(targetVolume);
  engineSound.rate(targetRate);
}

export function ensureAudioPlaying() {
  if (engineSound && !engineSound.playing()) {
    engineSound.play();
  }
}