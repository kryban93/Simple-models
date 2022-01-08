import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';

function init() {
	const scene = new THREE.Scene();

	const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
	scene.add(ambientLight);

	const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
	directionalLight.position.set(200, 500, 300);
	scene.add(directionalLight);

	const aspectRatio = window.innerWidth / window.innerHeight;
	const cameraWidth = 200;
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
	camera.lookAt(0, 0, 0);

	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.render(scene, camera);

	document.body.appendChild(renderer.domElement);

	function createWing() {
		const geometry = new THREE.BoxGeometry(30, 70, 2);
		const material = new THREE.MeshStandardMaterial({ color: '#555' });
		geometry.vertices[4].x -= -10;
		geometry.vertices[5].x -= -10;
		const box = new THREE.Mesh(geometry, material);
		return box;
	}

	function createHull() {
		const geometry = new THREE.BoxGeometry(30, 20, 100, 1, 1, 1);
		const material = new THREE.MeshStandardMaterial({ color: '#f58142' });
		geometry.vertices[4].y -= 10;
		geometry.vertices[1].y -= 10;
		const box = new THREE.Mesh(geometry, material);
		return box;
	}

	function createPlane() {
		const plane = new THREE.Group();

		const leftWing = createWing();
		leftWing.position.y = -5;
		leftWing.position.x = 15;
		leftWing.position.z = 40;
		leftWing.rotation.x = 1.57;

		plane.add(leftWing);

		const rightWing = createWing();
		rightWing.position.y = -5;
		rightWing.position.x = 15;
		rightWing.position.z = 40;
		rightWing.rotation.x = 1.57;
		rightWing.applyMatrix(new THREE.Matrix4().makeScale(1, 1, -1));
		plane.add(rightWing);

		const hull = createHull();
		hull.rotation.y = 1.57;
		plane.add(hull);

		return plane;
	}

	const car = createPlane();
	scene.add(car);

	renderer.render(scene, camera);
}

window.addEventListener('load', init, false);
