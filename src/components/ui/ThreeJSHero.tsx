import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Shape, ExtrudeGeometry } from 'three';

// Mobile performance optimization
const useMobileOptimization = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [shouldRender, setShouldRender] = React.useState(true);

  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Reduce performance load on mobile with enhanced optimizations
      if (mobile) {
        // More aggressive mobile performance optimization
        setShouldRender(window.devicePixelRatio <= 2 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Pause animation when page is not visible (mobile battery optimization)
    const handleVisibilityChange = () => {
      setShouldRender(!document.hidden);
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return { isMobile, shouldRender };
};

interface BoxProps {
  position: [number, number, number];
  rotation: [number, number, number];
  isMobile: boolean;
}

const Box: React.FC<BoxProps> = ({ position, rotation, isMobile }) => {
  const shape = new Shape();
  const angleStep = Math.PI * 0.5;
  const radius = 1;

  shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1);
  shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2);
  shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3);
  shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4);

  const extrudeSettings = {
    depth: isMobile ? 0.2 : 0.3,
    bevelEnabled: true,
    bevelThickness: isMobile ? 0.03 : 0.05,
    bevelSize: isMobile ? 0.03 : 0.05,
    bevelSegments: isMobile ? 10 : 20,
    curveSegments: isMobile ? 10 : 20
  };

  const geometry = new ExtrudeGeometry(shape, extrudeSettings);
  geometry.center();

  return (
    <mesh
      geometry={geometry}
      position={position}
      rotation={rotation}
    >
      <meshPhysicalMaterial 
        color="#232323"
        metalness={1}
        roughness={0.3}
        reflectivity={0.5}
        ior={1.5}
        emissive="#000000"
        emissiveIntensity={0}
        transparent={false}
        opacity={1.0}
        transmission={0.0}
        thickness={0.5}
        clearcoat={0.0}
        clearcoatRoughness={0.0}
        sheen={0}
        sheenRoughness={1.0}
        sheenColor="#ffffff"
        specularIntensity={1.0}
        specularColor="#ffffff"
        iridescence={1}
        iridescenceIOR={1.3}
        iridescenceThicknessRange={[100, 400]}
        flatShading={false}
        side={0}
        alphaTest={0}
        depthWrite={true}
        depthTest={true}
      />
    </mesh>
  );
};

const AnimatedBoxes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { isMobile, shouldRender } = useMobileOptimization();

  useFrame((state, delta) => {
    if (groupRef.current && shouldRender) {
      groupRef.current.rotation.x += delta * (isMobile ? 0.03 : 0.05);
    }
  });

  // Reduce number of boxes on mobile for better performance
  const boxCount = isMobile ? 15 : 50; // Further reduced for better mobile performance
  const spacing = isMobile ? 1.2 : 0.75; // Increased spacing for mobile
  
  const boxes = Array.from({ length: boxCount }, (_, index) => ({
    position: [(index - boxCount/2) * spacing, 0, 0] as [number, number, number],
    rotation: [
      (index - 10) * 0.1,
      Math.PI / 2,
      0
    ] as [number, number, number],
    id: index
  }));

  if (!shouldRender) return null;

  return (
    <group ref={groupRef}>
      {boxes.map((box) => (
        <Box
          key={box.id}
          position={box.position}
          rotation={box.rotation}
          isMobile={isMobile}
        />
      ))}
    </group>
  );
};

export const ThreeJSHero: React.FC = () => {
  const { isMobile } = useMobileOptimization();
  
  // Don't render Three.js on mobile for better performance
  if (isMobile) {
    return null;
  }
  
  // Adjust camera position and lighting for mobile
  const cameraPosition: [number, number, number] = isMobile ? [3, 3, 15] : [5, 5, 20];
  const ambientIntensity = isMobile ? 8 : 12;
  const directionalIntensity1 = isMobile ? 10 : 15;
  const directionalIntensity2 = isMobile ? 5 : 8;

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none threejs-background" style={{ willChange: 'transform' }}>
      <Canvas camera={{ position: cameraPosition, fov: isMobile ? 35 : 40 }} dpr={isMobile ? 1 : undefined}>
        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[10, 10, 5]} intensity={directionalIntensity1} />
        <directionalLight position={[-10, -10, -5]} intensity={directionalIntensity2} />
        <AnimatedBoxes />
      </Canvas>
    </div>
  );
};