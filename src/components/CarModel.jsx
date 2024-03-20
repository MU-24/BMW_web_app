import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import bmwModel from "../assets/images/bmw.glb";

function Model(props) {
  const { scene } = useGLTF(bmwModel);
  return <primitive object={scene} {...props} />;
}

const CarModel = () => {
  return (
    <>
      <div className="text-center items-center container mx-auto px-4 md:px-10 pt-10">
        <h1 className="text-[#1B3E80] text-3xl md:text-4xl lg:text-6xl xl:text-6xl mr-24 mb-[-20px] font-bold">
          BMW
        </h1>
        <h2 className="text-black text-2xl md:text-3xl lg:text-6xl font-bold ml-48 mt-2 md:mt-4">
          DESIGNS
        </h2>
      </div>
      <div style={{ height: "450px", width: "100%", touchAction: "none" }}>
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
          <color attach="background" args={["#ffffff"]} />
          <PresentationControls
            speed={2}
            global
            zoom={2}
            polar={[-0.1, Math.PI / 1]}
          >
            <Stage intensity={0} preset="rembrandt" contactShadow={false}>
              <Model scale={0.009} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
    </>
  );
};

export default CarModel;
