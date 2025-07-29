import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import React, { useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [currentHouseFace, setCurrentHouseFace] = useState(null);

  const handleFaceChange = (faceNumber) => {
    setCurrentHouseFace(faceNumber);
  };

  return (
    <div className="w-screen h-screen">
      <Canvas
        className="bg-black w-full h-full"
        camera={{ fov: 42, position: [0, 1.5, 5] }}
      >
        <Experience onFaceChange={handleFaceChange} />
      </Canvas>
      <Card currentFace={currentHouseFace} />
    </div>
  );
}

export default App;
