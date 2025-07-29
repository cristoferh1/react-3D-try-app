import { OrbitControls, ScrollControls } from "@react-three/drei";
import Base from "./Base";
import { West } from "./West";
import { Card } from "./Card";
import React, { useState } from "react";
import Particles from "./Particles";
import ParticlesBg from "./ParticlesBg";

const Experience = ({ onFaceChange }) => {
  return (
    <>
      {/* <ambientLight intensity={0.1} /> */}
      <OrbitControls
        enableZoom={false}
        enableDamping={false}
        enablePan={false}
        enableRotate={false}
      />
      <ScrollControls pages={4} dumping={0.5}>
        {/* <Base /> */}
        <West onFaceChange={onFaceChange} />
      </ScrollControls>
      {/* <Particles /> */}
      <ParticlesBg />

      <mesh position={[3.3, 1.5, -3]}>
        {/* <pointLight intensity={3.8} decay={0.3} color={"#fddfa0"} /> */}
        <directionalLight
          position={[2, 5, 2]}
          intensity={1.4}
          castShadow
          color={"#fddfa0"}
        />
        <sphereGeometry />
        <meshStandardMaterial
          color="#fddfa0"
          emissive="#fddfa0"
          roughness={0.9}
          metalness={0}
          emissiveIntensity={0.6}
        />
      </mesh>
    </>
  );
};

export default Experience;
