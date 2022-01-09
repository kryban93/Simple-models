import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';

let renderer, scene, camera, controls;

init();
animate();

function init() {
	renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	document.body.appendChild(renderer.domElement);

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.set(10, 10, 10);

	// controls
	controls = new OrbitControls(camera, renderer.domElement);

	scene.add(new THREE.AmbientLight(0x555555));

	var light = new THREE.DirectionalLight(0xffffff, 4);
	light.position.set(20, 20, 0);
	scene.add(light);

	scene.add(new THREE.AxesHelper(20)); // axes

	const loader = new GLTFLoader();

	loader.load(
		'./js/dog/dog.glb',
		function (gltf) {
			scene.add(gltf.scene);
		},
		undefined,
		function (error) {
			console.error(error);
		}
	);
}

function animate() {
	requestAnimationFrame(animate);
	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;
	// secondCube.rotation.x -= 0.01;
	// secondCube.rotation.y -= 0.01;

	renderer.render(scene, camera);
}
