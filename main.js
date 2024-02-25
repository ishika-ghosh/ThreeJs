import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";
import moonTexture from "./moon-texture.jpg";
import moonDisplacement from "./moon-displacement.jpg";

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(3, 64, 64);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(moonTexture);
const displacementMap = textureLoader.load(moonDisplacement);

const material = new THREE.MeshStandardMaterial({
  map: texture,
  displacementMap: displacementMap,
  displacementScale: 0.05,
  bumpMap: displacementMap,
  bumpScale: 0.04,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(
  25,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
scene.add(camera);
camera.position.z = 20;
const ambiLight = new THREE.AmbientLight(0xffffff, 0.01);
scene.add(ambiLight);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(100, 10, 5);
scene.add(light);

const canvas = document.querySelector(".canvas");

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;

const t1 = gsap.timeline({ defaults: { duration: 1 } });
t1.fromTo(mesh.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 });
function loop() {
  mesh.rotation.y += 0.005;
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}

loop();
