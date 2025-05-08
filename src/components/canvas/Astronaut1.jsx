import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, useGLTF, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Astronaut1 = ({ isMobile }) => {
  const astronaut1Ref = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (astronaut1Ref.current) {
      astronaut1Ref.current.rotation.y = elapsedTime * 0.5;
      if (isMobile) {
        astronaut1Ref.current.rotation.x = Math.sin(elapsedTime) * 0.2;
      } else {
        astronaut1Ref.current.rotation.x = 0;
      }
    }
  });

  const astronaut1 = useGLTF('/astronaut_balloon/scene.gltf');

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
        shadow-mapSize={512}
      />
      <ambientLight intensity={3.5} />
      <primitive
        object={astronaut1.scene}
        scale={6.35}
        position={[0, -1, -1.5]}
        rotation={[0, 3, 0]}
      />
    </mesh>
  );
};

const Astronaut1Canvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [enableZoom, setEnableZoom] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(max-width: 500px)');
      setIsMobile(mediaQuery.matches);
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setEnableZoom(true)}
      onMouseLeave={() => setEnableZoom(false)}
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <Canvas
        style={{ position: 'absolute', zIndex: 0, justifyItems: 'center', height: '100%', width: '100%' }}
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={enableZoom}
            enablePan={true}
            enableRotate={true}
          />
          <Astronaut1 isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Astronaut1Canvas;
