import * as THREE from 'three';

export default interface IBoxFactory {
    createMesh(width: number, height: number, depth: number, widthSegments: number, heightSegments: number, depthSegments: number): THREE.Geometry;
}