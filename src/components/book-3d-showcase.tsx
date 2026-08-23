import React, { Suspense, useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment, Float, PerspectiveCamera, Text, useHelper } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

interface BookModelProps {
  coverUrl: string;
  rotation: [number, number, number];
}

function BookModel({ coverUrl, rotation }: BookModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  
  // Use a fallback to prevent loader from hanging if image is broken
  const texture = useLoader(THREE.TextureLoader, coverUrl);
  
  const { viewport } = useThree();
  
  // Set texture properties for best appearance
  useMemo(() => {
    if (texture) {
      texture.anisotropy = 16;
      texture.minFilter = THREE.LinearFilter;
      texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.needsUpdate = true;
    }
  }, [texture]);

  // Dimensions - slightly adjust for better viewport fit
  const width = 3.2;
  const height = 4.8;
  const thickness = 0.5;

  return (
    <group ref={meshRef} rotation={rotation} scale={viewport.width < 5 ? 0.7 : 1}>
      {/* Front Cover */}
      <mesh position={[0, 0, thickness / 2]}>
        <boxGeometry args={[width, height, 0.02]} />
        <meshStandardMaterial map={texture} roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Back Cover */}
      <mesh position={[0, 0, -thickness / 2]}>
        <boxGeometry args={[width, height, 0.02]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>

      {/* Spine */}
      <mesh position={[-width / 2, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[thickness, height, 0.02]} />
        <meshStandardMaterial color="#121212" roughness={0.8} />
      </mesh>

      {/* Pages (Top) */}
      <mesh position={[0, height / 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[width - 0.05, thickness - 0.02, 0.01]} />
        <meshStandardMaterial color="#eeeeee" roughness={0.5} />
      </mesh>

      {/* Pages (Bottom) */}
      <mesh position={[0, -height / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[width - 0.05, thickness - 0.02, 0.01]} />
        <meshStandardMaterial color="#eeeeee" roughness={0.5} />
      </mesh>

      {/* Pages (Right Edge) */}
      <mesh position={[width / 2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[thickness - 0.02, height - 0.05, 0.01]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.5} />
        {/* Subtle page lines */}
        <mesh position={[0, 0, 0.005]}>
          <planeGeometry args={[thickness - 0.02, height - 0.05]} />
          <meshBasicMaterial color="#cccccc" transparent opacity={0.2} />
        </mesh>
      </mesh>
      
      {/* Inner Paper Block */}
      <mesh position={[0.025, 0, 0]}>
        <boxGeometry args={[width - 0.05, height - 0.05, thickness - 0.04]} />
        <meshStandardMaterial color="#ffffff" roughness={1} />
      </mesh>
    </group>
  );
}

interface InteractiveBookShowcaseProps {
  covers: string[];
}

export function InteractiveBookShowcase({ covers }: InteractiveBookShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextBook = () => setActiveIndex((prev) => (prev + 1) % covers.length);
  const prevBook = () => setActiveIndex((prev) => (prev - 1 + covers.length) % covers.length);

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto space-y-8">
      {/* 3D Viewer Container */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-neutral-100 dark:bg-neutral-900/50 rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing border border-border/50 dark:border-white/5 shadow-2xl">
        
        
        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-4 z-10 flex items-center">
          <button 
            onClick={prevBook}
            className="p-3 rounded-full bg-background/80 dark:bg-black/40 backdrop-blur-md border border-border/50 dark:border-white/10 text-foreground hover:bg-background transition-all shadow-lg"
            aria-label="Previous book"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-4 z-10 flex items-center">
          <button 
            onClick={nextBook}
            className="p-3 rounded-full bg-background/80 dark:bg-black/40 backdrop-blur-md border border-border/50 dark:border-white/10 text-foreground hover:bg-background transition-all shadow-lg"
            aria-label="Next book"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Info Overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold bg-background/50 dark:bg-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full inline-block mb-2">
            Click & Drag to Rotate
          </p>
        </div>

        <Canvas 
          shadows 
          gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
          camera={{ position: [0, 0, 8], fov: 45 }}
        >
          <Suspense fallback={null}>
            <Environment preset="city" />
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
            <directionalLight position={[-5, 5, 5]} intensity={1} />
            
            <Float 
              speed={2} 
              rotationIntensity={0.2} 
              floatIntensity={0.5}
            >
              <BookModel 
                key={covers[activeIndex]} 
                coverUrl={covers[activeIndex]} 
                rotation={[0.1, 0.3, 0]} 
              />
            </Float>

            <ContactShadows 
              position={[0, -3, 0]} 
              opacity={0.6} 
              scale={15} 
              blur={2} 
              far={4.5} 
            />
          </Suspense>

          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            minPolarAngle={Math.PI / 4} 
            maxPolarAngle={Math.PI / 1.2}
            makeDefault
            rotateSpeed={0.5}
          />
        </Canvas>

        {/* Loading Indicator */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-data-[loading=true]:opacity-100 transition-opacity">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </div>
      </div>

      {/* Thumbnail Selector */}
      <div className="w-full">
        <div className="flex items-center justify-center gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
          {covers.map((url, i) => (
            <button
              key={url}
              onClick={() => setActiveIndex(i)}
              className={`
                relative flex-shrink-0 w-16 md:w-24 aspect-[2/3] rounded-md overflow-hidden transition-all duration-300 transform
                ${activeIndex === i ? 'ring-2 ring-foreground scale-105 shadow-xl' : 'opacity-50 hover:opacity-100 grayscale-[50%] hover:grayscale-0'}
              `}
            >
              <img src={url} alt={`Book thumbnail ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Book Metadata */}
      <motion.div 
        key={activeIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-xl px-6"
      >
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">Editorial Design</div>
        <h3 className="text-2xl font-bold text-foreground mb-3">Book Cover Design</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A collection of professionally designed book covers presented through realistic 3D mockups. Use the arrows or thumbnails to explore the series.
        </p>
      </motion.div>
    </div>
  );
}
