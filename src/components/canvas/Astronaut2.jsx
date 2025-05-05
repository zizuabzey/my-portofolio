import { Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Astronaut2 = () => {
  const astronaut2 = useGLTF('./happy_astro/scene.gltf')

  return (
    <primitive
      object={astronaut2.scene}
      // scale={2.5}
      scale={1.8}
      position-y={0}
      rotation-y={0}
    />
  )
}

const Astronaut2Canvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
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
        <Astronaut2 />
      </Suspense>
    </Canvas>
  )
}

export default Astronaut2Canvas;