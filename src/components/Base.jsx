import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Base = () => {
  const ref = useRef();
  const tl = useRef();
  const scroll = useScroll();
  const currentFaceIndexTracker = { value: -1 };

  const faceThresholds = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
    const currentRotationY = ref.current.rotation.y;
    let normalizedRotation = currentRotationY % (Math.PI * 2);
    if (normalizedRotation < 0) {
      normalizedRotation += Math.PI * 2;
    }
    const tolerance = 0.05;
    faceThresholds.forEach((threshold, index) => {
      if (
        normalizedRotation >= threshold - tolerance &&
        normalizedRotation <= threshold + tolerance &&
        currentFaceIndexTracker.value !== index
      ) {
        currentFaceIndexTracker.value = index;

        alert(`Cara ${index + 1}`);
      }
    });
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      ease: "none",
    });

    const numberOfFaces = 4;
    const totalRotation = Math.PI * 1.5;
    tl.current.to(ref.current.rotation, {
      duration: numberOfFaces,
      y: totalRotation,
    });
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: `+=${window.innerHeight * (numberOfFaces + 1)}`,
    });
  }, []);

  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"indigo"} />
      </mesh>
    </group>
  );
};

export default Base;
