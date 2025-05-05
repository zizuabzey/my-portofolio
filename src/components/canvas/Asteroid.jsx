import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import * as THREE from 'three';

import CanvasLoader from '../Loader';

const IrregularAsteroid = (props) => {
  const [decal, textureMap, normalMap] = useTexture([
    props.imgUrl, // Ikon teknologi
    '/desktop_pc/textures/Material.074_0_baseColor.png', // Tekstur berbatu
    '/desktop_pc/textures/Material.074_18_emissive.png', // Peta normal
  ]);

  const meshRef = useRef();

  // Animasi rotasi asteroid
  useFrame(() => {
    // Tidak ada rotasi otomatis
  });

  // Membuat geometri dengan deformasi lonjong tidak teratur
  const geometry = new THREE.TetrahedronGeometry(1, 2); // Menggunakan TetrahedronGeometry untuk bentuk segitiga tidak teratur
  const positionAttribute = geometry.attributes.position;
  const vertex = new THREE.Vector3();

  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);
    const offset = (Math.random() - 0.5) * 0.3; // Deformasi acak untuk membuat bentuk lebih tidak teratur
    vertex.multiplyScalar(1 + offset);
    positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }
  positionAttribute.needsUpdate = true;

  return (
    <Float speed={1.75} rotationIntensity={0} floatIntensity={2}>
      {' '}
      {/* Efek melayang */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={3} geometry={geometry}>
        {' '}
        {/* Bentuk asteroid tidak teratur */}
        <meshStandardMaterial
          color="#FFFFFF" 
          roughness={0.9}
          metalness={0.1}
          flatShading
        />
        {decal && (
          <Decal
            position={[0, 0, 1]} // Posisi ikon
            rotation={[0, 0, 0]} // Rotasi ikon
            scale={0.5} // Skala ikon
            flatShading
            map={decal}
          />
        )}
      </mesh>
    </Float>
  );
};

const IrregularAsteroidCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <IrregularAsteroid imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default IrregularAsteroidCanvas;
