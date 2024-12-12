import * as THREE from "https://cdn.skypack.dev/three@0.129.0";
const canvas = document.querySelector<HTMLCanvasElement>(canvasSelector);
updateWind(deltaTime);
animate() {
  this.renderer.render(this.scene, this.camera);
  window.requestAnimationFrame(this.animate.bind(this));
}
const snowAnimation = new SnowAnimation("canvas");
snowAnimation.animate();
