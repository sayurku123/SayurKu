// src/components/CameraControls.js

import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

function CameraControls() {
  const { camera, gl } = useThree();

  return <OrbitControls enableDamping enableZoom={false} args={[camera, gl.domElement]} />;
}

export default CameraControls;
