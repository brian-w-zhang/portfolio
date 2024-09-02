// animationState.js
export let isAnimating = false;

export function startAnimation() {
  isAnimating = true;
}

export function endAnimation() {
  isAnimating = false;
}
