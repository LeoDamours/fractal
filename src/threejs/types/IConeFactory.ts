import * as THREE from 'three';

export default interface IConeFactory {
    createMesh(radius: number, height: number, radialSegments: number, heightSegments: number, openEnded: boolean, thetaStart: number, thetaLength: number): THREE.Geometry;
}