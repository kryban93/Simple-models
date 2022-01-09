import * as THREE from 'https://threejs.org/build/three.module.js';

function createWheels() {
	const geometry = new THREE.CylinderGeometry(7, 7, 4, 32);
	const material = new THREE.MeshStandardMaterial({ color: '#555' });
	const cylinder = new THREE.Mesh(geometry, material);
	return cylinder;
}

export function createCar() {
	const car = new THREE.Group();

	const backRightWheel = createWheels();
	backRightWheel.position.y = 6;
	backRightWheel.position.x = -18;
	backRightWheel.position.z = 14;
	backRightWheel.rotation.x = 1.57;
	car.add(backRightWheel);

	const backLeftWheel = createWheels();
	backLeftWheel.position.y = 6;
	backLeftWheel.position.x = -18;
	backLeftWheel.position.z = -14;
	backLeftWheel.rotation.x = 1.57;
	car.add(backLeftWheel);

	const frontRightWheel = createWheels();
	frontRightWheel.position.y = 6;
	frontRightWheel.position.x = 18;
	frontRightWheel.position.z = 14;
	frontRightWheel.rotation.x = 1.57;
	car.add(frontRightWheel);

	const frontLeftWheel = createWheels();
	frontLeftWheel.position.y = 6;
	frontLeftWheel.position.x = 18;
	frontLeftWheel.position.z = -14;
	frontLeftWheel.rotation.x = 1.57;
	car.add(frontLeftWheel);

	const main = new THREE.Mesh(
		new THREE.BoxBufferGeometry(60, 15, 30),
		new THREE.MeshLambertMaterial({ color: '#34aa33' })
	);
	main.position.y = 12;
	car.add(main);

	const cabin = new THREE.Mesh(
		new THREE.BoxBufferGeometry(33, 12, 24),
		new THREE.MeshLambertMaterial({ color: '#aaa' })
	);
	cabin.position.x = -6;
	cabin.position.y = 25.5;
	car.add(cabin);

	return car;
}
