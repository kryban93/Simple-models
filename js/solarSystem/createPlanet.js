import * as THREE from 'https://threejs.org/build/three.module.js';

export function createPlanet(radius, widthSegments, heightSegments, color) {
	const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
	const material = new THREE.MeshStandardMaterial({ color: `${color}` });
	const sphere = new THREE.Mesh(geometry, material);
	return sphere;
}
