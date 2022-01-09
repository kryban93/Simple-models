// Simple three.js example

import * as THREE from 'https://threejs.org/build/three.module.js';
import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';
import { createCar } from './createCar.js';

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
	camera.position.set(200, 200, 200);

	// controls
	controls = new OrbitControls(camera, renderer.domElement);

	scene.add(new THREE.AmbientLight(0x555555));

	var light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(20, 20, 0);
	scene.add(light);

	scene.add(new THREE.AxesHelper(20)); // axes

	const car = createCar();

	scene.add(car);
}

function animate() {
	requestAnimationFrame(animate);

	//controls.update();

	renderer.render(scene, camera);
}
