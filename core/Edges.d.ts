import { ReactThreeFiber } from '@react-three/fiber';
import * as React from 'react';
import * as THREE from 'three';
export declare const Edges: React.ForwardRefExoticComponent<Pick<Omit<ReactThreeFiber.ExtendedColors<ReactThreeFiber.Overwrite<Partial<THREE.LineSegments<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>, ReactThreeFiber.NodeProps<THREE.LineSegments<THREE.BufferGeometry, THREE.Material | THREE.Material[]>, typeof THREE.LineSegments>>>, ReactThreeFiber.NonFunctionKeys<{
    position?: ReactThreeFiber.Vector3 | undefined;
    up?: ReactThreeFiber.Vector3 | undefined;
    scale?: ReactThreeFiber.Vector3 | undefined;
    rotation?: ReactThreeFiber.Euler | undefined;
    matrix?: ReactThreeFiber.Matrix4 | undefined;
    quaternion?: ReactThreeFiber.Quaternion | undefined;
    layers?: ReactThreeFiber.Layers | undefined;
    dispose?: (() => void) | null | undefined;
}>> & {
    position?: ReactThreeFiber.Vector3 | undefined;
    up?: ReactThreeFiber.Vector3 | undefined;
    scale?: ReactThreeFiber.Vector3 | undefined;
    rotation?: ReactThreeFiber.Euler | undefined;
    matrix?: ReactThreeFiber.Matrix4 | undefined;
    quaternion?: ReactThreeFiber.Quaternion | undefined;
    layers?: ReactThreeFiber.Layers | undefined;
    dispose?: (() => void) | null | undefined;
} & import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers & {
    threshold?: number | undefined;
    color?: ReactThreeFiber.Color | undefined;
}, "visible" | "attach" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "color" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "material" | "geometry" | "morphTargetInfluences" | "morphTargetDictionary" | "updateMorphTargets" | "isLineSegments" | "isLine" | "computeLineDistances" | "threshold"> & React.RefAttributes<THREE.LineSegments<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>>;
