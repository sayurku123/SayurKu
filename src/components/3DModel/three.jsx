/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import Nipple from "nipplejs";
import Hammer from "hammerjs";

const ThreeDModelWithJoystick = ({ glbModelPath }) => {
  const containerRef = useRef();
  const joystickContainerRef = useRef();
  const modelRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const joystickRef = useRef(null);
  const hammerRef = useRef(null);

  const [lastModelRotation, setLastModelRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    cameraRef.current = camera;
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 10);
    pointLight.position.set(-1, 4, 3);
    scene.add(pointLight);

    loader.load(glbModelPath, (gltf) => {
      const model = gltf.scene;
      modelRef.current = model;
      scene.add(model);

      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      model.traverse((child) => {
        if (child.isMesh) {
          child.material = material;
        }
      });

      camera.position.set(0, 3, 3);
      camera.lookAt(0, 0, 0);

      const joystickContainer = joystickContainerRef.current;

      if (joystickContainer) {
        const options = {
          zone: joystickContainer,
          mode: "static",
          position: { left: "50%", top: "50%" },
        };
        joystickRef.current = Nipple.create(options);

        joystickRef.current.on("move", (evt, data) => {
          if (modelRef.current) {
            const angle = data.angle.radian;
            const sensitivityFactor = 0.05;
            const force = data.force;

            const xRotation = data.direction.y === "up" ? -angle : angle;
            const yRotation = data.direction.x === "left" ? -angle : angle;

            modelRef.current.rotation.x = xRotation * sensitivityFactor;
            modelRef.current.rotation.y = yRotation * sensitivityFactor;
          }
        });

        joystickRef.current.on("end", () => {
          setLastModelRotation({
            x: modelRef.current.rotation.x,
            y: modelRef.current.rotation.y,
          });
          joystickRef.current.destroy();
        });
      }

      const hammerContainer = document.getElementById("hammer-container");
      const hammer = new Hammer(hammerContainer);
      hammerRef.current = hammer;

      hammer.on("pan", (e) => {
        if (modelRef.current) {
          const sensitivityFactor = 0.01;
          modelRef.current.rotation.x += e.velocityY * sensitivityFactor;
          modelRef.current.rotation.y += e.velocityX * sensitivityFactor;
        }
      });

      const animate = () => {
        requestAnimationFrame(animate);

        if (joystickRef.current) {
          const angle = joystickRef.current.get(0).angle;
          if (angle) {
            const radian = angle.radian;
            model.rotation.y += radian * 0.01;
          }
        } else {
          model.rotation.x = lastModelRotation.x;
          model.rotation.y = lastModelRotation.y;
        }

        rendererRef.current.render(scene, cameraRef.current);
      };

      animate();
    });

    window.addEventListener("resize", () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      rendererRef.current.setSize(newWidth, newHeight);
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
    });

    return () => {
      window.removeEventListener("resize", () => {});
      if (joystickRef.current) {
        joystickRef.current.destroy();
      }
      if (hammerRef.current) {
        hammerRef.current.destroy();
      }
      containerRef.current.removeChild(rendererRef.current.domElement);
    };
  }, [glbModelPath]);

  return (
    <div>
      <div ref={joystickContainerRef} style={{ width: "200px", height: "200px" }}></div>
      <div ref={containerRef} id="hammer-container"></div>
    </div>
  );
};

export default ThreeDModelWithJoystick;
