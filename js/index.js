import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';

function init() {
	const scene = new THREE.Scene();

	const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
	scene.add(ambientLight);

	const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
	directionalLight.position.set(200, 500, 300);
	scene.add(directionalLight);

	const aspectRatio = window.innerWidth / window.innerHeight;
	const cameraWidth = 150;
	const cameraHeight = cameraWidth / aspectRatio;

	const camera = new THREE.OrthographicCamera(
		cameraWidth / -2, // left
		cameraWidth / 2, // right
		cameraHeight / 2, // top
		cameraHeight / -2, // bottom
		0, // near plane
		1000 // far plane
	);
	camera.position.set(200, 200, 200);
	camera.lookAt(0, 10, 0);

	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.render(scene, camera);

	document.body.appendChild(renderer.domElement);

	function createWheels() {
		const geometry = new THREE.CylinderGeometry(7, 7, 35, 32);
		const material = new THREE.MeshStandardMaterial({ color: '#cfcfcf' });
		const cylinder = new THREE.Mesh(geometry, material);
		return cylinder;
	}

	function createCar() {
		const car = new THREE.Group();

		const backWheel = createWheels();
		backWheel.position.y = 6;
		backWheel.position.x = -18;
		backWheel.rotation.x = 1.57;
		car.add(backWheel);

		const frontWheel = createWheels();
		frontWheel.position.y = 6;
		frontWheel.position.x = 18;
		frontWheel.rotation.x = 1.57;
		car.add(frontWheel);

		const main = new THREE.Mesh(
			new THREE.BoxBufferGeometry(60, 15, 30),
			new THREE.MeshLambertMaterial({ color: 0x78b14b })
		);
		main.position.y = 12;
		car.add(main);

		const cabin = new THREE.Mesh(
			new THREE.BoxBufferGeometry(33, 12, 24),
			new THREE.MeshLambertMaterial({ color: 0xffffff })
		);
		cabin.position.x = -6;
		cabin.position.y = 25.5;
		car.add(cabin);

		return car;
	}

	const car = createCar();
	scene.add(car);

	renderer.render(scene, camera);
}

window.addEventListener('load', init, false);
