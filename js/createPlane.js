import * as THREE from 'https://threejs.org/build/three.module.js';

export function createPlane() {
	function createWing() {
		const geometry = new THREE.BoxGeometry(30, 70, 2);
		const material = new THREE.MeshStandardMaterial({ color: '#555' });
		// geometry.applyMatrix4();
		// geometry.vertices[4].x -= -10;
		// geometry.vertices[5].x -= -10;
		const box = new THREE.Mesh(geometry, material);
		return box;
	}

	function createHull() {
		const geometry = new THREE.BoxGeometry(30, 20, 100, 1, 1, 1);
		const material = new THREE.MeshStandardMaterial({ color: '#f58142' });
		// geometry.applyMatrix4();
		// geometry.vertices[4].y -= 10;
		// geometry.vertices[4].x += 10;
		// geometry.vertices[1].y -= 10;
		// geometry.vertices[1].x -= 10;
		// geometry.vertices[6].y -= 10;
		// geometry.vertices[6].x += 10;

		const box = new THREE.Mesh(geometry, material);
		return box;
	}

	function createVerticalStabillizer() {
		const geometry = new THREE.BoxGeometry(25, 50, 2);
		const material = new THREE.MeshStandardMaterial({ color: '#f59992' });
		const box = new THREE.Mesh(geometry, material);
		return box;
	}

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
	rightWing.applyMatrix4(new THREE.Matrix4().makeScale(1, 1, -1));
	plane.add(rightWing);

	const hull = createHull();
	hull.rotation.y = 1.57;
	plane.add(hull);

	const verticalStabilizer = createVerticalStabillizer();
	verticalStabilizer.position.y = 25;
	verticalStabilizer.position.x = -40;
	verticalStabilizer.position.z = 0;

	plane.add(verticalStabilizer);

	return plane;
}
