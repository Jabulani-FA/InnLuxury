import { OrbitControls, useGLTF,Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import CanvasLoader from "../Loader/Loader";
import { Suspense } from "react";

const ShowroomRender = () => {
  const interior = useGLTF("/furniture2.glb");
  const furnituresRef = useRef();
  useFrame(() => {
    furnituresRef.current.rotation.y += 0.002;
  });
  return (
    <mesh ref={furnituresRef}>
      <primitive object={interior.scene} scale={0.33} />
    </mesh>
  );
};

const Showroom = () => {
  return (
    <Canvas
      style={{
        height: 500,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <camera
          args={[1000, window.innerWidth / window.innerHeight, 1, 1000]}
        />
        <spotLight intensity={1} />
        <pointLight intensity={1} />
        <ambientLight position={[10, 10, 10]} intensity={1} />
        <hemisphereLight position={[10, 32, 32]} intensity={0.5} />
        <directionalLight intensity={0.5} />
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={Math.PI / 2}
          enableZoom={false}
          minDistance={15}
          enablePan
        />
        <ShowroomRender />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Showroom;
