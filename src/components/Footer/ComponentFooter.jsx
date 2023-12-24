/* eslint-disable react/no-unknown-property */
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import f1 from "../../assets/models/f2.glb";
// import f2 from "../../assets/models/f1.glb";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CameraControls from "../3DModel/Controller/CameraController";
import Model from "../3DModel/Models/ModelThreeComponents";
const ComponentFooter = () => {
  return (
    <>
      <div className="w-full bg-[#323334] text-white">
        <div className="flex flex-row w-3/4 mx-auto pt-16 gap-8 pb-10 ">
          <div className="w-[30%] flex flex-col gap-8">
            <h1 className="text-3xl font-semibold">Sayur.Ku</h1>
            <p className="text-base opacity-50">Belanja sayur segar, bebas repot, harga terjangkau</p>
            <div className="flex flex-col text-base gap-1 font-semibold ">
              <p>@an_aisyahzen</p>
              <p>+6285279709936</p>
              <p>antiaisyahzenderica@gmail.com</p>
            </div>

            <div className="flex flex-row justify-between transition-all ease-in-out delay-0">
              <a href="">
                <FaFacebookF size={24} className="hover:text-[#4267B2] " />
              </a>
              <a href="">
                <FaTwitter size={24} className="hover:text-[#1DA1F2]  " />
              </a>
              <a href="">
                <FaInstagram size={24} className=" hover:text-pink-500 " />
              </a>
              <a href="">
                <FaWhatsapp size={24} className="hover:text-[#25D366]" />
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[15%] gap-8">
            <h1 className="text-2xl font-semibold">Sayur.Ku?</h1>
            <div className="flex flex-col gap-4 font-light text-base ">
              <p>Terpercaya</p>
              <p>Hemat</p>
              <p>Sehat</p>
              <p>Terjangkau</p>
            </div>
          </div>
          <div className="flex flex-col w-[15%] gap-8">
            <h1 className="text-2xl font-semibold">Menu</h1>
            <div className="flex flex-col gap-4 font-light text-base ">
              <p>Home</p>
              <p>About</p>
              <p>Product</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="z-10 w-[40%] justify-center items-center">
            <Canvas camera={{ position: [-4, 10, 6] }}>
              <ambientLight intensity={0.7} />
              <pointLight position={[-1, 4, 3]} intensity={10} />
              <CameraControls />
              <Suspense fallback={null}>
                <Model glbModelPath={f1} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
      <div className="bg-[#222222] text-center p-4 text-white">
        <p>Sayur.Ku © – All rights reserved </p>
      </div>
    </>
  );
};

export default ComponentFooter;
