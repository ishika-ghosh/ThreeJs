"use client";
import React, { Suspense } from "react";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./CanvasLoader";
import { Float } from "@react-three/drei";

export function Model() {
  const astronaut = useGLTF("/little_astronaut.glb");
  return (
    <primitive
      object={astronaut.scene}
      scale={3}
      position-y={-7}
      rotation-y={0}
    />
  );
}

useGLTF.preload("/little_astronaut.glb");

function Astronaut() {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableDamping
          enableZoom={false}
          maxPolarAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 4}
          maxAzimuthAngle={Math.PI / 5}
          minAzimuthAngle={Math.PI / 10}
        />
        <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[1, 1.5]}
        >
          <Model />
        </Float>
        <Environment preset="dawn" />
      </Suspense>
    </Canvas>
  );
}

export default Astronaut;
