import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import CanvasLoader from "../Loader/Loader";

const Exhibition3D = () => {
    const meshRef = useRef()
    useFrame(() => {
        meshRef.current.rotation.y -= 0.01
    })
  const ottoman = useGLTF("/childish_cushioned_furniture_ottoman.glb");
  return (
    <mesh ref={meshRef}>
      <primitive object={ottoman.scene} scale={0.01} />
    </mesh>
  );
};

const ExhibitionContainer = () => {
  return (
    <Canvas
      style={{
        minWidth: "400px",
        height: 500,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <camera args={[45, window.innerWidth / window.innerHeight, 1, 1000]} />
        <ambientLight intensity={1} position={[10, 10, 10]} />
        <pointLight intensity={1} />
        <spotLight intensity={1} />
        <hemisphereLight intensity={0.5} position={[10, 32, 32]} />
        <directionalLight intensity={0.5} />
        <OrbitControls
          minPolarAngle={Math.PI/2}
          maxPolarAngle={Math.PI/2}
          minDistance={17}
          enableZoom={false}
        />
        <Exhibition3D />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ExhibitionContainer;
