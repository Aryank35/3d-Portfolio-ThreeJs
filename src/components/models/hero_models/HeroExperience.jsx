import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      // ↓ limit pixel ratio so it doesn’t render in crazy high res on mobiles
      dpr={[1, 1.5]}
      // ↓ render only when needed (on interaction / changes)
      frameloop="demand"
      // ↓ usually helps a bit on some GPUs
      gl={{ powerPreference: "high-performance", antialias: true }}
    >
      {/* ambient base light */}
      <ambientLight intensity={0.2} color="#1a1a40" />

      {/* orbit controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Show a small fallback while Room (GLTF) loads */}
      <Suspense
        fallback={
          <mesh>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshBasicMaterial />
          </mesh>
        }
      >
        {/* Lights can be a bit heavy if you overdo it – keep HeroLights simple */}
        <HeroLights />

        {/* Particles can be expensive – reduce for mobile/tablet */}
        <Particles count={isMobile ? 40 : isTablet ? 70 : 100} />

        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>

        {/* Preload all assets once they’re requested */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
