import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import CanvasLoader from '../Loader';

const Astronaut1 = ({ isMobile }) => {
  const astronaut1Ref = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (astronaut1Ref.current) {
      // Animasi melayang ke atas dan ke bawah (sumbu y)
      astronaut1Ref.current.position.y = isMobile
        ? -2 + Math.sin(elapsedTime) * 0.3 // Mobile
        : -2.25 + Math.sin(elapsedTime) * 0.3; // Desktop

      // Animasi melayang ke samping (sumbu x)
      astronaut1Ref.current.position.x = Math.cos(elapsedTime) * 0.3; // Gerakan horizontal
    }
  });

  const astronaut1 = useGLTF('/astronaut_balloon/scene.gltf');
  // console.log(astronaut1);

  return (
    <mesh ref={astronaut1Ref}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        // shadow-mapSize={1024}
        shadow-mapSize={512}
      />
      <ambientLight intensity={3.5} />
      <primitive
        object={astronaut1.scene}
        // scale={isMobile ? 0.7 : 0.75}
        scale={isMobile ? 6.3 : 6.35}
        position={isMobile ? [-6, -0.5, -1.8] : [0, -0.75, -1.5]}
        // rotation={[-0.01, -0.2, -0.1]}
        rotation={[-0.01, -2.5, 0]}
      />
    </mesh>
  );
};

const Astronaut1Canvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(max-width: 500px)');

      // set the initial value of 'isMobile' state variable
      setIsMobile(mediaQuery.matches);

      // define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };

      // add a callback function as a listener for changes to the media query
      mediaQuery.addEventListener('change', handleMediaQueryChange);

      // remove the listener when the component is unmounted
      return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return (
    <Canvas style={{ position: 'absolute', zIndex: 0 }} frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true, alpha: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Astronaut1 isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Astronaut1Canvas;
