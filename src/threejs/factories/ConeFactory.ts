// Factory for creating Box shaoes in Three.js
import * as THREE from 'three';
import IConeFactory from "../types/IConeFactory";

export default class ConeFactory implements IConeFactory {
    private static instance: ConeFactory;

    private constructor() {}

    public static getInstance(): ConeFactory {
        if (!ConeFactory.instance) {
            ConeFactory.instance = new ConeFactory();
        }
        return ConeFactory.instance;
    }

    public createMesh(radius: number, height: number, radialSegments: number, heightSegments: number, openEnded: boolean, thetaStart: number, thetaLength: number): THREE.Geometry {
        return new THREE.ConeGeometry(radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
    }
}