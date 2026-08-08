"use client";

import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls as ThreeOrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { VignetteShader } from "three/examples/jsm/shaders/VignetteShader";
import { useEffect, useMemo, useRef } from "react";

function Building({ position, height = 10, width = 2.8, depth = 3.2, edgeColor = "#00f0ff" }: any) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow position={[0, height / 2, 0]}>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color="#0a0a12" metalness={0.28} roughness={0.26} emissive="#02060b" />
      </mesh>
      <mesh position={[0, height - 0.16, depth / 2 + 0.03]}>
        <boxGeometry args={[width * 0.72, 0.16, 0.08]} />
        <meshStandardMaterial color={edgeColor} emissive={edgeColor} emissiveIntensity={1.75} toneMapped={false} />
      </mesh>
      <mesh position={[width / 2 + 0.04, height / 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[depth - 0.2, height - 1.4]} />
        <meshStandardMaterial color="#050814" emissive={edgeColor} emissiveIntensity={0.22} transparent opacity={0.32} />
      </mesh>
      <mesh position={[-width / 2 - 0.04, height / 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[depth - 0.2, height - 1.4]} />
        <meshStandardMaterial color="#050814" emissive={edgeColor} emissiveIntensity={0.22} transparent opacity={0.32} />
      </mesh>
    </group>
  );
}

function NeonSign({ position, color, width = 2.2, height = 0.18 }: any) {
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * 1.1) * 0.1;
    ref.current.rotation.y = Math.sin(t * 0.25) * 0.05;
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[width, height, 0.12]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.6} toneMapped={false} />
      </mesh>
      <mesh position={[0, -0.16, 0]}>
        <planeGeometry args={[width * 0.7, 0.08]} />
        <meshBasicMaterial color={color} transparent opacity={0.86} toneMapped={false} />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  const ref = useRef<any>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(220 * 3);
    for (let i = 0; i < 220; i += 1) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = Math.random() * 5.2 + 1;
      arr[i * 3 + 2] = -Math.random() * 35 - 4;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.02;
    ref.current.position.y = 1.2 + Math.sin(t * 0.54) * 0.12;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#81f5ff" size={0.06} transparent opacity={0.18} depthWrite={false} toneMapped={false} />
    </points>
  );
}

function WetGround() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[32, 54]} />
        <meshPhysicalMaterial color="#08090f" metalness={0.96} roughness={0.08} clearcoat={0.44} clearcoatRoughness={0.03} reflectivity={0.9} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.016, 0]}>
        <planeGeometry args={[32, 54]} />
        <meshBasicMaterial color="#04101b" transparent opacity={0.24} toneMapped={false} />
      </mesh>
    </group>
  );
}

function StreetGlow() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.018, -12]}>
        <planeGeometry args={[18, 1.2]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.06} toneMapped={false} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.018, -26]}>
        <planeGeometry args={[20, 1.2]} />
        <meshBasicMaterial color="#ff2d55" transparent opacity={0.05} toneMapped={false} />
      </mesh>
    </group>
  );
}

function PostProcessing() {
  const { gl, scene, camera, size } = useThree();
  const composer = useRef<EffectComposer | null>(null);

  useEffect(() => {
    const composerInstance = new EffectComposer(gl);
    composerInstance.setSize(size.width, size.height);
    composerInstance.addPass(new RenderPass(scene, camera));

    const bloom = new UnrealBloomPass(new THREE.Vector2(size.width, size.height), 0.6, 0.35, 0.78);
    bloom.threshold = 0.15;
    bloom.strength = 0.88;
    bloom.radius = 0.45;
    composerInstance.addPass(bloom);

    const vignette = new ShaderPass(VignetteShader);
    vignette.uniforms["offset"].value = 1.0;
    vignette.uniforms["darkness"].value = 1.4;
    composerInstance.addPass(vignette);

    composer.current = composerInstance;
    return () => composerInstance.dispose();
  }, [gl, scene, camera, size]);

  useFrame(() => composer.current?.render(), 1);
  return null;
}

function CorridorScene() {
  const buildings = useMemo(
    () => [
      { x: -4, z: -6, height: 10, width: 3.2, color: "#00f0ff" },
      { x: 4, z: -7, height: 12, width: 3.4, color: "#ff2d55" },
      { x: -3.2, z: -14, height: 9, width: 2.8, color: "#00f0ff" },
      { x: 3.2, z: -15.6, height: 13, width: 3.2, color: "#ff2d55" },
      { x: -4.6, z: -23, height: 15, width: 3.8, color: "#00f0ff" },
      { x: 4.6, z: -24.2, height: 11, width: 3.0, color: "#ff2d55" },
      { x: -3.0, z: -31.2, height: 16, width: 3.6, color: "#00f0ff" },
      { x: 3.0, z: -32.6, height: 10, width: 2.8, color: "#ff2d55" },
      { x: -3.8, z: -40.1, height: 13, width: 3.4, color: "#00f0ff" },
      { x: 3.8, z: -41.6, height: 9, width: 2.6, color: "#ff2d55" }
    ],
    []
  );

  return (
    <>
      <color attach="background" args={["#05050a"]} />
      <fog attach="fog" args={["#05050a", 9, 32]} />

      <ambientLight intensity={0.18} />
      <hemisphereLight args={["#080a12", "#000000", 0.08]} />
      <pointLight position={[-1.5, 4.8, -10]} color="#00f0ff" intensity={1.2} distance={18} />
      <pointLight position={[2.5, 4.4, -14]} color="#ff2d55" intensity={1.1} distance={16} />
      <pointLight position={[0.4, 2.4, -26]} color="#00f0ff" intensity={0.88} distance={18} />
      <pointLight position={[-0.6, 2.0, -34]} color="#ff2d55" intensity={0.78} distance={16} />

      <WetGround />
      <StreetGlow />
      <FloatingParticles />

      {buildings.map((building, index) => (
        <Building
          key={index}
          position={[building.x, building.height / 2, building.z]}
          height={building.height}
          width={building.width}
          edgeColor={building.color}
        />
      ))}

      <NeonSign position={[-1.4, 6.1, -10]} color="#ff2d55" />
      <NeonSign position={[1.4, 6.8, -18.5]} color="#00f0ff" />
      <NeonSign position={[-0.7, 5.4, -26.4]} color="#ff2d55" />
      <NeonSign position={[1.3, 6.2, -34.8]} color="#00f0ff" />
    </>
  );
}

function Controls() {
  const { camera, gl } = useThree();
  const controls = useRef<any>(null);

  useEffect(() => {
    const orbit = new ThreeOrbitControls(camera, gl.domElement);
    orbit.enableDamping = true;
    orbit.enablePan = false;
    orbit.minPolarAngle = Math.PI / 4.8;
    orbit.maxPolarAngle = Math.PI / 2.05;
    orbit.minDistance = 9;
    orbit.maxDistance = 26;
    orbit.target.set(0, 1.9, -18);
    orbit.update();
    controls.current = orbit;

    return () => orbit.dispose();
  }, [camera, gl]);

  useFrame(() => controls.current?.update());
  return null;
}

export default function ShadowBrickell() {
  return (
    <div className="relative w-full h-screen bg-[#05050a]">
      <Canvas shadows camera={{ position: [0, 4.6, 18], fov: 42 }}>
        <CorridorScene />
        <Controls />
        <PostProcessing />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_38%),radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_22%),radial-gradient(circle_at_bottom,rgba(255,45,85,0.08),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.74))]" />
    </div>
  );
}
