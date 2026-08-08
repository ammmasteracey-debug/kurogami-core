declare module 'three/examples/jsm/controls/OrbitControls' {
  import { Camera, EventDispatcher, MOUSE, TOUCH } from 'three';
  import { Renderer } from 'three';

  export class OrbitControls extends EventDispatcher {
    constructor(object: Camera, domElement?: HTMLElement);
    object: Camera;
    domElement: HTMLElement | HTMLDocument;
    enabled: boolean;
    target: import('three').Vector3;
    minDistance: number;
    maxDistance: number;
    minZoom: number;
    maxZoom: number;
    minPolarAngle: number;
    maxPolarAngle: number;
    minAzimuthAngle: number;
    maxAzimuthAngle: number;
    enableDamping: boolean;
    dampingFactor: number;
    enableZoom: boolean;
    zoomSpeed: number;
    enableRotate: boolean;
    rotateSpeed: number;
    enablePan: boolean;
    panSpeed: number;
    screenSpacePanning: boolean;
    keyPanSpeed: number;
    autoRotate: boolean;
    autoRotateSpeed: number;
    enableKeys: boolean;
    keys: string[];
    mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };
    touches: { ONE: TOUCH; TWO: TOUCH };
    update(): boolean;
    dispose(): void;
    reset(): void;
    saveState(): void;
    onMouseDown(event: MouseEvent): void;
    onMouseMove(event: MouseEvent): void;
    onMouseUp(event: MouseEvent): void;
    onMouseWheel(event: WheelEvent): void;
    onTouchStart(event: TouchEvent): void;
    onTouchMove(event: TouchEvent): void;
    onTouchEnd(): void;
  }
}
