import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const ParticlesBg = ({ count = 200 }) => {
  const meshRef = useRef();
  const materialRef = useRef();

  const initialPositions = useMemo(() => {
    const tempPositions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      tempPositions[i * 3] = (Math.random() - 0.5) * 10;
      tempPositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      tempPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return tempPositions;
  }, [count]);

  const positionsRef = useRef(initialPositions);

  useFrame(() => {
    const positions = positionsRef.current;
    for (let i = 0; i < count; i++) {
      if (Math.random() < 0.005) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }
    }

    if (meshRef.current) {
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positionsRef.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        color="#FFF000"
        size={0.02}
        opacity={0.9}
      />
    </points>
  );
};

export default ParticlesBg;
