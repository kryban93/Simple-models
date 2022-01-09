import * as THREE from 'https://threejs.org/build/three.module.js';
import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';
import { createPlanet } from './createPlanet.js';

let renderer, scene, camera, controls;
const objectsToRotate = [];

init();
animate();

function init() {
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	document.body.appendChild(renderer.domElement);

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.set(0, 200, 0);

	// controls
	controls = new OrbitControls(camera, renderer.domElement);

	scene.add(new THREE.AmbientLight(0xffffff));

	var light = new THREE.PointLight(0xffffff, 2);
	scene.add(light);

	const sun = createPlanet(16, 16, 16, '#fcba03');
	scene.add(sun);
	objectsToRotate.push(sun);

	const earth = createPlanet(4, 16, 16, '#0a038f');
	earth.position.x = 50;
	sun.add(earth);
	objectsToRotate.push(earth);

	const moon = createPlanet(2, 16, 16, '#141414');
	moon.position.x = 10;
	earth.add(moon);
	objectsToRotate.push(moon);
}

function animate(time) {
	requestAnimationFrame(animate);

	//controls.update();
	objectsToRotate.forEach((planet) => {
		planet.rotation.y = time * 0.001;
	});

	renderer.render(scene, camera);
}
