/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// src/components/Model.js

import { useRef, Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

function ModelComponent({ glbModelPath, modelRef }) {
  const gltf = useLoader(GLTFLoader, glbModelPath);

  return (
    <primitive
      object={gltf.scene}
      ref={modelRef}
      position={[0, 0, 0]}
      scale={[3, 3, 3]} 
    />
  );
}

function Model({ glbModelPath }) {
  const modelRef = useRef();

  return (
    <group>
      <Suspense fallback={null}>
        <ModelComponent glbModelPath={glbModelPath} modelRef={modelRef} />
      </Suspense>
    </group>
  );
}

export default Model;
