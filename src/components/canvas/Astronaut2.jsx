import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Astronaut2 = ({ isMobile }) => {
  const astronaut2 = useGLTF('./happy_astro/scene.gltf')

  return (
    <primitive
      object={astronaut2.scene}
      scale={isMobile ? 1.5 : 1.8}
      position={isMobile ? [-1, -0.5, 0] : [0, 0, 0]}
      rotation-y={0}
    />
  )
}

const Astronaut2Canvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(max-width: 500px)')

      setIsMobile(mediaQuery.matches)

      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches)
      }

      mediaQuery.addEventListener('change', handleMediaQueryChange)

      return () => mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: isMobile ? [-1.5, 2.5, 6] : [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={9}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Tambahkan Ambient Light */}
        <ambientLight intensity={0.8} />

        {/* Tambahkan Directional Light */}
        <directionalLight
          position={[10, 10, 10]}
          intensity={1}
          castShadow
          // shadow-mapSize-width={1024}
          // shadow-mapSize-height={1024}
          shadow-mapSize-width={512}
          shadow-mapSize-height={512}
        />
        <Astronaut2 isMobile={isMobile} />
      </Suspense>
    </Canvas>
  )
}

export default Astronaut2Canvas;
