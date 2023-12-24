/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { useEffect, useState } from "react";
import { useKeyboardControls } from "@react-three/drei";

function MoveController({ position }) {
  const { camera } = useThree();
  const keys = useKeyboardControls();

  const [movement, setMovement] = useState(new Vector3());
  const speed = 0.1;

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "w") {
        setMovement(new Vector3(0, 0, -speed));
      } else if (event.key === "s") {
        setMovement(new Vector3(0, 0, speed));
      } else if (event.key === "a") {
        setMovement(new Vector3(-speed, 0, 0));
      } else if (event.key === "d") {
        setMovement(new Vector3(speed, 0, 0));
      }
    }

    function handleKeyUp(event) {
      if (event.key === "w" || event.key === "s" || event.key === "a" || event.key === "d") {
        setMovement(new Vector3());
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const moveVector = movement.clone().applyEuler(camera.rotation);
    camera.position.add(moveVector);
  });

  return null;
}

export default MoveController;
