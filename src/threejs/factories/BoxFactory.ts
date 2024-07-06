// Factory for creating Box shaoes in Three.js
import * as THREE from 'three';
import IBoxFactory from "../types/IBoxFactory";

export default class BoxFactory implements IBoxFactory {
    private static instance: BoxFactory;

    private constructor() {}

    public static getInstance(): BoxFactory {
        if (!BoxFactory.instance) {
            BoxFactory.instance = new BoxFactory();
        }
        return BoxFactory.instance;
    }

    public createMesh(width: number, height: number, depth: number, widthSegments: number, heightSegments: number, depthSegments: number): THREE.Geometry {
        return new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);
    }
}
