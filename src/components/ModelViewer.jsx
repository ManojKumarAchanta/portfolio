import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";

const Model = () => {
  const { scene, animations } = useGLTF("/animation.glb");
  const mixer = useRef(null);

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => mixer.current.clipAction(clip).play());
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <primitive
      object={scene}
      scale={[1, 1, 1]}
      rotation={[.4, .5,0]}
    />
  ); // scale set to 1 for 50% zoom-out
};

const ModelViewer = () => {
  return (
    <div className="w-full h-[80%]  bg-transparent mt-36">
      <Canvas
        camera={{
          position: [0, 25, 250], // Increased the camera distance for zoom-out effect
          fov: 40, // Reduced field of view for wider view (for zoom-out effect)
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Model />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
